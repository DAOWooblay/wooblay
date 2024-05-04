import type { NextPage } from 'next';
import { useAccount } from 'wagmi';

const userprofile: NextPage = () => {
    const { address } = useAccount()
    return (
<></>
    )
}

export default userprofile;