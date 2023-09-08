import React from "react";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.png";
import img6 from "../../assets/images/img6.png";

import icon from "../../assets/images/arrow.png";

export default function LegalPractice() {
	const content = [
		{
			id: "01",
			title: "Business Law",
			text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
			img: img1,
			icons: icon,
		},
		{
			id: "02",
			title: "Criminal Law",
			text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
			img: img2,
			icons: icon,
		},
		{
			id: "03",
			title: "Child Support",
			text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
			img: img3,
			icons: icon,
		},
		{
			id: "04",
			title: "Education Law",
			text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
			img: img4,
			icons: icon,
		},
		{
			id: "05",
			title: "Divorce Law",
			text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
			img: img5,
			icons: icon,
		},
		{
			id: "06",
			title: "Tax Law",
			text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
			img: img5,
			icons: icon,
		},
	];

	return (
		<div className="container-container mt-8   p-3 mx-auto">
			<div className="heading w-1/2 text-center m-auto">
				<h2 className="text-3xl font-[700] my-4">The Legal Practice Area</h2>
				<p className="text-md">
					There are many variations of passages of Lorem Ipsum available, but
					the majority have suffered alteration in some form, by injected
					humour.
				</p>
			</div>

			<div className="grid lg:grid-cols-3 my-12 md:grid-cols-2 sm:grid-cols-2 grid-cols-1">
				{content.map((item) => {
					const { icons, id, img, title, text } = item;
					return (
						<div className="shadow my-2 text-center" key={id}>
							<div className="card-content">
								<span>
									{" "}
									<img src={img} alt="image"  className="text-center flex justify-center mx-auto w-15 p-5"/>
								</span>
								<h3 className="text-2xl my-2 font-[500] ">{title}</h3>
								<p>{text}</p>
							</div>
							<img className="w-10 text-center m-auto my-3 cursor-pointer" src={icons} alt="icon" />
						</div>
					);
				})}
			</div>
		</div>
	);
}
