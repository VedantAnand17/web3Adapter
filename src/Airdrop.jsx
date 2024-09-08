import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Button } from "./components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function Airdrop() {

    const wallet = useWallet();
    const { connection } = useConnection();

    async function sendAirdropToUser() {
        const amount = document.getElementById("publicKey")?.value
        await connection.requestAirdrop(wallet.publicKey, amount * 1000000000)
        alert("Airdrop sent to " + wallet.publicKey?.toString())
    }

    return (
        <div className="flex justify-center items-center flex-col p-5">
            Welcome to the Airdrop page, Wallet: {wallet.publicKey?.toString()}
            {/* <input id="publicKey" type="text" placeholder="Amount" /> */}
            <div className="flex w-full max-w-sm items-center space-x-2 p-5">
                <Input id="publicKey" type="text" placeholder="Amount" />
                <Button onClick={sendAirdropToUser}>Send Airdrop</Button>
            </div>
            {/* <button onClick={sendAirdropToUser}>Send Airdrop</button> */}
        </div>
    )
}

export default Airdrop