import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";
import { IDaoProfile } from "../../models/daoprofile";

const userprofile: NextPage = () => {
  const { address } = useAccount();
  const [addresses, setAddresses] = useState<IDaoProfile[]>([]);

  // To fetch from API
  useEffect(() => {
    fetch("api/address")
      .then((res) => res.json())
      .then((data: IDaoProfile[]) => {
        setAddresses(data);
      });
  }, []);

  return <></>;
};

export default userprofile;
