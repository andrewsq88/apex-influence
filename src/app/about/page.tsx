export const metadata = { title: "About", description: "Learn about Apex Influence, our mission, team, and values." };

const values = [
  { title: "Authenticity", description: "We believe real connections drive real results. Every partnership is built on genuine alignment." },
  { title: "Data-Driven", description: "Every decision is backed by data. We measure what matters and optimize continuously." },
  { title: "Innovation", description: "We stay ahead of trends and leverage cutting-edge tools to give our clients an edge." },
  { title: "Partnership", description: "We are not vendors — we are partners. Your success is our success." },
];

const team = [
  { name: "Alex Morgan", role: "CEO & Founder", bio: "10+ years in digital marketing. Former head of social at a Fortune 500.", initials: "AM" },
  { name: "Jordan Lee", role: "Head of Strategy", bio: "Former brand director at Fortune 500. Expert in campaign architecture.", initials: "JL" },
  { name: "Sam Rivera", role: "Creative Director", bio: "Award-winning content strategist with 8+ years in creator economy.", initials: "SR" },
  { name: "Taylor Kim", role: "Head of Analytics", bio: "Data science PhD, ex-Google. Builds our proprietary analytics tools.", initials: "TK" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <section className="py-32 px-6"><div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] bg-clip-text text-transparent">About Us</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">We are a team of marketers, data scientists, and creators united by one mission: bridging the gap between brands and creators through authentic partnerships.</p>
      </div></section>
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Story</h2>
            <p className="text-gray-400 leading-relaxed mb-4">Apex Influence was founded in 2020 with a simple observation: brands were wasting billions on influencer campaigns that did not deliver. The industry was built on vanity metrics, opaque pricing, and mismatched partnerships.</p>
            <p className="text-gray-400 leading-relaxed">We set out to fix that. By combining rigorous data analytics with deep creator relationships, we built an agency where every dollar spent is accountable, every partnership is strategic, and every campaign delivers measurable ROI.</p>
          </div>
          <div className="bg-[#111118] rounded-2xl p-12 border border-[#8b5cf6]/10 flex items-center justify-center"><div className="text-center"><div className="text-6xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] bg-clip-text text-transparent mb-2">2020</div><p className="text-gray-500">Founded in Los Angeles</p></div></div>
        </div>
        <div className="mb-24"><h2 className="text-3xl font-bold text-white mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">{values.map((v) => (<div key={v.title} className="bg-[#111118] rounded-xl p-6 border border-transparent hover:border-[#8b5cf6]/30 transition-all"><h3 className="text-lg font-semibold text-white mb-2">{v.title}</h3><p className="text-gray-400 text-sm leading-relaxed">{v.description}</p></div>))}</div>
        </div>
        <div><h2 className="text-3xl font-bold text-white mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">{team.map((m) => (<div key={m.name} className="bg-[#111118] rounded-xl p-6 text-center border border-transparent hover:border-[#8b5cf6]/30 transition-all"><div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#3b82f6] flex items-center justify-center mx-auto mb-4"><span className="text-white font-bold text-lg">{m.initials}</span></div><h3 className="text-lg font-semibold text-white">{m.name}</h3><p className="text-[#8b5cf6] text-sm mb-2">{m.role}</p><p className="text-gray-400 text-sm">{m.bio}</p></div>))}</div>
        </div>
      </section>
    </main>
  );
}
