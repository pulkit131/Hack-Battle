import 'boxicons/css/boxicons.min.css';

export default function Footer() {
	return (
		<footer className="w-full flex flex-col pb-1 justify-between border-t border-gray-400 bg-black text-white">
			<div className="flex flex-wrap justify-between items-start p-2 pt-14">
				<div className="ml-2 max-w-[30%] flex flex-col justify-between">
					<h2 className="text-4xl">Knights Of Kalki</h2>
					<p className="text-gray-400 text-xs">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eum,
						corrupti vitae tempora placeat nemo beatae atque nobis ea facere
						neque optio dolorem nisi consequatur minus corporis architecto alias
						iste!
					</p>
				</div>

				<div className="flex flex-col">
					<h4 className="text-lg">Quick Access</h4>
					<ul className="mt-1">
						<li className="mt-1 mb-1">
							<a href="#home" className="text-gray-400">Home</a>
						</li>
						<li className="mt-1 mb-1">
							<a href="#education" className="text-gray-400">Education</a>
						</li>
						<li className="mt-1 mb-1">
							<a href="#services" className="text-gray-400">Services</a>
						</li>
						<li className="mt-1 mb-1">
							<a href="#testimonials" className="text-gray-400">Testimonials</a>
						</li>
					</ul>
				</div>

				<div className="flex flex-col">
					<h4 className="text-lg">Help &amp; Support</h4>
					<ul className="mt-1">
						<li className="mt-1 mb-1">
							<a href="#home" className="text-gray-400">Contact Us</a>
						</li>
						<li className="mt-1 mb-1">
							<a href="#education" className="text-gray-400">Services</a>
						</li>
						<li className="mt-1 mb-1">
							<a href="#services" className="text-gray-400">Hire Us</a>
						</li>
					</ul>
				</div>

				<div className="flex flex-col">
					<h4 className="text-lg">Socials</h4>
					<ul className="mt-1">
						<li className="mt-1 mb-1">
							<a href="#home" className="text-gray-400">Facebook</a>
						</li>
						<li className="mt-1 mb-1">
							<a href="#education" className="text-gray-400">LinkedIn</a>
						</li>
						<li className="mt-1 mb-1">
							<a href="#services" className="text-gray-400">Instagram</a>
						</li>
						<li className="mt-1 mb-1">
							<a href="#" className="text-gray-400">Discord</a>
						</li>
					</ul>
				</div>

				<div className="flex flex-col">
					<h4 className="text-lg">Legal</h4>
					<ul className="mt-1">
						<li className="mt-1 mb-1">
							<a href="#home" className="text-gray-400">License (EULA)</a>
						</li>
						<li className="mt-1 mb-1">
							<a href="#education" className="text-gray-400">Privacy Policy</a>
						</li>
						<li className="mt-1 mb-1">
							<a href="#services" className="text-gray-400">Terms &amp; Conditions</a>
						</li>
						<li className="mt-1 mb-1">
							<a href="#" className="text-gray-400">Brand Guideline</a>
						</li>
					</ul>
				</div>
			</div>
			<hr className="w-full border-gray-400 mt-1" />
			<p className="text-gray-400 text-center text-sm mt-2 pt-5 pb-5">
				&copy; 2024 KOK&trade; is a registered trademark. All Rights Reserved.
			</p>
		</footer>
	);
}
