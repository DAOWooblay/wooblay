
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';


export default function index({ nfts }: { nfts: any }) {
	//Router
	const router = useRouter();

	// This will be replaced with the actual NFTs
	// Use Wagmi to read the NFTs from the user's wallet
	// Then for each NFT you'll display a button
	console.log(nfts, "nftsss");
	return (
		<div className="flex w-1/4">
			<nav className="bg-gray-800 h-screen border-r-2 border-white border-double">
				<div className="p-4 pt-36">
					<div className="flex flex-col items-center gap-6">
						{nfts?.length > 0 ? (
							<>
								<>
									{nfts.map((nft: any) => (
										<button className="w-16 h-16 rounded-full mb-2 bg-white">
											<img src={nft.image.cachedUrl} alt="Button 1" className="w-full h-full" />
										</button>
									))}
								</>
							</>
						) : (
							"Sorry you have no NFTs"
						)}


						<button className="w-14 h-14 rounded-full bg-white text-black text-lg">+</button>
					</div>
				</div>
				<ul className="flex ml-4 mr-4 pt-14 space-x-4">
					<li>
						<Link href="/explorer">
							<h2
								className={`px-2 py-1 rounded text-lg ${
									router.pathname === "/explorer" ? "bg-blue-500 text-white" : "text-blue-500 hover:bg-blue-500 hover:text-white"
								} transition-colors duration-200`}
							>
								Explorer
							</h2>
						</Link>
					</li>
					<li>
						<Link href="/tutorial">
							<h2
								className={`px-2 py-1 rounded text-lg ${
									router.pathname === "/tutorial" ? "bg-blue-500 text-white" : "text-blue-500 hover:bg-blue-500 hover:text-white"
								} transition-colors duration-200`}
							>
								Tutorial
							</h2>
						</Link>
					</li>
					<li>
						<Link href="/profile">
							<h2
								className={`px-2 py-1 rounded text-lg ${
									router.pathname === "/profile" ? "bg-blue-500 text-white" : "text-blue-500 hover:bg-blue-500 hover:text-white"
								} transition-colors duration-200`}
							>
								Profile
							</h2>
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

    //Pop up on DAO create button
    const [isHovered, setIsHovered] = useState(false);


    // This will be replaced with the actual NFTs
    // Use Wagmi to read the NFTs from the user's wallet
    // Then for each NFT you'll display a button
    console.log(nfts, 'nftsss')
    return (
        <div className="flex w-1/4">
            <nav className="bg-gray-800 h-screen border-r-2 border-white border-double">
                <div className="p-4 pt-36">
                    <div className="flex flex-col items-center gap-6">
                        {nfts?.length > 0 ? <>
                            <>{nfts.map((nft: any) => (
                                <button className="w-16 h-16 rounded-full mb-2 bg-white">
                                    <img src={nft.image.cachedUrl} alt="Button 1" className="w-full h-full" />
                                </button>))}
                            </>
                        </> : "Sorry you have no NFTs"}


                        <button
                            className="w-14 h-14 rounded-full bg-white text-black text-lg relative"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <a href='/daocreate'>+</a>
                            {isHovered && (
                                <div className="absolute top-0 left-0 mt-16 ml-4 p-2 bg-blue-500 text-white rounded shadow-lg">
                                    Create a DAO
                                </div>
                            )}
                        </button>
                    </div>
                </div>
                <ul className="flex ml-4 mr-4 pt-14 space-x-4">
                    <li>
                        <Link href="/explorer">
                            <h2 className={`px-2 py-1 rounded text-lg ${router.pathname === '/explorer' ? 'bg-blue-500 text-white' : 'text-blue-500 hover:bg-blue-500 hover:text-white'} transition-colors duration-200`}>Explorer</h2>
                        </Link>
                    </li>
                    <li>
                        <Link href="/tutorial">
                            <h2 className={`px-2 py-1 rounded text-lg ${router.pathname === '/tutorial' ? 'bg-blue-500 text-white' : 'text-blue-500 hover:bg-blue-500 hover:text-white'} transition-colors duration-200`}>Tutorial</h2>
                        </Link>
                    </li>
                    <li>
                        <Link href="/profile">
                            <h2 className={`px-2 py-1 rounded text-lg ${router.pathname === '/profile' ? 'bg-blue-500 text-white' : 'text-blue-500 hover:bg-blue-500 hover:text-white'} transition-colors duration-200`}>Profile</h2>
                        </Link>
                    </li>
                </ul>
            </nav>


        </div>
    )
}

