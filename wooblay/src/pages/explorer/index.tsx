
import React, { useEffect } from "react";
import type { NextPage } from "next";
import Navbar from "../../components/Navbar";
import DAONavbar from "../../components/DAONavbar";
import DAOCard from "../../components/DAOCard";
import { useAccount } from "wagmi";
import { useState } from "react";

const Explorer: NextPage = () => {

	// 3) Use WAGMI useReadContract to read the tokenURI for each NFT tokenID

	// Setting the details of the belongings of users address
	const { address } = useAccount();
	console.log(address, 'address')
	const [nfts, setNfts] = useState<any[]>([]);

	// 1) Use Alchemy to get all NFTs for a particular user
	// 2) Filter all DAO NFTs... nfts.filter(nft => nft.contractAddress === DAO_CONTRACT_ADDRESS)
	useEffect(() => {
		if (address) {
			const options = { method: 'GET', headers: { accept: 'application/json' } };
			//const owner = '0x3bBFE54bB63a3a2DdB9663269545e172b176Df9e'
			fetch(`https://base-sepolia.g.alchemy.com/v2/N_PMQDR6AmpRD9WIaEN9eQtFJDa7wgYY/getNFTsForOwner?owner=${address}&withMetadata=true&pageSize=100`, options)
				.then(response => response.json())
				.then(response => {
					console.log(response)
					console.log(response.ownedNfts)
					setNfts(response.ownedNfts);
				})
				.catch(err => console.error(err));
		}
	}, [address]);


	// {
	// 	"inputs": [
	// 		{
	// 			"internalType": "uint256",
	// 			"name": "tokenId",
	// 			"type": "uint256"
	// 		}
	// 	],
	// 	"name": "tokenURI",
	// 	"outputs": [
	// 		{
	// 			"internalType": "string",
	// 			"name": "",
	// 			"type": "string"
	// 		}
	// 	],
	// 	"stateMutability": "view",
	// 	"type": "function"
	// },

	return (
		<div>
			<video className="fixed top-0 left-0 w-full h-full object-cover" src={"background.mp4"} autoPlay loop muted />
			<div className="relative z-10 bg-black bg-opacity-40 pt-16">
				{/* Adjust the top padding to avoid overlap */}
				<div className="flex-col">
					<Navbar />
				</div>

				<div className="flex">
					<DAONavbar nfts={nfts} />
					<div id="daos" className="flex-1 p-8 h-screen overflow-y-auto">
						<h2 className="text-3xl font-bold text-white">DAO Projects</h2>
						<DAOCard />
						<DAOCard />
						<DAOCard />
						<DAOCard />
						<DAOCard />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Explorer;

function setNfts(response: any) {
	throw new Error("Function not implemented.");
}
