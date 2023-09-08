import React from "react";


import img1 from "../../assets/images/Frame1.png";
import img2 from "../../assets/images/Frame2.png";
import img3 from "../../assets/images/Frame3.png";
import img4 from "../../assets/images/Frame4.png";

export default function Contact() {
	const contact = [
		{ 
			id: "01",
			icon: img1,
			title: "Address",
			text: "A108 Adam Street",
			subText: 'New York, NY 535022"',
		},
		{
			id: "02",
			icon: img2,
			title: "Call Us",
			text: "+88 01750 00 00 00",
			subText: "+88 01750 00 00 00",
		},
		{
			id: "03",
			icon: img3,
			title: "Email Us",
			text: "info@gmail.com",
			subText: "info@gmail.com",
		},
		{
			id: "04",
			icon: img4,
			title: "Working Hours",
			text: "Mon-Fri: 9AM to 5PM",
			subText: "Sunday: 9AM to 1 PM",
		},
	];

	return (
		<div>
			<div className="heading w-1/2 mx-auto text-center gap-2">
				<h4 className="text-2xl my-3 font-[700]">Contact With Us</h4>
				<p className="text-md">
					There are many variations of passages of Lorem Ipsum available, but
					the majority have suffered alteration in some form, by injected
					humour.
				</p>
			</div>
			<div className="grid grid-cols-2 items-center my-5 w-3/4 gap-x-5  mx-auto">
				<div className="contact-content">
					<div className="left-site grid gap-1 grid-cols-2">
						{contact.map((item) => {
							const { id, text, subText, title, icon } = item;
							return (
								<div className="  shadow-lg  p-5 bg-slate-100" key={id}>
									<span>
										<img src={icon} alt="icon" />
									</span>
									<h6>{title}</h6>
									<p>{text}</p>
									<p>{subText}</p>
								</div>
							);
						})}
					</div>
				</div>

				<div className="form-area my-5 w-1/2">
					<form action="" className=" flex-col gap-2 grid">
						<input type="text" className="bg-slate-100 p-2 outline-none caret-red-700" placeholder="Your Name" />
						<input className="bg-slate-100  outline-none  caret-green-800 p-2 w-96 my-2" type="email" placeholder="Your Email" />
						<input type="text" className="bg-slate-100 my-2 w-96 p-2 caret-emerald-800 outline-none" placeholder="Your Subject" />
						<textarea placeholder="Write Your Message" className=" bg-slate-100 p-3 outline-none " name="" rows={5}></textarea>
					</form>
				</div>
			</div>
		</div>
	);
}
