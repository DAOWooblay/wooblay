import React, { useState } from "react";

const OpenPosition: React.FC = () => {
	const [openPositionId, setOpenPositionId] = useState<number | null>(null);

	const positions = [
		{
			id: 1,
			title: "Position 1",
			description:
				"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cumsociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu",
			skills: "Skills required: Solidity, Ethereum. ",
			experience: "2 Years Experience in DAOs",
		},
		{
			id: 2,
			title: "Position 2",
			description:
				"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cumsociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu",
			skills: "Skills required: Solidity, Ethereum. ",
			experience: "2 Years Experience in DAOs",
		},
		{
			id: 3,
			title: "Position 3",
			description:
				"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cumsociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu",
			skills: "Skills required: Solidity, Ethereum. ",
			experience: "2 Years Experience in DAOs",
		},
	];

	const togglePosition = (positionId: number) => {
		if (openPositionId === positionId) {
			setOpenPositionId(null);
		} else {
			setOpenPositionId(positionId);
		}
	};

	return (
		<div>
			<h2 className="text-2xl font-bold mb-4 text-white">Open Positions</h2>
			<div className="space-y-4 text-black">
				{positions.map((position) => (
					<div key={position.id} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
						<input
							type="checkbox"
							className="peer" // Peer class allows us to style based on the checked state
							checked={openPositionId === position.id}
							onChange={() => togglePosition(position.id)} // Toggle function
						/>
						<div className="collapse-title text-xl font-medium peer-checked:bg-gray-200">{position.title}</div>
						<div className="collapse-content">
							<p>{position.description}</p>
							<p className="mt-2 text-sm text-gray-500">{position.skills}</p>
							<p className="mt-2 text-sm text-gray-500">{position.experience}</p>
							<div className="flex justify-end mt-4">
								<button className="btn btn-primary">Apply for position</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default OpenPosition;
