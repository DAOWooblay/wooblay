import React, { useState } from 'react';
import axios from 'axios';
import FormData from 'form-data';

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJjODMwZWM5My05Nzk2LTRkZWYtYWFmNC01Yzc0NzJmM2ViYzEiLCJlbWFpbCI6ImphY2thdXN0aW5jNjZAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImRhNjQ1YmViMjExZDI4MjE3OTQ3Iiwic2NvcGVkS2V5U2VjcmV0IjoiN2Y0YTVkNDBhYTQ0ODlhMmRkNjNhZTNlZjZkMjRiZDkwOGI2YjM0NWQyMDVmZjNkYzJjMGE0NWRmY2FlMTRiZCIsImlhdCI6MTcxNDc5NzE1N30.jeBDOfqWlP7A20nUmroz3OQ1VCm_9rE-g_Kdk86bryU";

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const pinataOptions = JSON.stringify({
        cidVersion: 0,
      });
      formData.append('pinataOptions', pinataOptions);

      try {
        const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
          headers: {
            'Authorization': `Bearer ${JWT}`
          }
        });
        console.log(res.data);
        console.log(res.data.IpfsHash);
        const ipfsHash = res.data.IpfsHash;

        // Create JSON data
        const jsonData = {
          attributes: [
            { trait_type: 'NFT', value: 'Soulbound' },
            { trait_type: 'Asset', value: 'Non-transferable Badge' },
            { trait_type: 'Badge', value: 'Minting First Soulbound Token' },
            { trait_type: 'Type', value: 'Demo' },
          ],
          description: 'This is a demo soulbound token mint',
          image: `https://gateway.pinata.cloud/ipfs/${ipfsHash}`,
          name: 'Soulbound Token',
        };

        // Convert JSON data to Blob
        const jsonBlob = new Blob([JSON.stringify(jsonData)], { type: 'application/json' });

        // Create a new FormData instance
        const jsonFormData = new FormData();
        jsonFormData.append('file', jsonBlob, 'data.json');
        jsonFormData.append('pinataOptions', pinataOptions);

        // Upload the JSON to Pinata
        const jsonRes = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", jsonFormData, {
          headers: {
            'Authorization': `Bearer ${JWT}`
          }
        });
        console.log(jsonRes.data);

      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      <input type="file" onChange={handleFileChange} className="py-2" />
      <button onClick={handleUpload} className="w-1/4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Upload</button>
    </div>
  );
};

export default FileUploader;