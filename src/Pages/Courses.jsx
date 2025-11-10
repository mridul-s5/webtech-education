import React from "react";
import Navbar from "../Components/Navbar";

export default function Courses() {
  const courses = [
    { title: "HTML & CSS", desc: "Web development ki shuruaat, structure aur styling sikhte hain." },
    { title: "JavaScript", desc: "Dynamic behavior aur logic building ke liye core language." },
    { title: "React.js", desc: "Modern frontend library for building fast, reusable UIs." },
    { title: "Node.js & Express", desc: "Server-side development aur API creation." },
    { title: "MongoDB", desc: "NoSQL database for efficient data management." },
    { title: "Full Stack Projects", desc: "Frontend + Backend integration with deployment." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-100 to-pink-50 text-slate-900 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <main className="flex-grow max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">
          Our Popular Courses
        </h2>
        <p className="text-slate-700 text-center mb-12 max-w-2xl mx-auto">
          WebTech Academy me aapko milega structured learning experience —  
          step-by-step guidance, projects, aur real-world skills ke sath.
        </p>

        {/* Course Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.title}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 border border-indigo-100"
            >
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">{course.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{course.desc}</p>
              <div className="mt-4">
                <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-lg text-sm hover:opacity-90 transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-6 mt-16 text-center text-sm tracking-wide">
        © {new Date().getFullYear()} WebTech Academy — Upgrade your skills with us.
      </footer>
    </div>
  );
}
