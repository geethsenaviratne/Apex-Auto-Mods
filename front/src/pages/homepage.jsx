import React, { useEffect, useState } from "react";
import { FaTools, FaPaintBrush, FaWheelchair } from "react-icons/fa";
import Header from '../components/header';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Homepage = ({ user }) => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

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

    const handleStartCustomizing = (e) => {
        e.preventDefault();
        if (user) {
            navigate("/customize");
        } else {
            navigate("/login");
        }
    };

    return (
        <>
            
            <Navbar user={user} />
            <div className="bg-[#f5f6fa] min-h-screen pt-10 md:pt-12 pl-0 md:pl-36 transition-all">
                {/* Hero Section */}
                <section className="bg-[#c3cbd1] pt-10 pb-12 rounded-2xl mx-2 md:mx-8 mt-4 shadow">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4 gap-8">
                        {/* Left: Text */}
                        <div className="flex-1 mb-8 md:mb-0">
                            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Transform Your Ride Into a Performance Beast</h1>
                            <p className="text-lg text-black mb-6">6 years of excellence in sport car modifications. From engine tuning to aesthetic upgrades, we bring your automotive dreams to life.</p>
                            <div className="flex space-x-4">
                                <button
                                    onClick={handleStartCustomizing}
                                    className="px-6 py-3 bg-[#e63946] text-white rounded-xl font-semibold hover:bg-[#c82333] transition shadow"
                                >
                                    Start Customizing
                                </button>
                                <button
                                    onClick={() => navigate("/services")}
                                    className="px-6 py-3 border border-black text-black rounded-xl font-semibold hover:border-[#e63946] hover:text-[#e63946] transition shadow"
                                >
                                    View Services
                                </button>
                                
                            </div>
                        </div>
                        {/* Right: Image */}
                        <div className="flex-1 flex justify-center">
                            <img src="/car1.jpg" alt="Sport Car" className="rounded-2xl shadow-lg w-full max-w-md object-cover border-4 border-white" />
                        </div>
                    </div>
                </section>

                {/* Dynamic Services Section (database-driven) */}
                <section className="max-w-7xl mx-auto py-12 px-4 mt-8">
                    <h2 className="text-3xl font-bold text-center mb-8 text-[#181a20]">Latest Services</h2>
                    <p className="text-center text-[#6b7280] mb-10">Our Best Services</p>
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
                        <>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {services.slice(0, 4).map(service => (
                                <div
                                    key={service.serviceId}
                                    className="bg-white rounded-2xl shadow p-6 flex flex-col items-center border border-[#f0f0f0] hover:border-[#e63946] transition-all duration-200 group relative overflow-hidden"
                                >
                                    <div className="absolute right-0 top-0 opacity-10 text-8xl pointer-events-none select-none font-black text-[#e63946] group-hover:opacity-20 transition-all duration-200">
                                        {service.serviceId.slice(-2)}
                                    </div>
                                    <h3 className="font-bold text-xl mb-2 text-[#181a20] group-hover:text-[#e63946] transition-colors">{service.name}</h3>
                                    <p className="text-[#6b7280] mb-4 text-center">{service.description || 'No description provided.'}</p>
                                    <span className="text-xl font-bold text-[#e63946]">LKR.{service.price}</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center mt-10">
                            <a href="/services" className="px-8 py-3 bg-[#e63946] text-white rounded-xl font-semibold shadow hover:bg-[#c82333] transition text-lg">View All Services</a>
                        </div>
                        </>
                    )}
                </section>


                {/* Static Services Section (original) */}
                <section className="max-w-7xl mx-auto py-12 px-4 mt">
                    <h2 className="text-3xl font-bold text-center mb-8 text-[#181a20]">Other Services</h2>
                    <p className="text-center text-[#6b7280] mb-10">Professional modifications for the ultimate driving experience</p>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        {/* Engine Tuning */}
                        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center border border-[#f0f0f0]">
                            <FaTools className="text-[#e63946] text-4xl mb-4" />
                            <h3 className="font-bold text-xl mb-2 text-[#181a20]">Engine Tuning</h3>
                            <p className="text-[#6b7280] mb-4 text-center">Boost your car's performance with professional ECU tuning.</p>
                            <ul className="text-[#181a20] text-sm list-none pl-0">
                                <li className="flex items-center mb-1"><span className="text-[#e63946] mr-2">✔</span>ECU Remapping</li>
                                <li className="flex items-center mb-1"><span className="text-[#e63946] mr-2">✔</span>Turbo Installation</li>
                                <li className="flex items-center"><span className="text-[#e63946] mr-2">✔</span>Performance Exhausts</li>
                            </ul>
                        </div>
                        {/* Aesthetic Mods */}
                        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center border border-[#f0f0f0]">
                            <FaPaintBrush className="text-[#e63946] text-4xl mb-4" />
                            <h3 className="font-bold text-xl mb-2 text-[#181a20]">Aesthetic Mods</h3>
                            <p className="text-[#6b7280] mb-4 text-center">Transform your car's appearance with custom paint jobs.</p>
                            <ul className="text-[#181a20] text-sm list-none pl-0">
                                <li className="flex items-center mb-1"><span className="text-[#e63946] mr-2">✔</span>Custom Paint Jobs</li>
                                <li className="flex items-center mb-1"><span className="text-[#e63946] mr-2">✔</span>Vehicle Wraps</li>
                                <li className="flex items-center"><span className="text-[#e63946] mr-2">✔</span>Body Kits</li>
                            </ul>
                        </div>
                        {/* Suspension & Wheels */}
                        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center border border-[#f0f0f0]">
                            <FaWheelchair className="text-[#e63946] text-4xl mb-4" />
                            <h3 className="font-bold text-xl mb-2 text-[#181a20]">Suspension & Wheels</h3>
                            <p className="text-[#6b7280] mb-4 text-center">Enhance handling and style with premium suspension systems and wheels.</p>
                            <ul className="text-[#181a20] text-sm list-none pl-0">
                                <li className="flex items-center mb-1"><span className="text-[#e63946] mr-2">✔</span>Coilover Systems</li>
                                <li className="flex items-center mb-1"><span className="text-[#e63946] mr-2">✔</span>Custom Wheels</li>
                                <li className="flex items-center"><span className="text-[#e63946] mr-2">✔</span>Brake Upgrades</li>
                            </ul>
                        </div>
                        {/* Interior Upgrades */}
                        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center border border-[#f0f0f0]">
                            <span className="text-[#e63946] text-4xl mb-4">🛋️</span>
                            <h3 className="font-bold text-xl mb-2 text-[#181a20]">Interior Upgrades</h3>
                            <p className="text-[#6b7280] mb-4 text-center">Upgrade your car's comfort and style with premium interiors.</p>
                            <ul className="text-[#181a20] text-sm list-none pl-0">
                                <li className="flex items-center mb-1"><span className="text-[#e63946] mr-2">✔</span>Leather Seats</li>
                                <li className="flex items-center mb-1"><span className="text-[#e63946] mr-2">✔</span>Ambient Lighting</li>
                                <li className="flex items-center"><span className="text-[#e63946] mr-2">✔</span>Custom Dashboards</li>
                            </ul>
                        </div>
                        {/* Lighting Solutions */}
                        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center border border-[#f0f0f0]">
                            <span className="text-[#e63946] text-4xl mb-4">💡</span>
                            <h3 className="font-bold text-xl mb-2 text-[#181a20]">Lighting Solutions</h3>
                            <p className="text-[#6b7280] mb-4 text-center">Enhance visibility and aesthetics with custom lighting.</p>
                            <ul className="text-[#181a20] text-sm list-none pl-0">
                                <li className="flex items-center mb-1"><span className="text-[#e63946] mr-2">✔</span>LED Headlights</li>
                                <li className="flex items-center mb-1"><span className="text-[#e63946] mr-2">✔</span>Underbody Lights</li>
                                <li className="flex items-center"><span className="text-[#e63946] mr-2">✔</span>Interior Accent Lights</li>
                            </ul>
                        </div>
                    </div>
                </section>

                
                {/* Call-to-Action Section */}
                <section className="bg-[#c3cbd1] text-black py-16 rounded-2xl mx-2 md:mx-8 mt-8 shadow">
                    <div className="max-w-3xl mx-auto text-center px-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Ready to Transform Your Vehicle?</h2>
                        <p className="text-lg text-[#181a20] mb-8">Join thousands of car enthusiasts who have elevated their vehicles with Apex Auto Mods. Create your account and start building your dream car today.</p>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                            <a href="/register" className="px-8 py-4 bg-[#e63946] text-white rounded-xl font-semibold shadow hover:bg-[#d62828] transition text-lg">Create Account <span className="ml-2">→</span></a>
                            <a href="/contact" className="px-8 py-4 border border-black text-black rounded-xl font-semibold shadow hover:border-[#e63946] hover:text-[#e63946] transition text-lg">Schedule Consultation</a>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Homepage;
