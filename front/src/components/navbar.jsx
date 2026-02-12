import { GoHomeFill } from "react-icons/go";
import { IoBook } from "react-icons/io5";
import { FaTools, FaCar, FaHouseUser } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { Link, useLocation } from "react-router-dom";
import NavSlider from "./navSlider";


// Accepts a 'user' prop
const getNavItems = (user) => [
	{ to: "/", label: "Home", icon: <GoHomeFill size={user ? 22 : 28} /> },
	{ to: "/services", label: "Services", icon: <FaTools size={user ? 22 : 28} /> },
	...(user ? [
		{ to: "/dashboard", label: "User Dashboard", icon: <FaHouseUser size={20} /> },
		{ to: "/customize", label: "Customize Car", icon: <FaCar size={20} /> },
	] : []),
	{ to: "/about", label: "About", icon: <IoBook size={user ? 20 : 28} /> },
	{ to: "/contact", label: "Contact", icon: <GrContact size={user ? 20 : 28} /> },
];




const Navbar = ({ user, mobileOpen, setMobileOpen }) => {
	const location = useLocation();
	const navItems = getNavItems(user);

	// Desktop sidebar only
	const desktopSidebar = (
		<div className="fixed top-0 left-0 flex flex-col items-start z-50">
			{/* Logo and Garage Name above navbar */}
			<div className="flex flex-col items-start mt-6 mb-4 ml-4">
				<span className="bg-white rounded-2xl p-3 flex items-center justify-center shadow ml-6">
					<FaCar size={32} className="text-[#e63946]" />
				</span>
				<span className="font-bold text-base text-black tracking-wide mt-2 ml-1">APEX GARAGE</span>
			</div>
			{/* Sidebar Navbar */}
			<aside className="bg-black rounded-3xl shadow-xl flex flex-col items-center justify-between py-6 w-20 md:w-24 h-[80vh] ml-4">
				{/* Nav Links */}
				<nav className={`flex flex-col ${user ? 'gap-4' : 'gap-8'} flex-1 justify-center w-full mt-2`}>
					{navItems.map((item) => (
						<Link
							key={item.to}
							to={item.to}
							className={`flex flex-col items-center gap-1 py-2 w-full transition group ${location.pathname === item.to ? "bg-[#23272f] rounded-xl" : "hover:bg-[#181a20] rounded-xl"}`}
						>
							<span className={`${user ? 'text-lg' : 'text-2xl'} ${location.pathname === item.to ? "text-white" : "text-gray-400 group-hover:text-white"}`}>{item.icon}</span>
							<span className={`${user ? 'text-[10px] md:text-xs' : 'text-xs md:text-sm'} font-medium ${location.pathname === item.to ? "text-white" : "text-gray-400 group-hover:text-white"}`}>{item.label}</span>
						</Link>
					))}
				</nav>
				{/* User Profile Icon at Bottom if logged in */}
				{user && (
					<div className="mb-2 flex flex-col items-center">
						<div className="rounded-2xl bg-[#181a20] p-2 shadow-lg">
							<img
								src={user.profileImage || "/default-avatar.png"}
								alt="Profile"
								className="w-12 h-12 rounded-full object-cover border-2 border-[#e63946]"
							/>
						</div>
					</div>
				)}
			</aside>
		</div>
	);

	return (
		<>
			{/* Mobile NavSlider */}
			<NavSlider open={mobileOpen} onClose={() => setMobileOpen(false)} navItems={navItems} user={user} onLogout={() => {
				if (typeof window !== 'undefined') {
					localStorage.removeItem('user');
					localStorage.removeItem('token');
				}
				window.location.href = '/';
			}} />
			{/* Desktop sidebar */}
			<div className="hidden md:block">{desktopSidebar}</div>
		</>
	);
};

export default Navbar;
