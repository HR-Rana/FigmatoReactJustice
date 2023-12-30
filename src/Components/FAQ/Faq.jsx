import React from "react";
import img1 from "../../assets/images/Faq.png";
export default function Faq() {
	return (
		<div className="my-5">
			<div className="heading flex flex-col text-center justify-center">
				<h3 className="text-2xl font-[600] my-3">Frequently Asked Any Questions</h3>
				<p className="w-1/2 mx-auto">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
			</div>
			<div className="my-5 p-2 grid grid-cols-1 md:grid-cols-2 gap-3">
				<div class="join w-full flex my-auto  items-center join-vertical">
					<div class="collapse collapse-arrow join-item border border-base-300">
						<input type="radio" name="my-accordion-4" checked="checked" />
						<div class="collapse-title text-xl font-medium">
							Are application fee waivers available?
						</div>
						<div class="collapse-content">
							<p>
								There are many variations of passages of Lorem Ipsum available,
								but the majority have suffered alteration in some form, by
								injected humour.
							</p>
						</div>
					</div>
					<div class="collapse collapse-arrow join-item border border-base-300">
						<input type="radio" name="my-accordion-4" />
						<div class="collapse-title text-xl font-medium">
							Are application fee waivers available?
						</div>
						<div class="collapse-content">
							<p>
								There are many variations of passages of Lorem Ipsum available,
								but the majority have suffered alteration in some form, by
								injected humour.
							</p>
						</div>
					</div>
					<div class="collapse collapse-arrow join-item border border-base-300">
						<input type="radio" name="my-accordion-4" />
						<div class="collapse-title text-xl font-medium">
							Are application fee waivers available?
						</div>
						<div class="collapse-content">
							<p>
								There are many variations of passages of Lorem Ipsum available,
								but the majority have suffered alteration in some form, by
								injected humour.
							</p>
						</div>
					</div>
				</div>
				<div className="faq-img mt-5 flex justify-center w-3/4 mx-auto">
					<img src={img1} alt="img" className="w-4/5" mx-auto />
				</div>
			</div>
		</div>
	);
}
