import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-100 to-pink-50 text-slate-900">
      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <main className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">
          Contact Us
        </h2>
        <p className="text-lg text-slate-700 mb-12 leading-relaxed">
          Have questions, feedback, or collaboration ideas?  
          We’d love to hear from you — connect with us anytime!
        </p>

        {/* Contact Details Card */}
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 max-w-md mx-auto space-y-4">
          <div className="text-left">
            <p className="text-indigo-700 font-semibold">📧 Email</p>
            <p className="text-slate-700">support@webtechacademy.com</p>
          </div>
          <div className="text-left">
            <p className="text-indigo-700 font-semibold">📞 Phone</p>
            <p className="text-slate-700">+91 98765 43210</p>
          </div>
          <div className="text-left">
            <p className="text-indigo-700 font-semibold">📍 Address</p>
            <p className="text-slate-700">Lucknow, Uttar Pradesh, India</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-10">
          <Link
            to="/message"
            className="inline-block bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold shadow hover:shadow-lg hover:opacity-90 transform hover:-translate-y-1 transition-all duration-300"
          >
            Send a Message
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-6 mt-16 text-center text-sm tracking-wide">
        © {new Date().getFullYear()} WebTech Academy — Connect. Learn. Grow.
      </footer>
    </div>
  );
}
