import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from '../components/header';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const UserDashboard = ({ user}) => {
  const [builds, setBuilds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) return;
    setLoading(true);
    if (!user.id && !user._id && !user.userId) {
      setError('User ID not found.');
      setLoading(false);
      return;
    }
    const userId = user.id || user._id || user.userId;
    axios.get(
     `${import.meta.env.VITE_BACKEND_URL}/api/builds/${userId}`,
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
    )
      .then(res => {
        setBuilds(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err?.response?.data?.message || 'Failed to fetch builds.');
        setLoading(false);
      });
  }, [user]);

  // Get greeting based on time
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning,";
    if (hour < 18) return "Good Afternoon,";
    return "Good Evening,";
  };

  return (
    <div className="min-h-screen bg-[#f5f6fa]">

      <Navbar user={user} />
      <main className="pl-0 md:pl-36 pt-10 px-2 sm:px-4 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4 text-center md:text-left">
          <div className="w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-[#181a20] mb-1">{getGreeting()}</h2>
            <h3 className="text-xl md:text-2xl font-semibold text-[#232b36]">{user?.name || 'User'}</h3>
          </div>
          <div className="mt-4 md:mt-0 w-full md:w-auto">
            <input
              type="text"
              placeholder="Search here"
              className="rounded-xl border border-gray-200 px-4 py-2 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-[#e63946] bg-white shadow"
            />
          </div>
        </div>
        {/* Hot Collections (show first 2 builds as cards) */}
        <div className="mb-10">
          <h4 className="text-lg font-semibold mb-3 flex items-center justify-center md:justify-start text-[#e63946]">🔥 Hot Collections</h4>
          <div className="flex flex-col md:flex-row gap-6">
            {loading ? (
              <div className="text-gray-400">Loading builds...</div>
            ) : error ? (
              <div className="text-red-500">{error}</div>
            ) : builds.length === 0 ? (
              <div className="text-gray-400">No builds found.</div>
            ) : (
              builds.slice(0, 2).map((build, idx) => (
                <div key={build._id || idx} className="bg-white rounded-2xl shadow p-4 sm:p-6 flex-1 min-w-0 max-w-full flex flex-col gap-4 border border-[#f0f0f0]">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-block w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-[#e63946] text-lg">
                      {build.carModel?.[0] || 'C'}
                    </span>
                    <span className="font-bold text-lg text-[#181a20]">{build.carModel}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="bg-[#f7e6e6] text-[#e63946] px-3 py-1 rounded-xl text-xs font-semibold">{build.color}</span>
                    {build.selectedParts?.map((part, i) => (
                      <span key={i} className="bg-[#e6f7f1] text-[#181a20] px-3 py-1 rounded-xl text-xs font-semibold">{part}</span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-2 gap-1 sm:gap-0">
                    <span className="text-xs text-gray-400">Created: {new Date(build.createdAt).toLocaleDateString()}</span>
                    <span className="text-xs text-gray-400">ID: {build._id?.slice(-6) || 'N/A'}</span>
                  </div>
                  <div className="mt-2 font-bold text-[#e63946]">Build #{idx + 1}</div>
                </div>
              ))
            )}
          </div>
        </div>
        {/* Regular Collections (table of all builds) */}
        <div className="bg-white rounded-2xl shadow p-4 sm:p-6 overflow-x-auto">
          <h4 className="text-lg font-semibold mb-4">Regular Collections</h4>
          <div className="w-full overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500 border-b">
                  <th className="py-2 pr-2 sm:pr-4">Car Model</th>
                  <th className="py-2 pr-2 sm:pr-4">Color</th>
                  <th className="py-2 pr-2 sm:pr-4">Parts</th>
                  <th className="py-2 pr-2 sm:pr-4">Created</th>
                  <th className="py-2 pr-2 sm:pr-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {builds.map((build, idx) => (
                  <tr key={build._id || idx} className="border-b hover:bg-gray-50">
                    <td className="py-2 pr-2 sm:pr-4 font-semibold text-[#181a20]">{build.carModel}</td>
                    <td className="py-2 pr-2 sm:pr-4">{build.color}</td>
                    <td className="py-2 pr-2 sm:pr-4">
                      {build.selectedParts?.join(', ') || 'None'}
                    </td>
                    <td className="py-2 pr-2 sm:pr-4 text-xs text-gray-400">{new Date(build.createdAt).toLocaleDateString()}</td>
                    <td className="py-2 pr-2 sm:pr-4">
                      <button className="px-4 py-1 bg-[#e63946] text-white rounded-lg font-semibold shadow hover:bg-[#c82333] transition text-xs">See details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </div>
    
  );
};

export default UserDashboard;
