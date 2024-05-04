import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";
import { IAddress } from "../../models/address";
import Navbar from "../../components/Navbar";
import DAONavbar from "../../components/DAONavbar";

const UserProfile: NextPage = () => {
  const { address } = useAccount();
  const [addresses, setAddresses] = useState<IAddress[]>([]);

  // Fetch addresses from API
  useEffect(() => {
    fetch("api/address")
      .then((res) => res.json())
      .then((data: IAddress[]) => {
        setAddresses(data);
      });
  }, []);

  return (
    <div className="flex">
      <Navbar />
      <DAONavbar nfts="" />
      {/* Overlay content directly below the DAONavbar */}
      <div
        style={{
          position: "absolute",
          top: "100%", // Start directly below the DAONavbar
          left: 0,
          right: 0,
          textAlign: "center",
          zIndex: 10,
        }}
      >
        {addresses.map((address, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 p-4 bg-white bg-opacity-80"
          >
            <div className="badge badge-info">Twitter: {address.twitter}</div>
            <div className="badge badge-success">
              Telegram: {address.telegram}
            </div>
            <div className="badge badge-neutral">Bio: {address.bio}</div>
            <div className="badge badge-lg">
              nftIds: {JSON.stringify(address.nft_ids)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
