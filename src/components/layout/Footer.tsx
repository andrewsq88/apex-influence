"use client";

import { useState } from "react";
import Link from "next/link";

const servicesLinks = [
  { label: "Influencer Marketing", href: "/services" },
  { label: "Brand Campaigns", href: "/services" },
  { label: "Content Strategy", href: "/services" },
  { label: "Analytics", href: "/services" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) { setSubscribed(true); setEmail(""); setTimeout(() => setSubscribed(false), 3000); }
  };

  return (
    <footer className="bg-[#0a0a0f] border-t border-white/5" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#8b5cf6] to-[#3b82f6] flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] bg-clip-text text-transparent">Apex Influence</span>
            </Link>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-xs">Amplifying brands through strategic influencer partnerships and data-driven campaigns.</p>
            <div className="mt-6 flex items-center gap-3">
              {["Twitter", "Instagram", "LinkedIn"].map((s) => (
                <a key={s} href={`https://${s.toLowerCase()}.com`} target="_blank" rel="noopener noreferrer" aria-label={s} className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-gradient-to-br hover:from-[#8b5cf6] hover:to-[#3b82f6] transition-all duration-300"><span className="text-xs">{s[0]}</span></a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-3">{servicesLinks.map((l) => (<li key={l.label}><Link href={l.href} className="text-sm text-gray-400 hover:text-white transition-colors">{l.label}</Link></li>))}</ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">{companyLinks.map((l) => (<li key={l.label}><Link href={l.href} className="text-sm text-gray-400 hover:text-white transition-colors">{l.label}</Link></li>))}</ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Stay Updated</h3>
            <p className="text-sm text-gray-400 mb-4">Get the latest insights on influencer marketing.</p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required className="w-full px-4 py-2.5 text-sm bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]/50" />
              <button type="submit" className="w-full px-4 py-2.5 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] shadow-lg shadow-purple-500/20">{subscribed ? "Subscribed!" : "Subscribe"}</button>
            </form>
          </div>
        </div>
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Apex Influence. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
