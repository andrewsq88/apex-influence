import Link from 'next/link';

export function CTA() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 py-24">
      <div className="relative">
        <div className="absolute inset-0 rounded-2xl opacity-40 blur-2xl bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6]" />
        <div className="relative rounded-2xl p-12 md:p-16 text-center border border-[#8b5cf6]/20 bg-[#0a0a0f]/80">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] bg-clip-text text-transparent">Ready to Amplify Your Brand?</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">Let&apos;s create something extraordinary together. Get in touch for a free strategy session.</p>
          <Link href="/contact" className="inline-block px-10 py-4 rounded-full text-white font-semibold text-lg bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] hover:from-[#a78bfa] hover:to-[#60a5fa] transition-all duration-300 hover:scale-105">Get Started Today</Link>
        </div>
      </div>
    </section>
  );
}
