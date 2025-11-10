import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-100 to-pink-50 text-slate-900">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600 tracking-wide transition-all duration-300">
          Welcome to WebTech Online Education
        </h2>

        <p className="text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed mb-10">
          Master the latest web technologies — HTML, CSS, JavaScript, React, Node.js aur aur bhi bahut kuch!
          <br />
          Learn step-by-step through interactive lessons and real projects.
        </p>

        <Link
          to="/courses"
          className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold shadow hover:shadow-lg hover:bg-indigo-700 transform hover:-translate-y-1 transition duration-300"
        >
          Explore Courses
        </Link>
      </main>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-center mb-12 text-indigo-700">
          Why Choose WebTech Academy?
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "💻 Full Stack Development",
              desc: "Frontend + Backend dono ek sath seekho practical projects ke sath.",
            },
            {
              title: "⚛️ React Mastery",
              desc: "Component-based web apps banana seekho React aur Hooks ke sath.",
            },
            {
              title: "🎨 Tailwind CSS",
              desc: "Responsive aur modern design fast banane ka best tool.",
            },
            {
              title: "🗄️ MongoDB Database",
              desc: "Data ko efficiently store aur retrieve karna seekho.",
            },
            {
              title: "🚀 Node & Express",
              desc: "Backend API banana aur server manage karna easy banao.",
            },
            {
              title: "🧠 Real Projects",
              desc: "Har course me live project aur real-world examples.",
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
            className="inline-block bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold shadow hover:shadow-lg hover:opacity-90 transform hover:-translate-y-1 transition-all duration-300"
          >
            Contact / Message Us
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-6 mt-12 text-center text-sm tracking-wide">
        © {new Date().getFullYear()} WebTech Academy — Built with ❤️ for learners
      </footer>
    </div>
  );
}
