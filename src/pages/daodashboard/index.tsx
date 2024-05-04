import React from "react";
import { useReadContract } from "wagmi";

const DAO_DASHBOARD_ADDRESS = "0x80d44774e3f268f8caC241728B97e5A5DCc1c8F3";

// Replace with your contract's ABI
const DAO_DASHBOARD_ABI = [
	// An example ABI with methods for `name` and `treasuryAmount`
	{
		constant: true,
		inputs: [],
		name: "name",
		outputs: [{ name: "", type: "string" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "treasuryAmount",
		outputs: [{ name: "", type: "uint256" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
];

const DaoDashboard: React.FC = () => {
	// Fetch the DAO's name

	const {
		data: daoNameData,
		isLoading: isNameLoading,
		error: nameError,
	} = useReadContract({
		address: DAO_DASHBOARD_ADDRESS,
		abi: DAO_DASHBOARD_ABI,
		functionName: "name",
	});

	const daoName = daoNameData as string; // Cast to string to resolve 'unknown' error

	// Fetch the DAO's treasury amount
	const {
		data: treasuryAmount,
		isLoading: isTreasuryLoading,
		error: treasuryError,
	} = useReadContract({
		address: DAO_DASHBOARD_ADDRESS,
		abi: DAO_DASHBOARD_ABI,
		functionName: "treasuryAmount",
	});

	// Handle loading state
	if (isNameLoading || isTreasuryLoading) {
		return <div>Loading...</div>;
	}

	// Handle errors
	if (nameError || treasuryError) {
		return <div>Error fetching DAO data</div>;
	}

	// Display the fetched data
	return (
		<div>
			<h1>DAO Dashboard</h1>
			<div>
				<h2>DAO Name: {daoName}</h2> {/* Display the DAO's name */}
				<p>Amount in Treasury: {treasuryAmount?.toString()} USDC</p> {/* Display the treasury amount */}
			</div>
		</div>
	);
};

export default DaoDashboard;
