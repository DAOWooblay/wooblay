import Link from "next/link";
import React from "react";

export default function index() {
	return (
		<div className="py-4">
			<div className="card card-side bg-base-100 shadow-xl border-2">
				<figure className="h-full w-full">
					<img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" />
				</figure>
				<div className="card-body text-black">
					<h2 className="card-title">DAO Name: (INSERT DAO NAME) (DAO Abbreviation)</h2>
					<p>
						Description: (Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
						sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu)
					</p>
					<p>Members: (XX)</p>
					<p>Available Tasks: (Number of Tasks)</p>
					<p>Available Positions: (Position1, Position2, Position3)</p>
					<p>Category: (CATEGORY)</p>
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
