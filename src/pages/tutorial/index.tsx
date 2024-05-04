"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const Content = [
	{
		title: "About Us",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum. Euismod nisi porta lorem mollis. Sagittis idconsectetur purus ut faucibus pulvinar elementum. Vitae suscipit tellus mauris a diam maecenas",
	},
	{
		title: "What do we do?",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum. Euismod nisi porta lorem mollis. Sagittis idconsectetur purus ut faucibus pulvinar elementum. Vitae suscipit tellus mauris a diam maecenas",
	},
	,
	{
		title: "What can you do?",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum. Euismod nisi porta lorem mollis. Sagittis idconsectetur purus ut faucibus pulvinar elementum. Vitae suscipit tellus mauris a diam maecenas",
	},
	,
	{
		title: "Technology we use",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum. Euismod nisi porta lorem mollis. Sagittis idconsectetur purus ut faucibus pulvinar elementum. Vitae suscipit tellus mauris a diam maecenas",
	},
	{
		title: "What is a Wallet",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum. Euismod nisi porta lorem mollis. Sagittis idconsectetur purus ut faucibus pulvinar elementum. Vitae suscipit tellus mauris a diam maecenas",
	},
];

export default function Tutorial() {
	return (
		<div>
			<video className="fixed top-0 left-0 w-full h-full object-cover" src={"background.mp4"} autoPlay loop muted />

			<div className="relative z-10 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center h-screen">
				<div className="mt-12 text-6xl font-bold">Welcome to Wooblay</div>
				<div className="mt-2 text-2xl text-gray-500">The Launchpad for your projects 🚀</div>
			</div>

			<div className="relative z-10 bg-black bg-opacity-50 text-white text-center px-4 h-full">
				{Content.map((item, index) => {
					const ref = useRef(null);

					const options = {
						threshold: 0.5,
						triggerOnce: true as any, // Use type assertion to bypass the error
					};

					const isInView = useInView(ref, options as any);

					return (
						<motion.div
							key={index}
							ref={ref} // Monitor the visibility of this element
							initial={{ opacity: 0 }} // Start with the text hidden
							animate={{ opacity: isInView ? 1 : 0 }} // Fade in when in view
							transition={{ duration: 1, ease: "easeOut" }} // Animation properties
							className="flex flex-col items-center justify-center h-[50vh] w-4/5 mx-auto"
						>
							<h2 className="text-4xl font-semibold mb-8">{item?.title}</h2>
							<p className="text-2xl text-gray-500">{item?.desc}</p>
						</motion.div>
					);
				})}
			</div>

			<div className="relative z-10 bg-black bg-opacity-50 text-white text-center px-4 py-8 h-full">
				<div className="flex flex-col items-center">
					<button className="bg-blue-500 text-white w-[250px] h-[75px] rounded-xl drop-shadow-md cursor-pointer text-2xl hover:opacity-80 hover:shadow-md duration-150 ease-in-out">
						<a href="/explorer">Get Started</a>
					</button>
					<span className="text-6xl animate-bounce mt-6">
						<p className="rotate-180">ˬ</p>
					</span>
				</div>
			</div>
		</div>
	);
}
