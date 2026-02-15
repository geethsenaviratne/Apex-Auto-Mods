import React from 'react';
import { FaCar } from "react-icons/fa";

const SeeDetails = ({ build, onClose }) => {
  if (!build) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-md p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden relative transform transition-all scale-100">
        {/* Header */}
        <div className="bg-[#c3cbd1] p-4 flex justify-between items-center text-white">
          <h3 className="text-xl font-bold flex items-center gap-2 text-black">
            <FaCar className="text-[#e63946] text-2xl" /> Build Details
          </h3>
          <button 
            onClick={onClose}
            className="text-white hover:text-gray-200 focus:outline-none text-2xl leading-none"
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        
        {/* Body */}
        <div className="p-6 space-y-5">
          {/* Build Info Header */}
          <div className="flex justify-between items-center border-b border-gray-100 pb-3">
            <span className="text-gray-500 font-medium text-sm">Build ID</span>
            <span className="text-gray-400 font-mono text-xs bg-gray-50 px-2 py-1 rounded">{build._id}</span>
          </div>

          {/* Main Details Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-1">
              <p className="text-gray-400 text-xs uppercase tracking-wide font-bold">Car Model</p>
              <p className="text-[#181a20] font-bold text-lg">{build.carModel}</p>
            </div>
            <div className="space-y-1">
              <p className="text-gray-400 text-xs uppercase tracking-wide font-bold">Color</p>
              <div className="flex items-center gap-2">
                 <div 
                  className="w-6 h-6 rounded-full border border-gray-200 shadow-sm"
                  style={{ backgroundColor: build.color?.toLowerCase() || '#ccc' }} 
                 ></div>
                 <span className="text-[#181a20] font-medium">{build.color}</span>
              </div>
            </div>
          </div>

          {/* Parts Section */}
          <div className="space-y-2">
            <p className="text-gray-400 text-xs uppercase tracking-wide font-bold">Selected Configs</p>
            <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                <div className="flex flex-wrap gap-2">
                {build.selectedParts && build.selectedParts.length > 0 ? (
                    build.selectedParts.map((part, index) => (
                    <span 
                        key={index} 
                        className="bg-white text-[#181a20] px-3 py-1.5 rounded-lg text-sm font-semibold border border-gray-200 shadow-sm flex items-center gap-1"
                    >
                        <span className="text-[#e63946] text-xs">●</span> {part}
                    </span>
                    ))
                ) : (
                    <span className="text-gray-400 italic text-sm">No specific parts selected</span>
                )}
                </div>
            </div>
          </div>

          {/* Timestamp */}
          <div className="pt-2">
             <p className="text-gray-400 text-xs text-right italic">
                Created on {new Date(build.createdAt).toLocaleString()}
             </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-4 border-t border-gray-100 flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-[#181a20] text-white rounded-xl hover:bg-[#000000] font-semibold transition shadow-lg text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeeDetails;
