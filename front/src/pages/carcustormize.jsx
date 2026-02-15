import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from '../components/navbar';
import Footer from '../components/footer';


const CAR_MODELS = [
  "Nissan GTR",
  "Range Rover",
  "Honda Cr-V 2021",
  "Audi A6 2021",
  "Audi Q3 2019",
  "Mercedes-Benz C-Class 2019",
  "BMW M4",
  "BMW X5",
  "BMW i8",
  "Porsche 911",
  "Porsche Cayenne",
  "Ford Mustang",
  "Toyota Starlet",
  "Toyota Supra",
  "Toyota Hilux",
  "Toyota Land Cruiser",
  "Nissan Petrol Y61",
  "Nissan Petrol Y62",
  "Nissan Navara",
  "Mitsubishi Lancer Evolution",
  "Mitsubishi Pajero",
  "Mitsubishi L200",
  "Mitubishi Outlander",
  "Mitsubishi Montero"
];
const COLORS = ["Red", "Black", "White", "Blue", "Silver", "Orange", "Green"];
const PARTS = [
  "Performance Exhaust",
  "Body Kit",
  "Turbocharger",
  "Custom Wheels",
  "Leather Seats",
  "Ambient Lighting",
  "LED Headlights",
  "Vehicle Wraps",
  "Lift Kit",
  "All-Terrain Tires",
  "Winch",
  "Roof Rack",
  "Snorkel",
  "Skid Plates",
  "Bull Bar",
  "Off-road Lights"
];

const CarCustomize = ({ user }) => {
  const [carModel, setCarModel] = useState("");
  const [color, setColor] = useState("");
  const [selectedParts, setSelectedParts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState("");

  const handlePartToggle = (part) => {
    setSelectedParts((prev) =>
      prev.includes(part) ? prev.filter((p) => p !== part) : [...prev, part]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/builds`,
        {
          userId: user?.id || user?._id,
          carModel,
          color,
          selectedParts,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setSuccess("Build saved successfully!");
      setShowToast(true);
      setCarModel("");
      setColor("");
      setSelectedParts([]);
    } catch (err) {
      setError(err?.response?.data?.message || "Failed to save build.");
    } finally {
      setLoading(false);
    }
  };

  // Toast auto-hide effect (1 second)
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
        setSuccess("");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <div className="min-h-screen bg-[#f5f6fa] relative">
      {/* Toast notification */}
      {showToast && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white text-green-600 px-6 py-3 rounded-xl shadow-lg text-lg font-semibold border border-green-500 animate-fade-in">
          {success}
        </div>
      )}
      
      <Navbar user={user} />
      <main className="pl-0 md:pl-36 pt-10 px-2 sm:px-4 max-w-7xl mx-auto w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-[#181a20] mb-8 text-center">Customize Your Car</h2>
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left: Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow p-4 sm:p-8 flex-1 flex flex-col gap-6 border border-[#f0f0f0] max-w-full md:max-w-xl">
            <div>
              <label className="block font-semibold mb-2">Car Model</label>
              <select
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e63946]"
                value={carModel}
                onChange={e => setCarModel(e.target.value)}
                required
              >
                <option value="">Select a car model</option>
                {CAR_MODELS.map(model => (
                  <option key={model} value={model}>{model}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-2">Color</label>
              <select
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e63946]"
                value={color}
                onChange={e => setColor(e.target.value)}
                required
              >
                <option value="">Select a color</option>
                {COLORS.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-2">Select Parts</label>
              <div className="flex flex-wrap gap-3">
                {PARTS.map(part => (
                  <label key={part} className={`px-4 py-2 rounded-xl border cursor-pointer select-none ${selectedParts.includes(part) ? 'bg-[#e63946] text-white border-[#e63946]' : 'bg-gray-100 text-[#181a20] border-gray-200'}`}>
                    <input
                      type="checkbox"
                      className="mr-2 accent-[#e63946]"
                      checked={selectedParts.includes(part)}
                      onChange={() => handlePartToggle(part)}
                    />
                    {part}
                  </label>
                ))}
              </div>
            </div>
            {error && <div className="text-red-500 text-sm">{error}</div>}
            <button
              type="submit"
              className="mt-4 px-8 py-3 bg-[#e63946] text-white rounded-xl font-semibold shadow hover:bg-[#c82333] transition text-lg"
              disabled={loading}
            >
              {loading ? "Saving..." : "Save Build"}
            </button>
          </form>
          {/* Right: Car Images, 2 per row grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center mt-8 md:mt-0">
            <img src="/bmw.jpg" alt="BMW" className="w-full rounded-2xl shadow-lg object-cover" />
            <img src="/gtr.jpg" alt="GTR" className="w-full rounded-2xl shadow-lg object-cover" />
            <img src="/petrol.jpg" alt="Petrol" className="w-full rounded-2xl shadow-lg object-cover" />
            <img src="/range.jpg" alt="Range Rover" className="w-full rounded-2xl shadow-lg object-cover" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CarCustomize;
