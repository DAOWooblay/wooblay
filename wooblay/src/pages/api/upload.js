// pages/api/upload.js
import fs from 'fs';
import path from 'path';
import os from 'os';
import axios from 'axios';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Create a temporary JSON file
        const tempFilePath = path.join(os.tmpdir(), 'temp.json');

        const jsonData = {
            attributes: [
                { trait_type: 'NFT', value: 'Soulbound' },
                { trait_type: 'Asset', value: 'Non-transferable Badge' },
                { trait_type: 'Badge', value: 'Minting First Soulbound Token' },
                { trait_type: 'Type', value: 'Demo' },
            ],
            description: 'This is a demo soulbound token mint',
            image: `https://gateway.pinata.cloud/ipfs/${req.body.ipfsHash}`,
            name: 'Soulbound Token',
        };

        fs.writeFileSync(tempFilePath, JSON.stringify(jsonData));

        // Upload the JSON file to Pinata
        const formData = new FormData();
        formData.append('file', fs.createReadStream(tempFilePath));

        const pinataResponse = await axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS', formData, {
            maxContentLength: 'Infinity', // this is needed to prevent axios from erroring out with large files
            headers: {
                'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
                pinata_api_key: 'your_pinata_api_key',
                pinata_secret_api_key: 'your_pinata_secret_api_key',
            },
        });

        // Do something with the response...

        res.status(200).json({ status: 'success' });
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}