# Contributing to Aether 🤝

We welcome contributions! Please follow these guidelines to ensure a smooth collaboration.

## Setup

1. Fork the repository.
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/Aether.git`
3. Install dependencies: `cd client && npm install`
4. Setup environment variables (see README).

## Development Workflow

1. Create a branch: `git checkout -b feat/my-feature`
2. Make your changes.
3. **Verify** your changes:
   - Run linter: `npm run lint`
   - Run tests: `npm test`
   - Run E2E: `npx playwright test` (if applicable)

## Pull Requests

- Keep PRs focused on a single feature or fix.
- Include a clear description of the problem and solution.
- Ensure CI passes (GitHub Actions will run automatically).

## Code Style

- We use **Prettier** for formatting.
- Components should be functional and typed with TypeScript interfaces.
- Use `tail-wind` classes for styling (avoid rapid inline styles where possible).

Thank you for building the future of privacy! 🚀
