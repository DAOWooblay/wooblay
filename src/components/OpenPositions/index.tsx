import React from "react";

const OpenTasks: React.FC = () => {
	const positions = [
		{
			id: 1,
			title: "Position 1",
			description:
				"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cumsociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu",
			skills: "Skills required: Solidity, Ethereum. ",
		},
		{
			id: 2,
			title: "Position 2",
			description:
				"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cumsociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu",
			skills: "Skills required: Solidity, Ethereum. ",
		},
		{
			id: 3,
			title: "Position 3",
			description:
				"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cumsociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu",
			skills: "Skills required: Solidity, Ethereum. ",
		},
	];

	return (
		<div>
			<h2 className="text-2xl font-bold mb-4 text-white">Open Positions</h2>
			<div className="space-y-4 text-black">
				{positions.map((position) => (
					<div key={position.id} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
						<input type="checkbox" /> {/* DaisyUI collapse toggle */}
						<div className="collapse-title text-xl font-medium">
							{position.title} {/* position title */}
						</div>
						<div className="collapse-content">
							{/* Content revealed upon toggle */}
							<p>{position.description}</p>
							<p className="mt-2 text-sm text-gray-500">{position.skills}</p> {/* Detailed task information */}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default OpenTasks;
