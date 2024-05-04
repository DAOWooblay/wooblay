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

      const pinataMetadata = JSON.stringify({
        name: selectedFile.name,
      });
      formData.append('pinataMetadata', pinataMetadata);

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
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUploader;