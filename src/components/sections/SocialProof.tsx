export function SocialProof() {
  const brands = ["Nike", "Spotify", "Adobe", "Shopify", "Netflix"];
  const testimonials = [
    { quote: "Apex Influence transformed our Q4 campaign. 3x ROI in 6 weeks.", author: "Sarah Chen", role: "VP Marketing, TechBrand" },
    { quote: "The creator partnerships they built drove 50M impressions.", author: "Marcus Rivera", role: "CMO, FashionCo" },
    { quote: "Best agency we have worked with. Data-driven and creative.", author: "Emily Park", role: "Brand Director, FoodCorp" },
  ];

  return (
    <section id="work" className="max-w-7xl mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] bg-clip-text text-transparent mb-4">Trusted by Leading Brands</h2>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-20">
        {brands.map((brand, index) => (
          <div key={brand} className="flex items-center gap-6 md:gap-10">
            <span className="text-2xl md:text-3xl font-bold text-gray-600 tracking-wide">{brand}</span>
            {index < brands.length - 1 && <span className="text-gray-700 text-xl">·</span>}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.author} className="bg-[#111118] rounded-xl p-6">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
            <div><p className="text-white font-semibold">{t.author}</p><p className="text-gray-500 text-sm">{t.role}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}
