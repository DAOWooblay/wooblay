import { NextPage } from 'next';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import FileUploader from '../../components/pinata';
import { motion } from 'framer-motion';

const daocreate: NextPage = () => {
    const [daoName, setdaoName] = useState('');
    const [tickerName, settickerName] = useState('');

    return (
        <div>
            <Navbar />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="p-8 pt-36">
                <div className="space-y-4">
                    <h1 className="text-2xl font-bold">Step 1: Enter DAO Name</h1>
                    <input type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" value={daoName} onChange={(e) => setdaoName(e.currentTarget.value)} />
                    <h1 className="text-2xl font-bold">Step 2: Name Abbreviation</h1>
                    <input type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" value={tickerName} onChange={(e) => settickerName(e.currentTarget.value)} />
                    <h1 className="text-2xl font-bold">Step 3: Add funds</h1>
                    <textarea className="textarea textarea-info" placeholder="funds"></textarea>
                    <h1 className="text-2xl font-bold">Step 4: Logo</h1>
                    <FileUploader />
                    <button
                        onClick={() => {
                            // Handle button click here
                        }}
                    >
                        Create DAO
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default daocreate;