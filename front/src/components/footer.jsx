import React from "react";
import { FaCar, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
       return (
	       <footer className="bg-transparent mt-auto pl-0 md:pl-36 transition-all">
		       <div className="max-w-7xl mx-auto py-10 px-4">
			       <div className="bg-[#181a20] rounded-2xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-4 gap-8">
				       {/* Brand & Social */}
				       <div>
					       <div className="flex items-center mb-4">
						       <FaCar className="text-[#e63946] text-2xl mr-2" />
						       <span className="font-bold text-xl text-white">Apex Auto Mods</span>
					       </div>
					       <p className="text-sm mb-4 text-[#c3cbd1]">Transforming ordinary cars into extraordinary machines since 2018.</p>
					       <div className="flex space-x-3">
						       <a href="#" className="hover:text-[#e63946] text-[#c3cbd1]" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
						       <a href="#" className="hover:text-[#e63946] text-[#c3cbd1]" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
						       <a href="#" className="hover:text-[#e63946] text-[#c3cbd1]" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
					       </div>
				       </div>
				       {/* Services */}
				       <div>
					       <h4 className="font-semibold mb-2 text-white">Services</h4>
					       <ul className="text-sm text-[#c3cbd1]">
						       <li>Engine Tuning</li>
						       <li>Custom Paint</li>
						       <li>Body Kits</li>
						       <li>Suspension</li>
					       </ul>
				       </div>
				       {/* Locations */}
				       <div>
					       <h4 className="font-semibold mb-2 text-white">Locations</h4>
					       <ul className="text-sm text-[#c3cbd1]">
						       <li>Colombo<br /><span className="text-[#c3cbd1]">123 Main Street, Colombo-03</span></li>
						       <li className="mt-2">Negombo<br /><span className="text-[#c3cbd1]">456 Beach Road, Negombo</span></li>
					       </ul>
				       </div>
				       {/* Contact */}
				       <div>
					       <h4 className="font-semibold mb-2 text-white ">Contact</h4>
					       <ul className="text-sm text-[#c3cbd1] py">
						       <li><FaPhoneAlt className="inline mr-2 text-[#c3cbd1] mb-4" /> +94 11 234 5678</li>
						       <li><FaEnvelope className="inline mr-2 text-[#c3cbd1] mb-4" /> info@apexautomods.lk</li>
						       <li>Mon-Sat: 8AM-6PM</li>
					       </ul>
				       </div>
			       </div>
			       <div className="text-center text-[#6b7280] text-xs py-4">© 2024 Apex Auto Mods. All rights reserved.</div>
		       </div>
	       </footer>
       );
};

export default Footer;
