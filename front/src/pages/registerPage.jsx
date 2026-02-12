import React, { useState } from "react";
import { FaCar, FaRegUser, FaEnvelope, FaLock, FaCheckCircle, FaListAlt, FaUsers } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Header from '../components/header';

const RegisterPage = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	async function register(e) {
		e.preventDefault();
		if (!name.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
			toast.error("Please fill in all fields");
			return;
		}
		if (password !== confirmPassword) {
			toast.error("Passwords do not match");
			return;
		}
		try {
			setLoading(true);
			await axios.post(
				import.meta.env.VITE_BACKEND_URL + "/api/auth/register",
				{ name, email, password }
			);
			toast.success("register successful! Please login.");
			navigate("/login");
		} catch (e) {
			toast.error(e?.response?.data?.message || "register failed. Please try again.");
			setLoading(false);
		}
		setLoading(false);
	}

	return (
		   <div className="min-h-screen w-full flex flex-col md:flex-row">
			   {/* Left Side: hidden on mobile */}
			   <div
				   className="hidden md:flex md:w-1/2 w-full flex-col text-white p-10"
				   style={{
					   background: `linear-gradient(120deg, rgba(24,26,32,0.95) 80%, rgba(24,26,32,0.7)), url('/car.jpg') center/cover no-repeat`,
				   }}
			   >
				   <div className="max-w-lg mx-auto w-full">
					   <div className="flex items-center mb-10 mt-2">
						   <FaCar className="text-[#e63946] text-2xl mr-2" />
						   <span className="font-bold text-xl">Apex Auto Mods</span>
					   </div>
					   <div className="flex flex-col items-center justify-center h-full text-center mb-40">
						   <h2 className="text-3xl md:text-4xl font-bold mb-2">Join Apex Auto Mods</h2>
						   <p className="text-gray-300 mb-16">Create an account to customize cars, save your builds, and manage your modifications anytime.</p>
						   <ul className="space-y-5">
							   <li className="flex items-center justify-center text-base"><FaCheckCircle className="text-[#e63946] mr-3" /> Save custom builds</li>
							   <li className="flex items-center justify-center text-base"><FaListAlt className="text-[#e63946] mr-3" /> Track modifications</li>
							   <li className="flex items-center justify-center text-base"><FaUsers className="text-[#e63946] mr-3" /> Connect with community</li>
						   </ul>
					   </div>
				   </div>
			   </div>

			   {/* Right Side: always visible, full width on mobile */}
			   <div className="w-full md:w-1/2 flex items-center justify-center bg-[#232b36] p-4 md:p-10 min-h-screen">
				   <div className="w-full max-w-md bg-white rounded-xl shadow p-8 flex flex-col justify-center min-h-[80vh] md:min-h-0">
					   <h3 className="text-2xl font-bold text-center mb-2 text-[#181a20]">Create Your Account</h3>
					   <p className="text-center text-gray-500 mb-6">Get started with Apex Auto Mods today</p>
					   <form onSubmit={register}>
						   <div className="mb-4">
							   <label className="block text-gray-700 mb-1" htmlFor="fullname">Full Name</label>
							   <div className="flex items-center border rounded px-3 py-2 bg-gray-100">
								   <FaRegUser className="text-gray-400 mr-2" />
								   <input
									   type="text"
									   id="fullname"
									   placeholder="Enter your full name"
									   className="bg-transparent outline-none flex-1 text-gray-800"
									   value={name}
									   onChange={e => setName(e.target.value)}
									   disabled={loading}
								   />
							   </div>
						   </div>
						   <div className="mb-4">
							   <label className="block text-gray-700 mb-1" htmlFor="email">Email Address</label>
							   <div className="flex items-center border rounded px-3 py-2 bg-gray-100">
								   <FaEnvelope className="text-gray-400 mr-2" />
								   <input
									   type="email"
									   id="email"
									   placeholder="Enter your email"
									   className="bg-transparent outline-none flex-1 text-gray-800"
									   value={email}
									   onChange={e => setEmail(e.target.value)}
									   disabled={loading}
								   />
							   </div>
						   </div>
						   <div className="mb-4">
							   <label className="block text-gray-700 mb-1" htmlFor="password">Password</label>
							   <div className="flex items-center border rounded px-3 py-2 bg-gray-100">
								   <FaLock className="text-gray-400 mr-2" />
								   <input
									   type="password"
									   id="password"
									   placeholder="Create a password"
									   className="bg-transparent outline-none flex-1 text-gray-800"
									   value={password}
									   onChange={e => setPassword(e.target.value)}
									   disabled={loading}
								   />
							   </div>
						   </div>
						   <div className="mb-12">
							   <label className="block text-gray-700 mb-1" htmlFor="confirmPassword">Confirm Password</label>
							   <div className="flex items-center border rounded px-3 py-2 bg-gray-100">
								   <FaLock className="text-gray-400 mr-2" />
								   <input
									   type="password"
									   id="confirmPassword"
									   placeholder="Confirm your password"
									   className="bg-transparent outline-none flex-1 text-gray-800"
									   value={confirmPassword}
									   onChange={e => setConfirmPassword(e.target.value)}
									   disabled={loading}
								   />
							   </div>
						   </div>
						   <button
							   type="submit"
							   className=" w-full py-3 bg-[#e63946] text-white font-semibold rounded hover:bg-[#c82333] transition mb-4 flex items-center justify-center"
							   disabled={loading}
						   >
							   {loading ? "Registering..." : "Register"}
						   </button>
						   <div className="text-center text-gray-400 mb-2">or</div>
						   <div className="text-center">
							   Already have an account?{' '}
							   <Link to="/login" className="text-[#e63946] font-semibold hover:underline">Login</Link>
						   </div>
					   </form>
				   </div>
			   </div>
		   </div>
	);
};

export default RegisterPage;
