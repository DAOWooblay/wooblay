import { ConnectButton } from '@rainbow-me/rainbowkit';
import React from 'react';
import { useAccount, useReadContract } from 'wagmi'

const CONTRACT_ADDRESSS = ['0x234234', '0x345r45435', '0x4r54545']

const Navbar: React.FC = () => {


    return (
        <div>
            {/* Top Navigation */}
            <nav className="flex justify-between items-center bg-gray-800 p-4 border-b-2 border-white border-double fixed w-full z-10">
                <div className="flex items-center">
                    <img src={'logo.png'} alt="Logo" className="w-32 h-12 ml-8" />
                </div>
                <ConnectButton />
            </nav>

        </div>
    );
};

export default Navbar;