import "./index.css";
import { Web3Button, useAccount } from "@web3modal/react";

function App() {
  const { account, isReady } = useAccount();

  return (
    <div className="container mx-auto py-6 min-h-screen grid place-items-center">
      {account.isConnected ? <h1>{account.address}</h1> : null}
      <Web3Button />
    </div>
  );
}

export default App;
