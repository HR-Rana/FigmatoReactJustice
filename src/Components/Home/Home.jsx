import React from "react";
import Navbar from "./../Navbar/Navbar";
import Hero from "../HeroSection.jsx/Hero";
import LegalPractice from "../LegalPractice/LegalPractice";
import Testimonials from "./../Testimonials/Testimonials";
import Faq from "./../FAQ/Faq";
import Contact from "../ContactUs/Contact";

export default function Home() {
	return (
		<>
			<section className="my-5">
				<Navbar/>
			</section>
			<section>
				<Hero/>
			</section>
			<section>
				<LegalPractice/>
			</section>
			<section>
				<Testimonials />
			</section>
			<section>
				<Faq />
			</section>
			<section>
				<Contact />
			</section>
		</>
	);
}
