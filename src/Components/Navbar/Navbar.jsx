import React from "react";
import logo from "./../../assets/images/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<div className="navbar shadow bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<Link>Home</Link>
						</li>
						<li>
							<Link>Services {">"}</Link>
						</li>
						<li>
							<Link>Cases {">"}</Link>
						</li>
						<li>
							<Link>Blog {">"}</Link>
						</li>
						<li>
							<Link>Contact Us {">"}</Link>
						</li>
					</ul>
				</div>
				<a className="btn  btn-ghost normal-case text-xl">
					<img src={logo} alt="logo" />
				</a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<li >
						<Link className="text-gray-400">Home</Link>
					</li>
					<li>
						<Link className="text-gray-400">Services {">"}</Link>
					</li>
					<li>
						<Link className="text-gray-400">Cases {">"}</Link>
					</li>
					<li>
						<Link className="text-gray-400">Blog {">"}</Link>
					</li>
					<li>
						<Link className="text-gray-400">Contact Us {">"}</Link>
					</li>
				</ul>
			</div>
			<div className="navbar-end">
				<a className="btn hover:bg-[#b68c5a] bg-[#b68c5a] hover:text-white text-white">
					FreeConsulation
				</a>
			</div>
		</div>
	);
}
