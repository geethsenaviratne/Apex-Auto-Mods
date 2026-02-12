import React from "react";
import Header from '../components/header';
import Navbar from '../components/navbar';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Footer from '../components/footer';

const Contact = ({ user }) => (
  <div className="min-h-screen bg-[#f5f6fa] flex flex-col">
    
     <Navbar user={user} />
    <main className="pl-0 md:pl-36 pt-10 px-4 max-w-8xl flex-1">
      <section className="bg-[#c3cbd1] rounded-2xl shadow mx-2 md:mx-8 mb-8 p-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Contact Apex Auto Mods Garage</h1>
        <p className="text-lg text-[#232b36] mb-4">We'd love to hear from you! Reach out for inquiries, appointments, or just to connect with our team.</p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Left: Contact Form */}
        <div className="bg-white rounded-2xl shadow p-8 border border-[#f0f0f0] order-1 md:order-1">
          <h2 className="font-bold text-2xl mb-6 text-[#181a20]">Send Us a Message</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-[#181a20] font-semibold mb-2">Name</label>
              <input type="text" className="w-full px-4 py-2 rounded-xl border border-[#c3cbd1] focus:border-[#e63946] focus:outline-none" placeholder="Your Name" required />
            </div>
            <div>
              <label className="block text-[#181a20] font-semibold mb-2">Email</label>
              <input type="email" className="w-full px-4 py-2 rounded-xl border border-[#c3cbd1] focus:border-[#e63946] focus:outline-none" placeholder="Your Email" required />
            </div>
            <div>
              <label className="block text-[#181a20] font-semibold mb-2">Message</label>
              <textarea className="w-full px-4 py-2 rounded-xl border border-[#c3cbd1] focus:border-[#e63946] focus:outline-none" rows="5" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="w-full px-6 py-3 bg-[#e63946] text-white rounded-xl font-semibold hover:bg-[#c82333] transition shadow">Send Message</button>
          </form>
        </div>
        {/* Right: Contact Details */}
        <div className="bg-white rounded-2xl shadow p-8 border border-[#f0f0f0] flex flex-col items-center justify-center order-2 md:order-2">
          <h2 className="font-bold text-2xl mb-6 text-[#181a20]">Contact Details</h2>
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center">
              <FaPhone className="text-[#e63946] text-2xl mr-3" />
              <span className="text-lg text-[#232b36]">+94 77 123 4567</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-[#e63946] text-2xl mr-3" />
              <span className="text-lg text-[#232b36]">info@apexautomods.com</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-[#e63946] text-2xl mr-3" />
              <span className="text-lg text-[#232b36]">Colombo & Negombo, Sri Lanka</span>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-[#6b7280]">Operating Hours: Mon-Sat 9:00 AM - 6:00 PM</p>
            <p className="text-[#6b7280]">Follow us on social media for updates and offers!</p>
          </div>
        </div>
      </section>
     
    </main>
     <Footer />
  </div>
);

export default Contact;
