import React from "react";
import Link from "next/link";
import OpenPositions from "../../components/OpenPositions";
import OpenTasks from "../../components/OpenTasks";

const DaoInfo: React.FC = () => {
	return (
		<div>
			<video className="fixed top-0 left-0 w-full h-full object-cover" src={"background.mp4"} autoPlay loop muted />
			<div className="fixed top-0 left-0 w-full h-full bg-black opacity-75 z-10" />
			<div className="relative z-20 container mx-auto p-6 text-white">
				<h1 className="text-3xl font-bold text-center mb-6">DAO Information</h1>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
					<div>
						<OpenPositions />
					</div>
					<div>
						<OpenTasks />
					</div>
				</div>
				<Link href="/explorer">
					<button className="fixed bottom-6 left-6 bg-red-500 text-white px-4 py-2 rounded-xl shadow-lg hover:bg-red-600 transition">
						Back to Home
					</button>
				</Link>
			</div>
		</div>
	);
};

export default DaoInfo;
