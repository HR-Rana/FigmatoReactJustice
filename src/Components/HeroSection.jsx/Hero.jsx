import React from "react";

export default function Hero() {
	return (
		<div className="hero-area h-full">
			<div className="content w-4/6 mx-auto py-8  sm:translate-y-0 md:translate-y-1/6 md:h-full text-center md:translate-x-0 text-white flex flex-col items-center gap-4">
				<h1 className="text-2xl sm:text-4xl md:text-6xl">We Provide Effective Legal Solutions</h1>
				<p className="text-md">
					There are many variations of passages of Lorem Ipsum available, but
					the majority have suffered alteration in some form, by injected
					humour.
				</p>

				<div className="w-3/4">
					<input
						type="text"
						placeholder="Search your Services"
						className="border-none w-3/5 mr-3 bg-slate-100 rounded-xxl p-3 rounded outline-none text-black"
					/>
					<button className="bg-[#b68c5a] border-none p-3 hover:outline-none w-2/6 text-white">Search</button>
				</div>
			</div>
		</div>
	);
}
