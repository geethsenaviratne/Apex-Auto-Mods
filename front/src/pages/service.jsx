

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar';
import Header from '../components/header';
import Footer from '../components/footer';


const Service = ({ user }) => {
	const [services, setServices] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchServices = async () => {
			setLoading(true);
			setError(null);
			try {
				const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/services`);
				setServices(res.data);
			} catch (err) {
				setError(err?.response?.data?.message || 'Failed to fetch services.');
			} finally {
				setLoading(false);
			}
		};
		fetchServices();
	}, []);

	return (
		   <>
			   
			   <Navbar user={user} />
			   <div className="bg-[#f5f6fa] min-h-screen pt-10 md:pt-12 pl-0 md:pl-36 transition-all flex flex-col">
				   {/* Hero Section */}
				   <section className="bg-[#c3cbd1] py-14 mb-8 rounded-2xl mx-2 md:mx-8 mt-4 shadow">
					   <div className="max-w-4xl mx-auto px-4 text-center">
						   <h1 className="text-4xl md:text-5xl font-bold text-[#181a20] mb-4">Our Car Modification Services</h1>
						   <p className="text-lg md:text-xl text-[#6b7280] mb-2">Upgrade, personalize, and transform your ride with Apex Auto Mods.</p>
					   </div>
				   </section>

				   {/* Services Grid */}
				   <main className="flex-1">
					   <div className="max-w-7xl mx-auto px-4 py-8">
						   {loading ? (
							   <div className="flex justify-center items-center h-40">
								   <span className="text-lg text-gray-400">Loading services...</span>
							   </div>
						   ) : error ? (
							   <div className="flex justify-center items-center h-40">
								   <span className="text-red-400 font-semibold">{error}</span>
							   </div>
						   ) : services.length === 0 ? (
							   <div className="flex justify-center items-center h-40">
								   <span className="text-gray-400">No services available.</span>
							   </div>
						   ) : (
							   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
								   {services.map(service => (
									   <div
										   key={service.serviceId}
										   className="bg-white rounded-2xl shadow-xl p-8 flex flex-col border border-[#f0f0f0] hover:border-[#e63946] transition-all duration-200 group relative overflow-hidden"
									   >
										   <div className="absolute right-0 top-0 opacity-10 text-8xl pointer-events-none select-none font-black text-[#e63946] group-hover:opacity-20 transition-all duration-200">
											   {service.serviceId.slice(-2)}
										   </div>
										   <h2 className="text-2xl font-bold text-[#181a20] mb-2 group-hover:text-[#e63946] transition-colors">{service.name}</h2>
										   <p className="text-[#6b7280] mb-6">{service.description || 'No description provided.'}</p>
										   <div className="mt-auto flex items-center justify-between">
											   <span className="text-xl font-bold text-[#e63946]">LKR.{service.price}</span>
											   <span className="text-xs text-gray-400 ml-2">ID: {service.serviceId}</span>
										   </div>
									   </div>
								   ))}
							   </div>
						   )}
					   </div>
				   </main>
			   </div>
			   <Footer />
		   </>
	);
};

export default Service;
