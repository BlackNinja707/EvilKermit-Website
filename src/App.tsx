import React, { useRef } from "react";

import "./App.css";
import Header from "./page/header";
import Tokenomics from "./page/ChartPart";
import RoadMap from "./page/RoadMap";
import PresaleCountDown from "./page/Presale";
import EvilKermitBuy from "./page/HowToBuy";
import Community from "./page/Community";
import FootPage from "./page/Footpage";
import Navbar from "./page/Navbar";

import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { mainnet, polygon} from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains: [mainnet, polygon],
  ssr: true, // If your dApp uses server side rendering (SSR)
});
const queryClient = new QueryClient();

function App() {

  const section1Ref = useRef<HTMLDivElement | null>(null);
  const section2Ref = useRef<HTMLDivElement | null>(null);
  const section3Ref = useRef<HTMLDivElement | null>(null);
  const section4Ref = useRef<HTMLDivElement | null>(null);
  const section5Ref = useRef<HTMLDivElement | null>(null);


  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <div className="w-full body-background text-white relative overflow-hidden flex flex-col itemss-center">
            <Navbar section1Ref={section1Ref} section2Ref={section2Ref} section3Ref={section3Ref} section4Ref={section4Ref} section5Ref={section5Ref}/>
            <Header ref={section1Ref}/>
            <Tokenomics ref={section2Ref}/>
            <RoadMap ref={section3Ref}/>
            <PresaleCountDown ref={section4Ref} />
            <EvilKermitBuy />
            <Community ref={section5Ref}/>
            <FootPage />
          </div>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
