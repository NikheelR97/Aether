import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('App Test', () => {
    it('should pass basic math', () => {
        expect(1 + 1).toBe(2);
    });

    it('should render something', () => {
        render(<div>Hello Vitest</div>);
        expect(screen.getByText('Hello Vitest')).toBeInTheDocument();
    });
});
