import Link from 'next/link';

export const metadata = { title: 'Why Micro-Influencers Are Outperforming Mega-Creators', description: 'The data is clear: smaller audiences drive higher engagement and better conversion rates.' };

export default function BlogPostPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white px-6 py-24">
      <article className="max-w-3xl mx-auto">
        <Link href="/blog" className="inline-block text-[#8b5cf6] hover:text-[#a78bfa] text-sm mb-8">&larr; Back to Blog</Link>
        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#8b5cf6] bg-[#8b5cf6]/10 rounded-full px-3 py-1 mb-4">Trends</span>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Why Micro-Influencers Are Outperforming Mega-Creators</h1>
        <p className="text-gray-400 text-sm mb-10">By Jordan Lee &middot; Nov 20, 2024 &middot; 5 min read</p>
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>For years, the influencer marketing playbook was simple: find the biggest names, pay them the most money, and watch the impressions roll in. But the data from 2024 tells a very different story. Micro-influencers — creators with 10,000 to 100,000 followers — are consistently outperforming mega-creators across every metric that matters.</p>
          <h2 className="text-2xl font-semibold text-white mt-10">The Engagement Gap</h2>
          <p>Our analysis of over 10,000 campaigns reveals a stark pattern. Micro-influencers achieve an average engagement rate of 4.2%, compared to just 1.7% for mega-influencers with 1M+ followers. Smaller communities are tighter communities.</p>
          <h2 className="text-2xl font-semibold text-white mt-10">The ROI Reality</h2>
          <p>When we factor in cost, the gap widens further. For the price of one mega-influencer post ($50K-$100K), a brand can partner with 50-100 micro-influencers, generating 50-100 pieces of authentic content with 60% lower cost per engagement.</p>
          <h2 className="text-2xl font-semibold text-white mt-10">The Authenticity Factor</h2>
          <p>Micro-influencers tend to be more selective with partnerships because their reputation within their community is everything. This selectivity translates to higher trust, and higher trust translates to higher conversions.</p>
        </div>
        <div className="mt-16 bg-gradient-to-r from-[#8b5cf6]/20 to-[#3b82f6]/20 rounded-2xl p-8 text-center border border-[#8b5cf6]/20">
          <h3 className="text-2xl font-semibold mb-3 text-white">Want to leverage micro-influencers for your brand?</h3>
          <p className="text-gray-300 mb-6">Let&apos;s find the perfect creators for your next campaign.</p>
          <Link href="/contact" className="inline-block bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] text-white font-semibold px-8 py-3 rounded-lg">Get in Touch</Link>
        </div>
      </article>
    </main>
  );
}
