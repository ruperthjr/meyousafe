# meyousafe frontend

A platform to facilitate reporting of sexual harassment in Kenya

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Styled Components** - CSS-in-JS styling
- **React Router** - Client-side routing
- **TanStack Query** - Server state management
- **Formik + Yup** - Form handling and validation
- **Vitest** - Unit testing
- **Testing Library** - Component testing

## Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0

## Getting Started
```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Run tests
pnpm test

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm test` - Run tests
- `pnpm test:ui` - Run tests with UI
- `pnpm test:coverage` - Generate coverage report
- `pnpm lint` - Lint code
- `pnpm lint:fix` - Fix linting issues
- `pnpm format` - Format code with Prettier
- `pnpm type-check` - Check TypeScript types


## Environment Variables

Copy `.env.example` to `.env.local` and configure:
```env
VITE_API_BASE_URL=http://localhost:8000
VITE_APP_NAME=SafeSpace
VITE_ENABLE_ENCRYPTION=true
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

## License

MIT License - See LICENSE file for details