import Link from 'next/link';

export const metadata = { title: 'How We Drove 3x ROI for a Global Tech Brand', description: 'A deep dive into our Q4 campaign strategy and the data behind the results.' };

export default function BlogPostPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white px-6 py-24">
      <article className="max-w-3xl mx-auto">
        <Link href="/blog" className="inline-block text-[#8b5cf6] hover:text-[#a78bfa] text-sm mb-8">&larr; Back to Blog</Link>
        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#8b5cf6] bg-[#8b5cf6]/10 rounded-full px-3 py-1 mb-4">Case Study</span>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">How We Drove 3x ROI for a Global Tech Brand</h1>
        <p className="text-gray-400 text-sm mb-10">By Alex Morgan &middot; Dec 8, 2024 &middot; 6 min read</p>
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>When TechBrand approached us to launch their Q4 product line, they had ambitious goals: generate measurable sales, build brand awareness among Gen Z and Millennial audiences, and do it all within a 6-week timeline. The result? A 3x return on investment, $2M in direct sales, and 50 million impressions across platforms.</p>
          <h2 className="text-2xl font-semibold text-white mt-10">The Challenge</h2>
          <p>TechBrand previous influencer campaigns had plateaued. They were working with mega-influencers who delivered vanity metrics but failed to drive actual purchases. We identified three core problems: the wrong creator tier, a lack of platform diversity, and no proper tracking infrastructure.</p>
          <h2 className="text-2xl font-semibold text-white mt-10">Our Strategy</h2>
          <p>We shifted 80% of the budget from mega-influencers to mid-tier creators (50K-500K followers) in the tech review and productivity niches. We built a 50-creator cohort across TikTok, Instagram Reels, YouTube Shorts, and Twitter. Each creator received a custom tracking link and unique discount code.</p>
          <h2 className="text-2xl font-semibold text-white mt-10">The Results</h2>
          <p>Final numbers: $2M in tracked revenue against a $650K total investment. 50M total impressions. 12% average engagement rate. And 3,200 new email subscribers through influencer referral links.</p>
        </div>
        <div className="mt-16 bg-gradient-to-r from-[#8b5cf6]/20 to-[#3b82f6]/20 rounded-2xl p-8 text-center border border-[#8b5cf6]/20">
          <h3 className="text-2xl font-semibold mb-3 text-white">Ready to elevate your influencer strategy?</h3>
          <p className="text-gray-300 mb-6">Let&apos;s build a campaign that delivers real results.</p>
          <Link href="/contact" className="inline-block bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] text-white font-semibold px-8 py-3 rounded-lg">Get in Touch</Link>
        </div>
      </article>
    </main>
  );
}
