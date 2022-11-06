import { Web3ReactProvider } from "@web3-react/core";
import React from "react";
import ReactDOM from "react-dom/client";
import Web3 from "web3";
import App from "./App";
import "./index.css";
import { Web3Modal } from "@web3modal/react";

const config = {
  projectId: 'MY_DEMO_KEY',
  theme: 'dark' as any,
  accentColor: 'default' as any,
  ethereum: {
    appName: 'web3Modal'
  }
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <>
      <App />
      <Web3Modal config={config} />
    </>
  </React.StrictMode>
);
