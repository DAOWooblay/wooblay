import React, { useState } from "react";

const OpenTasks: React.FC = () => {
	// State to track which task is currently open
	const [openTaskId, setOpenTaskId] = useState<number | null>(null);

	const tasks = [
		{
			id: 1,
			title: "Task 1",
			description:
				"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cumsociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu",
			skills: "Skills required: Content Writing, SEO.  Compensation: 200 USDC.",
			timeline: "Expected timeline: 1 week.",
			bounty: "Bounty: 200 USDC",
		},
		{
			id: 2,
			title: "Task 2",
			description:
				"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cumsociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu",
			skills: "Skills required: Content Writing, SEO.  Compensation: 200 USDC.",
			timeline: "Expected timeline: 1 week.",
			bounty: "Bounty: 200 USDC",
		},
		{
			id: 3,
			title: "Task 3",
			description:
				"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cumsociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu",
			skills: "Skills required: Content Writing, SEO.  Compensation: 200 USDC.",
			timeline: "Expected timeline: 1 week.",
			bounty: "Bounty: 200 USDC",
		},
	];

	const toggleTask = (taskId: number) => {
		// If the current task is the one that's clicked, close it by setting openTaskId to null
		if (openTaskId === taskId) {
			setOpenTaskId(null);
		} else {
			// Otherwise, set the clicked task as open
			setOpenTaskId(taskId);
		}
	};

	return (
		<div>
			<h2 className="text-2xl font-bold mb-4">Open Tasks</h2>
			<div className="space-y-4 text-black">
				{tasks.map((task) => (
					<div key={task.id} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
						{/* Toggle task when clicked */}
						<input
							type="checkbox"
							className="peer" // Peer class allows us to style based on the checked state
							checked={openTaskId === task.id}
							onChange={() => toggleTask(task.id)} // Toggle function
						/>
						<div className="collapse-title text-xl font-medium peer-checked:bg-gray-200">{task.title}</div>
						<div className="collapse-content">
							<p>{task.description}</p>
							<p className="mt-2 text-sm text-gray-500">{task.skills}</p>
							<p className="mt-2 text-sm text-gray-500">{task.timeline}</p>
							<p className="mt-2 text-sm text-gray-500">{task.bounty}</p>
							<div className="flex justify-end mt-4">
								<button className="btn btn-primary">Assign yourself</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default OpenTasks;
