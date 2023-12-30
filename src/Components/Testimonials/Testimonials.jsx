import React from "react";
import img from "../../assets/images/Background.png";
export default function Testimonials() {
	return (
		<div className="flex">
			<div class="carousel w-full">
				<div id="slide1" class="carousel-item relative w-full">
					<div className="content absolute  text-white">
						<span>
							<img src={img} alt="img" />
						</span>
						<h4>Title</h4>
						<h6>designation</h6>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, optio
							sed vel numquam harum illum quaerat quae vero nisi magni
							laboriosam cumque fugiat suscipit totam consequatur impedit
							expedita ullam placeat!
						</p>
					</div>
					<div
						class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 "
						style={{ backgroundImage: `url(${img})` }}
					>
						<a href="#slide4" class="btn btn-circle">
							❮
						</a>
						<a href="#slide2" class="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div
					id="slide2"
					class="carousel-item relative w-full h-full bg-[url('../../assets/images/Background.png')]"
				>
					{/* <div className="content top-0  left-auto none absolute text-white">
						<span>
							<img src={img} alt="img" />
						</span>
						<h4>Title</h4>
						<h6>designation</h6>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, optio
							sed vel numquam harum illum quaerat quae vero nisi magni
							laboriosam cumque fugiat suscipit totam consequatur impedit
							expedita ullam placeat!
						</p>
					</div> */}
					<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide1" class="btn btn-circle">
							❮
						</a>
						<a href="#slide3" class="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide3" class="carousel-item relative w-full">
					{/* <div className="content top-0 left-auto none absolute text-white">
						<span>
							<img src={img} alt="img" />
						</span>
						<h4>Title</h4>
						<h6>designation</h6>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, optio
							sed vel numquam harum illum quaerat quae vero nisi magni
							laboriosam cumque fugiat suscipit totam consequatur impedit
							expedita ullam placeat!
						</p>
					</div> */}
					<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide2" class="btn btn-circle">
							❮
						</a>
						<a href="#slide4" class="btn btn-circle">
							❯
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
