import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Button } from "./components/ui/button";
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import "./index.css";

function Airdrop() {
  const wallet = useWallet();
  const { connection } = useConnection();

  async function sendAirdropToUser() {
    try {
      const amount = document.getElementById("publicKey")?.value;
      if (!amount) {
        throw new Error("Amount is required");
      }
      await connection.requestAirdrop(wallet.publicKey, amount * 1000000000);
      return "Airdrop sent successfully";
    } catch (error) {
      throw new Error(error.message || "Airdrop failed");
    }
  }

  const handleAirdrop = () => {
    sendAirdropToUser()
      .then((message) => {
        toast.success(message + " to " + wallet.publicKey?.toString());
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="flex justify-center mx-1 items-center flex-col p-5 text-center font-medium text-lg max-sm:text-xs">
      Welcome to the Airdrop page !!
      <br />
      Wallet: {wallet.publicKey?.toString()}
      <div className="flex text-zinc-800 w-full max-w-sm items-center space-x-2 p-5">
        <Input id="publicKey" type="text" placeholder="Amount" />
        <Button className="" variant="outline" onClick={handleAirdrop} >
          Send Airdrop
        </Button>
      </div>
    </div>
  );
}

export default Airdrop;