import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

function ShowSolBalance() {
    const { connection } = useConnection();
    const wallet = useWallet();

    async function getBalance() { 
        if (wallet.publicKey) {

            const balance = await connection.getBalance(wallet.publicKey);
            document.getElementById("balance").innerHTML = balance / LAMPORTS_PER_SOL + " SOL";
        }
    }
    
    getBalance();
    return <div className="text-center font-medium text-lg">
        <p>SOL Balance:</p> <div id="balance"></div>
    </div>
}

export default ShowSolBalance;