import Link from "next/link";
import React from "react";

export default function index() {
	return (
		<div className="py-4">
			<div className="card card-side bg-base-100 shadow-xl border-2">
				<figure className="h-1/2 w-full">
					<img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" />
				</figure>
				<div className="card-body text-white">
					<h2 className="card-title">Wooblay</h2>
					<p>
						We are a cybersecurity DAO, a malware development group that specializes in creating malware.
					</p>
					<p>Members: 34</p>
					<p>Available Tasks: 3</p>
					<p>Available Positions: 3</p>
					<p>Cyber Security</p>
					<div className="card-actions justify-end">
						<button className="btn btn-primary">
							<Link href="/daoinfo">Learn More</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
