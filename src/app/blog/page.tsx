import Link from 'next/link';

export const metadata = { title: 'Blog & Insights', description: 'Expert insights on influencer marketing, brand strategy, and social media trends.' };

const posts = [
  { slug: 'the-state-of-influencer-marketing-in-2025', category: 'Strategy', title: 'The State of Influencer Marketing in 2025', excerpt: 'From micro-influencers to AI-driven campaigns, here is what is shaping the industry this year.', date: 'Jan 15, 2025', readTime: '8 min read' },
  { slug: 'how-we-drove-3x-roi-for-a-global-tech-brand', category: 'Case Study', title: 'How We Drove 3x ROI for a Global Tech Brand', excerpt: 'A deep dive into our Q4 campaign strategy and the data behind the results.', date: 'Dec 8, 2024', readTime: '6 min read' },
  { slug: 'why-micro-influencers-are-outperforming-mega-creators', category: 'Trends', title: 'Why Micro-Influencers Are Outperforming Mega-Creators', excerpt: 'The data is clear: smaller audiences drive higher engagement and better conversion rates.', date: 'Nov 20, 2024', readTime: '5 min read' },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] bg-clip-text text-transparent mb-4">Insights</h1>
        <p className="text-gray-400 text-lg mb-12">Expert perspectives on influencer marketing and brand growth</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block bg-[#111118] rounded-xl p-6 border border-transparent hover:border-[#8b5cf6] transition-colors">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#8b5cf6] bg-[#8b5cf6]/10 rounded-full px-3 py-1 mb-4">{post.category}</span>
              <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
              <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
              <div className="flex items-center gap-3 text-xs text-gray-500"><span>{post.date}</span><span>·</span><span>{post.readTime}</span></div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
