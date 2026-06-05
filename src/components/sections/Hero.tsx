"use client";

import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[600px] rounded-full opacity-30 blur-3xl" style={{ background: "radial-gradient(ellipse at center, rgba(139,92,246,0.4) 0%, rgba(59,130,246,0.2) 50%, transparent 70%)" }} />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-20">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] bg-clip-text text-transparent">
          Where Influence Meets Impact
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          We connect leading brands with authentic creators to build campaigns that drive real engagement and measurable results.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="/contact" className="px-8 py-3.5 rounded-full text-white font-semibold text-lg bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] hover:from-[#a78bfa] hover:to-[#60a5fa] transition-all duration-300 hover:scale-105">Start Your Campaign</Link>
          <Link href="/work" className="px-8 py-3.5 rounded-full text-white font-semibold text-lg border border-gray-600 hover:border-[#8b5cf6] transition-all duration-300 hover:scale-105">View Our Work</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {[{ value: "500+", label: "Campaigns" }, { value: "2B+", label: "Impressions" }, { value: "150+", label: "Brands" }, { value: "98%", label: "Client Retention" }].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] bg-clip-text text-transparent mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
