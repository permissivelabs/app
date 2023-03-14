
import Router from "next/router";
import type { AppProps } from "next/app";
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { providers } from "ethers";
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import 'styles/globals.css';

const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

function MyApp({ Component, pageProps }: AppProps) {
  const { initialState } = pageProps;

  return (
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
  );
}

export default MyApp;
