import { NextPage } from 'next';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FileUploader from '../../components/pinata';

const daocreate: NextPage = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        abbreviation: '',
        description: '',
        image: '',
        governance: '',
        treasury: '',
        categories: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleNextStep = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };


    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="p-8">
            {step === 1 && (
                <div className="space-y-4">
                    <h1>Part 1: Project Idea</h1>
                    <p>What is this setting up (details for public to see)</p>
                    <h1 className="text-2xl font-bold">Step 1: Enter DAO Name</h1>
                    <input type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
                    <h1 className="text-2xl font-bold">Step 2: Name Abbreviation</h1>
                    <input type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
                    <h1 className="text-2xl font-bold">Step 3: DAO Bio</h1>
                    <textarea className="textarea textarea-info" placeholder="Bio"></textarea>
                    <h1 className="text-2xl font-bold">Step 4: Select Categories</h1>
                    <select
                        name="category"
                        className="select select-info w-full max-w-xs"
                        value={formData.governance}
                        onChange={handleInputChange}
                    >
                        <option disabled selected>Select most relevant</option>
                        <option>Cyber security</option>
                    </select>
                    <button onClick={handleNextStep} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg transition-colors duration-200">Next</button>

                </div>
            )}

            {step === 2 && (
                <div className="space-y-4">
                    <h1>Part 2: Governance</h1>
                    <p>What is this setting up (NFT for ownership)</p>
                    <FileUploader />
                    <h1 className="text-2xl font-bold">Step 5: Select Governance Model</h1>
                    <select
                        name="governance"
                        className="select select-info w-full max-w-xs"
                        value={formData.governance}
                        onChange={handleInputChange}
                    >
                        <option disabled selected>Select model</option>
                        <option>ApeCoi Governance</option>
                    </select>
                    <button onClick={handleNextStep} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg transition-colors duration-200">Next</button>
                </div>
            )}

            {step === 3 && (
                <div className="space-y-4">
                    <h1>Part 3: Treasury</h1>
                    <p>What is this setting up (money) small fee will be payment for DAO creation</p>
                    <h1 className="text-2xl font-bold">Step 6: Add initial funds</h1>
                    <textarea className="textarea textarea-info" placeholder="funds"></textarea>
                    <button onClick={handleNextStep} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg transition-colors duration-200">Next</button>
                </div>
            )}
            {step === 4 && (
                <div className="space-y-4">
                    <h1 className="text-2xl font-bold">Step 4: Review and Submit</h1>
                    <p>DAO Name: {formData.name}</p>
                    <p>DAO Abbreviation: {formData.abbreviation}</p>
                    <p>DAO Description: {formData.description}</p>
                    <p>DAO Image: {formData.image}</p>
                    <p>DAO Governance Model: {formData.governance}</p>
                    <p>DAO Treasury: {formData.treasury}</p>
                    <p>DAO Categories: {formData.categories}</p>
                    <button onClick={handleSubmit} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg transition-colors duration-200">Submit</button>
                </div>
            )}
        </motion.div>
    );
};

export default daocreate;