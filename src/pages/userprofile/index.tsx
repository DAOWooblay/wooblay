import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";
import { IAddress } from "../../models/address";

const userprofile: NextPage = () => {
  const { address } = useAccount();
  const [addresses, setAddresses] = useState<IAddress[]>([]);

  // To fetch from API
  useEffect(() => {
    fetch("api/address")
      .then((res) => res.json())
      .then((data: IAddress[]) => {
        setAddresses(data);
      });
  }, []);

  return <></>;
};

export default userprofile;
