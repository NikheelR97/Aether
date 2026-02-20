import { describe, it, expect, beforeEach, vi } from 'vitest';
import { PersistentSignalProtocolStore } from './e2ee';
import { KeyHelper } from '@privacyresearch/libsignal-protocol-typescript';

// Mock LocalStorage
const localStorageMock = (function () {
    let store: { [key: string]: string } = {};
    return {
        getItem: vi.fn((key: string) => store[key] || null),
        setItem: vi.fn((key: string, value: string) => {
            store[key] = value.toString();
        }),
        removeItem: vi.fn((key: string) => {
            delete store[key];
        }),
        clear: vi.fn(() => {
            store = {};
        }),
    };
})();

Object.defineProperty(globalThis, 'localStorage', {
    value: localStorageMock,
});

describe('PersistentSignalProtocolStore', () => {
    let store: PersistentSignalProtocolStore;
    const TEST_PREFIX = 'test_store_';

    beforeEach(() => {
        localStorage.clear();
        store = new PersistentSignalProtocolStore(TEST_PREFIX);
    });

    it('should save and load IdentityKeyPair correctly (ArrayBuffer handling)', async () => {
        const identity = await KeyHelper.generateIdentityKeyPair();
        const registrationId = 12345;

        // Save
        await store.setIdentity(identity, registrationId);

        // Verify it called localStorage
        expect(localStorage.setItem).toHaveBeenCalled();
        const storedData = localStorage.getItem(TEST_PREFIX + 'data');
        expect(storedData).toBeTruthy();

        // Manual verification of JSON structure (Replacer check)
        const parsed = JSON.parse(storedData!);
        expect(parsed.identityKeyPair.pubKey.type).toBe('ArrayBuffer');
        // Wait, our replacer uses 'ArrayBuffer' OR 'Buffer' depending on implementation details we should verify.
        // In our e2ee.ts we wrote: type: 'IdentityKeyPair', pubKey: { type: 'ArrayBuffer', ... }

        // Let's verify our specific format from e2ee.ts:
        // if (value instanceof ArrayBuffer) -> { type: 'ArrayBuffer', data: [...] }

        // Reload a new store instance to test Reviver
        const newStore = new PersistentSignalProtocolStore(TEST_PREFIX);
        const loadedIdentity = await newStore.getIdentityKeyPair();

        expect(loadedIdentity).toBeDefined();
        expect(loadedIdentity?.pubKey).toBeInstanceOf(ArrayBuffer);
        expect(loadedIdentity?.privKey).toBeInstanceOf(ArrayBuffer);

        // Check integrity
        const originalPub = new Uint8Array(identity.pubKey);
        const loadedPub = new Uint8Array(loadedIdentity!.pubKey);
        expect(loadedPub).toEqual(originalPub);
    });

    it('should save and load Sessions correctly', async () => {
        const sessionId = 'user1@1';
        const sessionRecord = 'mock_session_record_string'; // We use strings mostly or objects

        await store.storeSession(sessionId, sessionRecord);

        const loadedSession = await store.loadSession(sessionId);
        expect(loadedSession).toBe(sessionRecord);
    });

    it('should handle consistency validation', async () => {
        // Empty store should be valid (technically) or return true
        expect(await store.validateConsistency()).toBe(true);

        // Corrupt the store manually
        const identity = await KeyHelper.generateIdentityKeyPair();
        await store.setIdentity(identity, 1);

        const raw = JSON.parse(localStorage.getItem(TEST_PREFIX + 'data')!);
        // Corrupt the public key by making it a number or string
        raw.identityKeyPair.pubKey = "NOT_A_BUFFER";

        localStorage.setItem(TEST_PREFIX + 'data', JSON.stringify(raw));

        // Reload
        const badStore = new PersistentSignalProtocolStore(TEST_PREFIX);

        // Debug
        // console.log('BadStore Identity:', badStore['identityKeyPair']);

        // Add a signed prekey to bypass the "empty keys = valid" check
        await badStore.storeSignedPreKey(1, { keyPair: { pubKey: new ArrayBuffer(32), privKey: new ArrayBuffer(32) }, signature: new ArrayBuffer(64) });

        // Now validate should fail because ID Key is corrupt
        const valid = await badStore.validateConsistency();
        expect(valid).toBe(false);
    });
});
