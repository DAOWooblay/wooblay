import { motion } from 'framer-motion';
import FileUploader from '../../components/pinata';
import Navbar from '../../components/Navbar';
import { NextPage } from 'next';
import { useState } from 'react';

const daocreate: NextPage = () => {

    const [daoName, setDaoName] = useState('');
    return (
        <div>
            <Navbar />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="p-8 pt-36">
                <div className="space-y-4">
                    <h1 className="text-2xl font-bold">Step 1: Enter DAO Name</h1>
                    <input type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
                    <h1 className="text-2xl font-bold">Step 2: Name Abbreviation</h1>
                    <input type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
                    <h1 className="text-2xl font-bold">Step 3: Add funds</h1>
                    <textarea className="textarea textarea-info" placeholder="funds"></textarea>
                    <h1 className="text-2xl font-bold">Step 4: Logo</h1>
                    <FileUploader />
                </div>
            </motion.div>
        </div>
    );
};

export default daocreate;