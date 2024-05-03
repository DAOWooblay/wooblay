import { ConnectButton } from '@rainbow-me/rainbowkit';
import React from 'react';

interface NavbarProps {
    profilePicture: string; // URL of the profile picture
    logo: string; // URL of the logo
}

const Navbar: React.FC<NavbarProps> = ({ profilePicture, logo }) => {
    return (
        <div>
            {/* Top Navigation */}
            <nav className="flex justify-between items-center bg-gray-800 p-4 border-b-2 border-white border-double fixed w-full z-10">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="w-12 h-12 mr-4" />
                </div>
                <ul className="flex">
                    <li className="mr-4">
                        <a href="#" className="text-white hover:underline">Link 1</a>
                    </li>
                    <li className="mr-4">
                        <a href="#" className="text-white hover:underline">Link 2</a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:underline">Link 3</a>
                    </li>
                </ul>
                <img src={profilePicture} alt="Profile" className="w-10 h-10 rounded-full" />
            </nav>
            {/* Rest of the content */}

            <header className="py-8 border-b mb-10">
                <div className="flex items-center justify-between">
                    <h1 className="text-lg md:text-xl font-bold">
                        Solidity Next.js Starter
                    </h1>
                    <ConnectButton
                        showBalance={false}
                        accountStatus="address"
                        label="Connect"
                    />
                </div>
            </header>

        </div>
    );
};

export default Navbar;