import { useConnection, useWallet } from "@solana/wallet-adapter-react";

function Airdrop() {

    const wallet = useWallet();
    const { connection } = useConnection();

    async function sendAirdropToUser() {
        const amount = document.getElementById("publicKey")?.value
        await connection.requestAirdrop(wallet.publicKey, amount * 1000000000)
        alert("Airdrop sent to " + wallet.publicKey?.toString())
    }

    return (
        <div>
            Welcome to the Airdrop page {wallet.publicKey?.toString()}
            <input id="publicKey" type="text" placeholder="Amount" />
            <button onClick={sendAirdropToUser}>Send Airdrop</button>
        </div>
    )
}

export default Airdrop