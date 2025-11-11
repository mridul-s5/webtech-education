import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-100 to-pink-50 text-slate-900 transition-all duration-500">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600 tracking-wide">
          Welcome to ENFI Platforms
        </h2>

        <p className="text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed mb-10">
          At <span className="font-semibold text-indigo-700">ENFI Platforms</span>, 
          you’ll experience structured learning — step-by-step guidance, 
          hands-on projects, and real-world skills to help you grow faster.
        </p>

        <Link
          to="/courses"
          className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:shadow-xl hover:bg-indigo-700 transform hover:-translate-y-1 transition-all duration-300"
        >
          Explore Courses
        </Link>
      </main>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-center mb-12 text-indigo-700">
          Why Choose ENFI Platforms?
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "💻 Full Stack Development",
              desc: "Learn both Frontend and Backend together through real-world projects.",
            },
            {
              title: "⚛️ React Mastery",
              desc: "Build modern, reusable UIs with React and Hooks efficiently.",
            },
            {
              title: "🎨 Tailwind CSS",
              desc: "Create fast, responsive, and beautiful designs easily.",
            },
            {
              title: "🗄️ MongoDB Database",
              desc: "Understand how to store and manage data effectively.",
            },
            {
              title: "🚀 Node & Express",
              desc: "Learn to build powerful backends and RESTful APIs with ease.",
            },
            {
              title: "🧠 Real Projects",
              desc: "Gain hands-on experience through live, practical projects.",
            },
          ].map((f, index) => (
            <div
              key={f.title}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h4 className="text-xl font-semibold text-indigo-700 mb-2">
                {f.title}
              </h4>
              <p className="text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/message"
            className="inline-block bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg hover:opacity-90 transform hover:-translate-y-1 transition-all duration-300"
          >
            Contact / Message Us
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-6 mt-12 text-center text-sm tracking-wide">
        © {new Date().getFullYear()} ENFI Platforms — Built with ❤️ for learners
      </footer>
    </div>
  );
}
