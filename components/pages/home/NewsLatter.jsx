"use client";

import GradientBackground from "@/components/bg/GradientBackground";
import { PlaceholdersAndVanishInput } from "@/components/ui/Input1";

export function Newsletter() {
	const placeholders = [
		"What's the first rule of Fight Club?",
		"Who is Tyler Durden?",
		"Where is Andrew Laeddis Hiding?",
		"Write a Javascript method to reverse a string",
		"How to assemble your own PC?",
	];

	const handleChange = (e) => {
		console.log(e.target.value);
	};
	const onSubmit = (e) => {
		e.preventDefault();
		console.log("submitted");
	};
	return (
		<section className="relative z-10">
			<div className="w-full container mx-auto py-16 px-5 md:py-20 relative">
				<div className="relative overflow-hidden rounded-3xl bg-white/5 p-6 py-12 sm:p-10 md:p-16 border border-white/10 shadow-2xl backdrop-blur-md transition-transform duration-300">
					{/* 3D Gradient BG */}
					<GradientBackground />

					<div className="flex flex-col md:flex-row md:justify-between gap-10 relative z-10">
						{/* Left text content */}
						<div className="flex-1 text-left space-y-3">
							<h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-xl">
								Get the latest and greatest
							</h2>
							<p className="text-sm sm:text-base text-neutral-300 max-w-md">
								Lorem ipsum dolor sit amet, consectetur.
							</p>
						</div>

						{/* Right form */}
						<div className="flex-1 max-w-lg flex flex-col justify-center space-y-3">
							{/* <form
                name="email-form"
                method="get"
                className="relative bg-white/20 backdrop-blur-sm shadow-xl flex items-center w-full rounded-full border border-white/20 focus-within:ring-2 focus-within:ring-purple-500 transition-all"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 h-12 px-5 text-sm sm:text-base text-white placeholder:text-white/70 bg-transparent focus:outline-none"
                />
                <input
                  type="submit"
                  value="Notify me"
                  className="w-auto cursor-pointer rounded-full bg-black hover:bg-neutral-900 px-5 py-2 text-sm sm:text-base font-semibold text-white transition-colors"
                />
              </form> */}
							<PlaceholdersAndVanishInput
								placeholders={placeholders}
								onChange={handleChange}
								onSubmit={onSubmit}
							/>
							<p className="text-sm sm:text-base text-neutral-300">
								Join a community of over{" "}
								<span className="text-white font-semibold">5000+ Webflow Developers</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
