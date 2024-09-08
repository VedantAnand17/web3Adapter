import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
  WalletConnectButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import Balance from './Balance';
import "./index.css";

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import Airdrop from './Airdrop';
import { Toaster } from "@/components/ui/sonner"

function App() {
  const endpoint = import.meta.env.VITE_API_ENDPOINT;

  return (
    <>
      <div className="flex justify-center items-center flex-col h-screen">
      <ConnectionProvider endpoint={endpoint.toString()}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <div className="flex justify-evenly w-screen">
            <WalletMultiButton />
            <WalletDisconnectButton />
            </div>
            <Airdrop />
            <Balance />
            <Toaster />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
      </div>
    </>
  )
}

export default App
