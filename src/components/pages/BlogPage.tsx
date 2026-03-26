'use client';

import { Clock, User, ArrowRight, Bookmark, Share2 } from 'lucide-react';

const featuredPost = {
  title: 'The Future of Design Systems in 2024',
  excerpt: 'How modern design tokens, component libraries, and AI-assisted design are reshaping the way teams build products at scale.',
  author: 'Sarah Chen',
  date: 'Mar 15, 2024',
  readTime: '8 min read',
  category: 'Design',
  image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop',
};

const posts = [
  { title: 'Building Accessible Color Palettes', excerpt: 'A comprehensive guide to creating color systems that work for everyone.', author: 'Alex Rivera', date: 'Mar 12', readTime: '5 min', category: 'Accessibility', image: 'https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?w=400&h=300&fit=crop' },
  { title: 'Typography Best Practices', excerpt: 'Learn how to choose and pair fonts that elevate your UI designs.', author: 'Maria Kim', date: 'Mar 10', readTime: '6 min', category: 'Typography', image: 'https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=400&h=300&fit=crop' },
  { title: 'CSS Variables Deep Dive', excerpt: 'Master custom properties to build flexible and maintainable stylesheets.', author: 'Tom Wright', date: 'Mar 8', readTime: '10 min', category: 'CSS', image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop' },
  { title: 'Micro-interactions That Delight', excerpt: 'Small animations and transitions that make a big difference in UX.', author: 'Yuki Tanaka', date: 'Mar 5', readTime: '4 min', category: 'Animation', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop' },
  { title: 'From Figma to Code', excerpt: 'Streamline your design-to-development handoff process with modern tools.', author: 'Chris Patel', date: 'Mar 3', readTime: '7 min', category: 'Workflow', image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=400&h=300&fit=crop' },
];

export default function BlogPage() {
  return (
    <div style={{ fontFamily: 'var(--t-font-body)' }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold" style={{ fontFamily: 'var(--t-font-heading)' }}>Blog</h1>
          <p className="text-sm mt-1" style={{ color: 'var(--t-muted-fg)' }}>Insights and tutorials from the team.</p>
        </div>
        <div className="flex gap-2">
          {['All', 'Design', 'Code', 'Tutorial'].map((tab, i) => (
            <button
              key={tab}
              className="px-3 py-1.5 text-sm font-medium transition-colors"
              style={{
                backgroundColor: i === 0 ? 'var(--t-primary)' : 'var(--t-muted)',
                color: i === 0 ? 'var(--t-primary-fg)' : 'var(--t-fg)',
                borderRadius: 'var(--t-radius)',
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Featured post */}
      <div
        className="flex gap-6 p-6 mb-6 overflow-hidden"
        style={{
          backgroundColor: 'var(--t-card)',
          border: `var(--t-border-width) solid var(--t-border)`,
          borderRadius: 'var(--t-radius)',
          boxShadow: 'var(--t-shadow)',
        }}
      >
        <div
          className="w-64 h-48 flex-shrink-0 overflow-hidden"
          style={{ borderRadius: 'var(--t-radius)' }}
        >
          <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <span
              className="text-[10px] px-2 py-0.5 font-bold uppercase"
              style={{ backgroundColor: 'var(--t-accent)', color: 'var(--t-accent-fg)', borderRadius: 'var(--t-radius)' }}
            >
              Featured
            </span>
            <h2 className="text-xl font-bold mt-2 mb-2" style={{ fontFamily: 'var(--t-font-heading)' }}>
              {featuredPost.title}
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--t-muted-fg)' }}>
              {featuredPost.excerpt}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs" style={{ color: 'var(--t-muted-fg)' }}>
              <span className="flex items-center gap-1"><User size={12} /> {featuredPost.author}</span>
              <span className="flex items-center gap-1"><Clock size={12} /> {featuredPost.readTime}</span>
            </div>
            <button className="flex items-center gap-1 text-sm font-medium" style={{ color: 'var(--t-primary)' }}>
              Read More <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Posts grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post, i) => (
          <div
            key={i}
            className="overflow-hidden transition-all hover:scale-[1.01]"
            style={{
              backgroundColor: 'var(--t-card)',
              border: `var(--t-border-width) solid var(--t-border)`,
              borderRadius: 'var(--t-radius)',
              boxShadow: 'var(--t-shadow)',
            }}
          >
            <div className="h-36 overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <span
                className="text-[10px] px-2 py-0.5 font-medium"
                style={{
                  backgroundColor: 'var(--t-secondary)',
                  color: 'var(--t-secondary-fg)',
                  borderRadius: 'var(--t-radius)',
                }}
              >
                {post.category}
              </span>
              <h3 className="text-sm font-bold mt-2 mb-1" style={{ fontFamily: 'var(--t-font-heading)' }}>
                {post.title}
              </h3>
              <p className="text-xs leading-relaxed mb-3" style={{ color: 'var(--t-muted-fg)' }}>
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[10px]" style={{ color: 'var(--t-muted-fg)' }}>
                  <span>{post.author}</span>
                  <span>&middot;</span>
                  <span>{post.readTime}</span>
                </div>
                <div className="flex gap-1.5">
                  <button className="hover:opacity-70"><Bookmark size={14} style={{ color: 'var(--t-muted-fg)' }} /></button>
                  <button className="hover:opacity-70"><Share2 size={14} style={{ color: 'var(--t-muted-fg)' }} /></button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
