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
import Background from './assets/background.png';
import Particles from 'react-tsparticles';

function App() {
  const endpoint = import.meta.env.VITE_API_ENDPOINT;

  return (
    <>

      <div
        className="h-screen"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >

        <h1 className='text-white text-7xl mb-44 flex justify-center pt-20 max-md:text-6xl max-md:font-bold max-sm:text-5xl'>
          Web3 Faucet
        </h1>
        <div className="flex text-white justify-center items-center flex-col  bg-opacity-75">
          <ConnectionProvider endpoint={endpoint.toString()}>
            <WalletProvider wallets={[]} autoConnect>
              <WalletModalProvider>
                <span className='text-2xl text-white font-extrabold mb-12'>Connect your wallet:</span>
                <div className="flex justify-evenly text-white w-96">
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
      </div>
    </>
  )
}

export default App
