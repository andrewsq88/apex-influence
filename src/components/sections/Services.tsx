export function Services() {
  const services = [
    { title: "Influencer Marketing", description: "We match your brand with the perfect creators", icon: "◉" },
    { title: "Brand Campaigns", description: "Full-service campaign management from strategy to execution", icon: "★" },
    { title: "Content Strategy", description: "Data-driven content that resonates with target audiences", icon: "◈" },
    { title: "Analytics & ROI", description: "Real-time tracking and comprehensive performance reports", icon: "◊" },
  ];

  return (
    <section id="services" className="max-w-7xl mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] bg-clip-text text-transparent mb-4">What We Do</h2>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">End-to-end influencer marketing solutions for brands and creators</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div key={service.title} className="bg-[#111118] rounded-xl p-6 border border-transparent hover:border-[#8b5cf6]/50 transition-all duration-300 group">
            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
