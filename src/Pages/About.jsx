import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-100 to-pink-50 text-slate-900">
      {/* Navbar */}
      <Navbar />

      {/* About Section */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">
          About WebTech Academy
        </h2>

        <p className="text-lg text-slate-700 text-center max-w-3xl mx-auto leading-relaxed mb-12">
          <span className="font-semibold text-indigo-700">WebTech Academy</span> ek modern online learning platform hai jahan par aapko 
          <span className="text-pink-600 font-semibold"> Web Development, Full Stack, </span>
          aur <span className="text-indigo-600 font-semibold">Design</span> ke latest tools aur technologies 
          practical tareeke se sikhaye jaate hain.  
          Hamara goal hai students ko IT industry ke liye <span className="font-semibold">job-ready</span> banana.
        </p>

        {/* Mission & Vision Section */}
        <div className="grid sm:grid-cols-2 gap-10 mt-10">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-2xl font-bold text-indigo-700 mb-3">🎯 Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              Hamara mission hai har learner ko empower karna — taaki wo modern technology aur 
              real-world projects ke through apni career growth ko accelerate kar sake.  
              Hum believe karte hain ki learning tabhi valuable hoti hai jab wo implement ho.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-2xl font-bold text-pink-700 mb-3">🚀 What Makes Us Different</h3>
            <p className="text-slate-600 leading-relaxed">
              WebTech Academy me aapko sirf theory nahi — balki 
              <span className="text-indigo-700 font-semibold"> real-time projects, mentorship, </span>  
              aur <span className="text-pink-700 font-semibold">career guidance</span> milta hai.  
              Hum har learner ke journey me practical exposure aur confidence build karte hain.
            </p>
          </div>
        </div>

        {/* Join Section */}
        <div className="text-center mt-16">
          <h4 className="text-2xl font-semibold text-indigo-700 mb-4">
            Ready to Start Your Journey?
          </h4>
          <p className="text-slate-600 mb-8">
            Join thousands of learners upgrading their web development skills with us!
          </p>
          <Link
            to="/courses"
            className="inline-block bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold shadow hover:shadow-lg hover:opacity-90 transform hover:-translate-y-1 transition-all duration-300"
          >
            Explore Courses
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-6 mt-16 text-center text-sm tracking-wide">
        © {new Date().getFullYear()} WebTech Academy — Learn. Build. Grow.
      </footer>
    </div>
  );
}
