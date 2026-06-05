import Link from "next/link";

export const metadata = { title: "Our Work", description: "Explore our portfolio of influencer marketing campaigns and brand partnerships." };

const caseStudies = [
  { category: "Influencer", title: "TechBrand Q4 Launch", metric: "3x ROI in 6 weeks", description: "We partnered with 50 tech influencers to launch TechBrand new product line, generating 50M impressions and driving $2M in direct sales.", results: ["$2M Revenue", "50M Impressions", "50 Creators"] },
  { category: "Brand", title: "FashionCo Summer Campaign", metric: "50M Impressions", description: "A 12-week summer campaign featuring 30 fashion creators across Instagram and TikTok, resulting in 50M impressions and 200K new followers.", results: ["200K New Followers", "12% Engagement", "30 Creators"] },
  { category: "Content", title: "FoodCorp Brand Refresh", metric: "2x Engagement", description: "Complete brand repositioning through strategic creator partnerships, doubling engagement rates and reaching 5M new consumers.", results: ["2x Engagement", "5M New Reach", "40 Creators"] },
];

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <section className="py-32 px-6"><div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] bg-clip-text text-transparent">Our Work</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">Case studies from brands we have helped grow through strategic influencer partnerships.</p>
      </div></section>
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="flex flex-wrap gap-3 justify-center mb-12">{["All", "Influencer", "Brand", "Content"].map((tab, i) => (<button key={tab} className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${i === 0 ? "bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] text-white" : "bg-[#111118] text-gray-400 hover:text-white border border-gray-800"}`}>{tab}</button>))}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{caseStudies.map((s) => (<div key={s.title} className="bg-[#111118] rounded-xl overflow-hidden border border-transparent hover:border-[#8b5cf6]/30 transition-all group"><div className="h-1 bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6]" /><div className="p-8"><span className="text-xs font-semibold uppercase tracking-wider text-[#8b5cf6]">{s.category}</span><h3 className="text-xl font-bold text-white mt-2 mb-1">{s.title}</h3><p className="text-[#3b82f6] font-semibold text-sm mb-4">{s.metric}</p><p className="text-gray-400 text-sm leading-relaxed mb-6">{s.description}</p><div className="flex flex-wrap gap-2 mb-6">{s.results.map((r) => (<span key={r} className="text-xs bg-white/5 text-gray-300 px-3 py-1 rounded-full">{r}</span>))}</div><span className="text-[#8b5cf6] hover:text-[#a78bfa] text-sm font-medium transition-colors cursor-pointer">Read Case Study →</span></div></div>))}</div>
      </section>
      <section className="max-w-4xl mx-auto px-6 pb-24 text-center"><div className="bg-gradient-to-r from-[#8b5cf6]/20 to-[#3b82f6]/20 rounded-2xl p-12 border border-[#8b5cf6]/20"><h2 className="text-3xl font-bold text-white mb-4">Have a project in mind?</h2><p className="text-gray-400 mb-8 max-w-xl mx-auto">Let&apos;s create your next success story together.</p><Link href="/contact" className="inline-block px-8 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] hover:from-[#a78bfa] hover:to-[#60a5fa] transition-all">Start a Project</Link></div></section>
    </main>
  );
}
