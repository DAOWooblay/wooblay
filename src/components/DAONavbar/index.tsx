import React from 'react'

export default function index({ nfts }: { nfts: any }) {
    // This will be replaced with the actual NFTs
    // Use Wagmi to read the NFTs from the user's wallet
    // Then for each NFT you'll display a button
    console.log(nfts, 'nftsss')
    return (
        <div className="flex">
            <nav className="bg-gray-800 w-64 h-screen border-r-2 border-white border-double">
                <div className="p-4 pt-36">
                    <div className="flex flex-col items-center gap-6">
                        {nfts?.length > 0 ? <>
                            <>{nfts.map((nft: any) => (
                                <button className="w-16 h-16 rounded-full mb-2 bg-white">
                                    <img src={nft.image.cachedUrl} alt="Button 1" className="w-full h-full" />
                                </button>))}
                            </>
                        </> : "Sorry you have no NFTs"}

                        <button className="w-14 h-14 rounded-full bg-white text-black text-lg">
                            +
                        </button>
                    </div>
                </div>
                <ul className="flex ml-4 pt-14">
                    <li className="mr-4">
                        <a href="#" className="text-white hover:underline">Explorer</a>
                    </li>
                    <li className="mr-4">
                        <a href="#" className="text-white hover:underline">Tutorial</a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:underline">Profile</a>
                    </li>
                </ul>
            </nav>


        </div>
    )
}