# Web3 Wallet Adapter

A modern React application demonstrating Solana wallet integration, development token airdrop as a faucet and SOL token management with a clean, responsive UI built using Tailwind CSS and shadcn/ui components.

## Features

- 🔐 Solana Wallet Integration
- 💰 SOL Balance Display
- 🎯 Airdrop Functionality
- 🎨 Modern UI with Dark Mode Support
- 📱 Fully Responsive Design

## Project Structure

```
src/
├── components/         # Reusable UI components
│   └── ui/            # shadcn/ui components
├── lib/               # Utility functions
├── App.jsx            # Main application component
├── Airdrop.jsx        # Airdrop functionality
├── Balance.jsx        # SOL balance display
└── main.jsx          # Application entry point
```

## Best Practices Implemented

- **Component-Based Architecture**: Each component is focused on a single responsibility
- **Modular Design**: Code is organized into small, manageable modules
- **Consistent Styling**: Using Tailwind CSS with shadcn/ui for a cohesive look
- **Clean Code**: Following React best practices and modern JavaScript conventions
- **Error Handling**: Proper error management with user-friendly notifications
- **Responsive Design**: Mobile-first approach ensuring compatibility across devices

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Solana endpoint:
```env
VITE_API_ENDPOINT=your_solana_endpoint_here
```

4. Start the development server:
```bash
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Blockchain**: Solana Web3.js
- **Wallet Integration**: Solana Wallet Adapter
- **Toast Notifications**: Sonner

## Project Dependencies

### Core Dependencies
- React and React DOM
- Solana Web3.js and Wallet Adapter
- Tailwind CSS
- shadcn/ui components

### Development Dependencies
- Vite
- ESLint
- PostCSS
- Autoprefixer

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [Solana](https://solana.com/) - Blockchain platform
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
