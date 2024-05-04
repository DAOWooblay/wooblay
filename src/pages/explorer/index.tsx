import React, { useEffect } from 'react'
import type { NextPage } from 'next';
import Navbar from '../../components/Navbar';
import DAONavbar from '../../components/DAONavbar';
import { useAccount } from 'wagmi';
import { useState } from 'react';

const Explorer: NextPage = () => {

    // Setting the details of the belongings of users address
    const { address } = useAccount()
    const DAO_CONTRACT_ADDRESS = '0x0379DaDA4721c1FA956A46A5Dd70adab19280336'
    const [nfts, setNfts] = useState<any[]>([]);

    // 1) Use Alchemy to get all NFTs for a particular user
    // 2) Filter all DAO NFTs... nfts.filter(nft => nft.contractAddress === DAO_CONTRACT_ADDRESS)
    useEffect(() => {
        const options = { method: 'GET', headers: { accept: 'application/json' } };
        //const owner = '0x3bBFE54bB63a3a2DdB9663269545e172b176Df9e'
        fetch(`https://eth-sepolia.g.alchemy.com/nft/v3/tF4qZ3OVmTjsEfYr_GxJsXPZQIkkDgf9/getNFTsForOwner?owner=${address}&withMetadata=true&pageSize=100`, options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                const hasDAOContract = response.ownedNfts?.some((nft: any) => nft.contract.address === DAO_CONTRACT_ADDRESS);
                console.log(hasDAOContract)
                if (hasDAOContract) setNfts(response.ownedNfts.filter((nft: any) => nft.contract.address === DAO_CONTRACT_ADDRESS));
                console.log(hasDAOContract ? 'DAO contract address found' : 'DAO contract address not found');
            })
            .catch(err => console.error(err));
    }, []);

    // 3) Use WAGMI useReadContract to read the tokenURI for each NFT tokenID

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
        <div className="relative">
            <Navbar />
            <DAONavbar nfts={nfts} />
            <div className="pt-[navbar-height] pl-[daonavbar-width]">
                <>hi</>
            </div>
        </div>
    )
}

export default Explorer;

function setNfts(response: any) {
    throw new Error('Function not implemented.');
}
