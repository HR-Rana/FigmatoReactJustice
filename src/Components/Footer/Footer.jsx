import React from "react";
import img1 from "../../assets/images/fLogo.png";
import { Link } from "react-router-dom";
import img from '../../assets/images/send.png'



export default function Footer() {
	return (
		<div className="p-5 py-8 bg-black ">
			<div className="container mx-auto text-gray-300 grid grid-cols-1 md:grid-cols-4">
				<div className="f-logo">
					<img src={img1} alt="" />
					<p className="my-3">
						There are many variations of passages of Lorem Ipsum available, but
						the majority have suffered alteration in some form, by injected
						humour.
					</p>
				</div>
				<div className="w-[80] mx-0 md-mx-auto">
					<h4 className="text-2xl font-900 my-3">Useful Links</h4>
					<span className="list-none ">
						<li>
							<Link className="text-gray-300">Home</Link>
						</li>
						<li>
							<Link className="text-gray-300">About Us</Link>
						</li>
						<li>
							<Link className="text-gray-300">Cases</Link>
						</li>
						<li>
							<Link className="text-gray-300">Blogs</Link>
						</li>
						<li>
							<Link className="text-gray-300"> Contact</Link>
						</li>
					</span>
				</div>

				<div>
					<div className="list-none">
						<h5 className="font-[500] text-xl my-3">Contact Now</h5>
						<span className="gap-3 grid mt-5">
							<li>
								555 4th 5t NW, Washington <br /> DC 20530, United States
							</li>
							<li>
								+88 017550 000 000 <br /> +88 01745 000 000
							</li>
							<li>
								info@gmail.com <br /> info@gmail.com
							</li>
						</span>
					</div>
				</div>
				<div>
					<h4 className="font-[500] text-xl my-3">Subscribe</h4>
					<p>
						Subscribe for our latest & Articles. We Won’t Give You Spam Mails
					</p>

					<form className="flex my-2 grid-cols-1 md:grid-cols-2 items-center">
						<input type="text" placeholder="Email" className="p-2 text-black outline-none" />
						<button className="w-13 lg:w-[25%] rounded-none bg-[#b68c5a] p-2 outline-none border-none py-1"><img src={img} alt="" /></button>
					</form>
				</div>
			</div>
		</div>
	);
}
