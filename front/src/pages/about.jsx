import React from "react";
import Header from '../components/header';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { FaUsers, FaCar, FaStar, FaTools } from "react-icons/fa";

const About = ({ user }) => (
  <div className="min-h-screen bg-[#f5f6fa] flex flex-col">
    
    <Navbar user={user} />
    <main className="pl-0 md:pl-36 pt-10 px-4 max-w-8xl  flex-1">
      <section className="bg-[#c3cbd1] rounded-2xl shadow mx-2 md:mx-8 mb-8 p-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">About Apex Auto Mods Garage</h1>
        <p className="text-xl text-[#232b36] mb-2">Specializing in sport car performance and aesthetic modifications.</p>
        
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center border border-[#f0f0f0]">
            <h2 className="font-bold text-2xl mb-2 text-[#181a20]">Our Journey</h2>
            <p className="text-lg text-[#232b36] mb-4 text-center">Operating for 6 years in Colombo and Negombo, we've built a strong offline presence and are now expanding digitally to serve even more car enthusiasts.</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center border border-[#f0f0f0]">
            <h2 className="font-bold text-2xl mb-2 text-[#181a20]">Our Philosophy</h2>
            <p className="text-lg text-[#232b36] mb-4 text-center">Driven by excellence, innovation, and a love for cars, our team transforms your vision into reality.</p>
          </div>
        </div>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center border border-[#f0f0f0]">
          <FaUsers className="text-[#e63946] text-4xl mb-4" />
          <h2 className="font-bold text-2xl mb-2 text-[#181a20]">Our Team</h2>
          <p className="text-[#6b7280] mb-4 text-center">A passionate group of automotive experts, engineers, and designers dedicated to delivering the best in car modification.</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center border border-[#f0f0f0]">
          <FaCar className="text-[#e63946] text-4xl mb-4" />
          <h2 className="font-bold text-2xl mb-2 text-[#181a20]">Our Services</h2>
          <p className="text-[#6b7280] mb-4 text-center">From body kits and wraps to engine tuning, interior upgrades, and lighting solutions—your dream ride is just a step away.</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center border border-[#f0f0f0]">
          <FaStar className="text-[#e63946] text-4xl mb-4" />
          <h2 className="font-bold text-2xl mb-2 text-[#181a20]">Our Values</h2>
          <p className="text-[#6b7280] mb-4 text-center">Quality, integrity, and customer satisfaction are at the heart of everything we do. We strive for excellence in every project.</p>
        </div>
      </section>
      <section className="bg-[#c3cbd1] rounded-2xl shadow mx-2 md:mx-8 mb-18 p-10 text-center">
        <h2 className="text-3xl font-bold text-black mb-4">Why Choose Us?</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="flex flex-col items-center">
            <FaTools className="text-[#e63946] text-3xl mb-2" />
            <span className="font-semibold text-lg text-[#181a20]">6+ Years of Experience</span>
          </div>
          <div className="flex flex-col items-center">
            <FaStar className="text-[#e63946] text-3xl mb-2" />
            <span className="font-semibold text-lg text-[#181a20]">Thousands of Satisfied Clients</span>
          </div>
          <div className="flex flex-col items-center">
            <FaCar className="text-[#e63946] text-3xl mb-2" />
            <span className="font-semibold text-lg text-[#181a20]">Custom Solutions for Every Car</span>
          </div>
        </div>
      </section>
      <section className="max-w-3xl mx-auto text-center px-4 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Join the Apex Auto Mods Community</h2>
        <p className="text-lg text-[#181a20] mb-8">Connect with fellow car enthusiasts, share your projects, and get inspired. Create your account or schedule a consultation today!</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <a href="/register" className="px-8 py-4 bg-[#e63946] text-white rounded-xl font-semibold shadow hover:bg-[#d62828] transition text-lg">Create Account <span className="ml-2">→</span></a>
          <a href="/contact" className="px-8 py-4 border border-black text-black rounded-xl font-semibold shadow hover:border-[#e63946] hover:text-[#e63946] transition text-lg">Schedule Consultation</a>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default About;
