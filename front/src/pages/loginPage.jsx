import React, { useState } from "react";
import { FaCar, FaTools, FaPaintBrush, FaCogs, FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Header from '../components/header';

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();
		setLoading(true);
		setError("");
		try {
			const res = await axios.post(
				import.meta.env.VITE_BACKEND_URL + "/api/auth/login",
				{ email, password }
			);
			if (!res.data || !res.data.user) {
				toast.error(res.data?.message || "Invalid credentials");
				setLoading(false);
				return;
			}
			toast.success("Login successful");
			localStorage.setItem("token", res.data.token);
			localStorage.setItem("user", JSON.stringify(res.data.user));
			setTimeout(() => {
				window.location.href = "/";
				setLoading(false);
			}, 700);
		} catch (err) {
			toast.error(err?.response?.data?.message || "Login failed");
			setLoading(false);
		}
	}

	return (
		<div className="min-h-screen w-full flex flex-col md:flex-row">
			   {/* Left Side */}
			   <div
				   className="md:w-1/2 w-full flex flex-col text-white p-6 md:p-10 hidden md:flex"
				   style={{
					   background: `linear-gradient(120deg, rgba(24,26,32,0.95) 80%, rgba(24,26,32,0.7)), url('/car.jpg') center/cover no-repeat`,
				   }}
			   >
				   <div className="max-w-lg mx-auto w-full">
					   <div className="flex items-center mb-8 mt-2">
						   <FaCar className="text-[#e63946] text-2xl mr-2" />
						   <span className="font-bold text-xl">Apex Auto Mods</span>
					   </div>
					   <div className="flex flex-col justify-center h-full mb-16 md:mb-40">
						   <h2 className="text-2xl md:text-4xl font-bold mb-2 text-center md:text-left">Welcome Back to</h2>
						   <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#e63946] text-center md:text-left">Apex Auto Mods</h2>
						   <p className="text-gray-300 mb-8 md:mb-16 text-center md:text-left">Apex Auto Mods Garage specializes in high-performance and aesthetic car modifications. Customize, save, and manage your builds all in one place.</p>
						   <ul className="space-y-4 md:space-y-5">
							   <li className="flex items-center justify-center md:justify-start text-base"><FaTools className="text-[#e63946] mr-3" /> Performance Modifications</li>
							   <li className="flex items-center justify-center md:justify-start text-base"><FaPaintBrush className="text-[#e63946] mr-3" /> Aesthetic Customization</li>
							   <li className="flex items-center justify-center md:justify-start text-base"><FaCogs className="text-[#e63946] mr-3" /> Build Management</li>
						   </ul>
					   </div>
				   </div>
			   </div>
			{/* Right Side */}
			<div className="md:w-1/2 w-full flex items-center justify-center bg-[#232b36] p-6 md:p-10 min-h-screen">
							<div className="w-full max-w-md bg-white rounded-xl shadow p-4 md:p-8 min-h-[80vh] md:min-h-0 flex flex-col justify-center">
								 <div className="block md:hidden">
									<div className="flex items-center justify-center mb-10 mt-0">
										 <FaCar className="text-[#e63946] text-5xl mr-3" />
										 <span className="font-bold text-3xl md:text-4xl">Apex Auto Mods</span>
									 </div>
									 <p className="text-center text-gray-400 mb-18">Apex Auto Mods Garage specializes in high-performance and aesthetic car modifications. Customize, save, and manage your builds all in one place.</p>
								 </div>
								 <h3 className="text-2xl font-bold text-center mb-2 text-[#181a20]">Login to Your Account</h3>
								 <p className="text-center text-gray-500 mb-15">Enter your credentials to access your garage</p>
								 <form onSubmit={handleSubmit}>
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
									required
								/>
							</div>
						</div>
						<div className="mb-2">
							<label className="block text-gray-700 mb-1" htmlFor="password">Password</label>
							<div className="flex items-center border rounded px-3 py-2 bg-gray-100">
								<FaLock className="text-gray-400 mr-2" />
								<input
									type="password"
									id="password"
									placeholder="Enter your password"
									className="bg-transparent outline-none flex-1 text-gray-800"
									value={password}
									onChange={e => setPassword(e.target.value)}
									required
								/>
							</div>
						</div>
						{error && <div className="text-red-600 text-sm mb-4 text-center">{error}</div>}
						<div className="flex justify-end mb-4">
							<a href="#" className="text-sm text-[#e63946] hover:underline">Forgot password?</a>
						</div>
						<button
							type="submit"
							className="w-full py-3 bg-[#e63946] text-white font-semibold rounded hover:bg-[#c82333] transition mb-4 flex items-center justify-center"
							disabled={loading}
						>
							{loading ? "Logging in..." : <>Login <span className="ml-2">→</span></>}
						</button>
						<div className="text-center text-gray-400 mb-2">or</div>
						<div className="text-center">
							Don't have an account?{' '}
							<Link to="/register" className="text-[#e63946] font-semibold hover:underline">Sign up</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
