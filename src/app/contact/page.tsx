"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", budget: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (res.ok) { setSubmitted(true); setForm({ name: "", email: "", company: "", budget: "", message: "" }); }
      else { setError("Something went wrong. Please try again."); }
    } catch { setError("Something went wrong. Please try again."); }
  }

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] bg-clip-text text-transparent mb-12">Let&#39;s Talk</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-300 text-lg mb-8">Ready to launch your next campaign? We would love to hear from you.</p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3"><span className="text-[#8b5cf6] text-xl">&#9993;</span><span className="text-gray-300">hello@apexinfluence.com</span></div>
              <div className="flex items-center gap-3"><span className="text-[#8b5cf6] text-xl">&#9742;</span><span className="text-gray-300">+1 (555) 123-4567</span></div>
              <div className="flex items-center gap-3"><span className="text-[#8b5cf6] text-xl">&#9906;</span><span className="text-gray-300">Los Angeles, CA</span></div>
            </div>
            <div><h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">Follow Us</h3><div className="flex gap-4">{["Twitter", "Instagram", "LinkedIn"].map((s) => (<a key={s} href={`https://${s.toLowerCase()}.com`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#8b5cf6] transition-colors">{s}</a>))}</div></div>
          </div>
          <div>
            {submitted ? (
              <div className="bg-[#111118] rounded-xl p-8 text-center border border-[#8b5cf6]/30"><p className="text-xl font-semibold text-[#8b5cf6] mb-2">Thank you!</p><p className="text-gray-300">We will be in touch within 24 hours.</p></div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && <p className="text-red-400 text-sm">{error}</p>}
                <div><label htmlFor="name" className="block text-sm text-gray-400 mb-1">Name</label><input type="text" id="name" name="name" value={form.name} onChange={handleChange} required className="w-full bg-[#111118] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] focus:border-transparent" placeholder="Your name" /></div>
                <div><label htmlFor="email" className="block text-sm text-gray-400 mb-1">Email</label><input type="email" id="email" name="email" value={form.email} onChange={handleChange} required className="w-full bg-[#111118] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] focus:border-transparent" placeholder="you@company.com" /></div>
                <div><label htmlFor="company" className="block text-sm text-gray-400 mb-1">Company</label><input type="text" id="company" name="company" value={form.company} onChange={handleChange} className="w-full bg-[#111118] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] focus:border-transparent" placeholder="Your company" /></div>
                <div><label htmlFor="budget" className="block text-sm text-gray-400 mb-1">Budget</label><select id="budget" name="budget" value={form.budget} onChange={handleChange} className="w-full bg-[#111118] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] focus:border-transparent"><option value="">Select a range</option><option value="under-10k">Under $10K</option><option value="10k-50k">$10K-$50K</option><option value="50k-100k">$50K-$100K</option><option value="100k+">$100K+</option></select></div>
                <div><label htmlFor="message" className="block text-sm text-gray-400 mb-1">Message</label><textarea id="message" name="message" value={form.message} onChange={handleChange} required rows={5} className="w-full bg-[#111118] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] focus:border-transparent resize-none" placeholder="Tell us about your project..." /></div>
                <button type="submit" className="w-full bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] hover:from-[#a78bfa] hover:to-[#60a5fa] text-white font-semibold py-3 rounded-lg transition-all">Send Message</button>
              </form>
            )}
          </div>
        </div>
        <div className="mt-16 bg-[#111118] rounded-xl h-64 flex items-center justify-center border border-gray-800"><p className="text-gray-500 text-lg">Map coming soon</p></div>
      </div>
    </main>
  );
}
