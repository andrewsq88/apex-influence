import Link from "next/link";

export const metadata = {
  title: "Services",
  description: "Our influencer marketing services including influencer partnerships, brand campaigns, content strategy, and analytics.",
};

const services = [
  { title: "Influencer Discovery & Matching", description: "We use data analytics to find the perfect creator partnerships for your brand. Our proprietary algorithm analyzes 200+ data points per creator." },
  { title: "Campaign Strategy & Planning", description: "Custom campaign roadmaps aligned with your brand goals and KPIs. From brief development to timeline management." },
  { title: "Content Production & Management", description: "End-to-end content creation, approval workflows, and publishing across all major social platforms." },
  { title: "Paid Media Amplification", description: "Boost top-performing creator content with targeted paid distribution to maximize reach and ROI." },
  { title: "Performance Analytics", description: "Real-time dashboards tracking ROI, engagement, reach, and conversions. Full attribution modeling." },
  { title: "Creator Relationship Management", description: "Long-term partnership building and creator community development for sustained brand growth." },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"><div className="w-[600px] h-[400px] rounded-full opacity-20 blur-3xl bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] mx-auto" /></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] bg-clip-text text-transparent">Our Services</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">End-to-end influencer marketing solutions designed to connect your brand with the right creators and drive measurable results.</p>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-[#111118] rounded-xl p-8 border border-transparent hover:border-[#8b5cf6]/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#8b5cf6] to-[#3b82f6] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"><span className="text-white text-lg">✦</span></div>
              <h3 className="text-xl font-semibold text-white mb-3">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-4">{s.description}</p>
              <Link href="/contact" className="text-[#8b5cf6] hover:text-[#a78bfa] text-sm font-medium transition-colors">Learn more →</Link>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-6 pb-24 text-center">
        <div className="bg-gradient-to-r from-[#8b5cf6]/20 to-[#3b82f6]/20 rounded-2xl p-12 border border-[#8b5cf6]/20">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Let&apos;s discuss how we can help your brand connect with the right creators.</p>
          <Link href="/contact" className="inline-block px-8 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] hover:from-[#a78bfa] hover:to-[#60a5fa] transition-all">Book a Consultation</Link>
        </div>
      </section>
    </main>
  );
}
