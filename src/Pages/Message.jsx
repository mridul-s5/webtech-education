import React, { useState } from "react";
import Navbar from "../Components/Navbar";

export default function Message() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    try {
      const res = await fetch("https://webtech-education-backend-1.onrender.com/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setSuccess("❌ Failed to send message.");
      }
    } catch (error) {
      setSuccess("❌ Server error, please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-100 to-pink-50 text-slate-900 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">
          Send Us a Message
        </h2>
        <p className="text-slate-600 text-center mb-8 max-w-md">
          Have a question, feedback, or suggestion? We'd love to hear from you!
        </p>

        {/* Message Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-md border border-indigo-100 w-full max-w-md transition-all hover:shadow-xl"
        >
          <div className="space-y-4">
            <input
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none transition"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none transition"
            />
            <textarea
              name="message"
              placeholder="Write your message..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="w-full px-4 py-2 border rounded-lg h-32 resize-none focus:ring-2 focus:ring-indigo-400 outline-none transition"
            />
            <button
              disabled={loading}
              className={`w-full py-2 rounded-lg text-white font-semibold transition ${
                loading
                  ? "bg-indigo-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-indigo-600 to-pink-600 hover:opacity-90"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            {success && (
              <p
                className={`text-center text-sm font-medium mt-2 ${
                  success.includes("✅") ? "text-green-600" : "text-red-600"
                }`}
              >
                {success}
              </p>
            )}
          </div>
        </form>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-6 mt-12 text-center text-sm tracking-wide">
        © {new Date().getFullYear()} WebTech Academy — We value your feedback 💬
      </footer>
    </div>
  );
}
