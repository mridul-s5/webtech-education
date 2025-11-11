import React from "react";
import Navbar from "../Components/Navbar";

export default function Courses() {
  const courses = [
    {
      title: "HTML & CSS",
      desc: "Start your web journey by learning structure, layout, and styling with HTML & CSS.",
    },
    {
      title: "JavaScript",
      desc: "The foundation of web interactivity — master logic, DOM, and dynamic functionality.",
    },
    {
      title: "React.js",
      desc: "Build fast, reusable, and modern user interfaces using React and Hooks.",
    },
    {
      title: "Node.js & Express",
      desc: "Create powerful backend servers and RESTful APIs with Node.js and Express.",
    },
    {
      title: "MongoDB",
      desc: "Learn to manage and query data efficiently using NoSQL databases.",
    },
    {
      title: "Full Stack Projects",
      desc: "Integrate frontend and backend to build deployable, real-world applications.",
    },
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
        <p className="text-slate-700 text-center mb-12 max-w-2xl mx-auto leading-relaxed">
          At <span className="font-semibold text-indigo-700">ENFI Platforms</span>, 
          we provide a structured and project-based learning experience — 
          helping you turn knowledge into real-world skills.
        </p>

        {/* Course Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={course.title}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-indigo-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                {course.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {course.desc}
              </p>
              {/* <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-lg text-sm font-medium hover:opacity-90 hover:shadow transition-all duration-300">
                Learn More
              </button> */}
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-6 mt-16 text-center text-sm tracking-wide">
        © {new Date().getFullYear()} ENFI Platforms — Upgrade your skills with us.
      </footer>
    </div>
  );
}
