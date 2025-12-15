'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import { PostMetadata } from '@/shared/lib/mdx';

type CategoryType = 'All' | 'SOC' | 'Offensive' | 'GRC' | 'Products' | 'AI Security';

interface BlogListProps {
  posts: PostMetadata[];
}

export default function BlogList({ posts }: BlogListProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter posts theo category và search
  const filteredPosts = useMemo(() => {
    let filtered = posts;

    // Filter theo category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Filter theo search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [posts, selectedCategory, searchQuery]);

  const categories: CategoryType[] = ['All', 'SOC', 'Offensive', 'GRC', 'Products', 'AI Security'];
  
  // Đếm số posts per category
  const categoryCount = (category: CategoryType) => {
    if (category === 'All') return posts.length;
    return posts.filter(post => post.category === category).length;
  };

  return (
    <>
      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Tìm kiếm bài viết... (thử 'SIEM', 'phishing', 'automation')"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-4 bg-indigo-950/50 border border-indigo-700 rounded-lg text-white placeholder-indigo-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all font-mono text-sm"
          />
          <svg 
            className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-indigo-400"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        {searchQuery && (
          <p className="mt-2 text-sm text-indigo-300 font-mono">
            Tìm thấy {filteredPosts.length} bài viết cho "{searchQuery}"
          </p>
        )}
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg transition-all font-mono text-sm flex items-center gap-2 ${
              selectedCategory === category
                ? 'bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 shadow-lg shadow-cyan-500/20'
                : 'bg-indigo-900/50 border border-indigo-700 text-indigo-300 hover:bg-indigo-800'
            }`}
          >
            {category}
            <span className={`px-2 py-0.5 rounded-full text-xs ${
              selectedCategory === category
                ? 'bg-cyan-500/30 text-cyan-200'
                : 'bg-indigo-800 text-indigo-400'
            }`}>
              {categoryCount(category)}
            </span>
          </button>
        ))}
      </div>

      {/* Posts Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group"
          >
            <article className="flex flex-col h-full bg-sec-card/40 backdrop-blur-sm border border-indigo-800/50 rounded-lg overflow-hidden hover:border-indigo-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 hover:transform hover:-translate-y-1">
              <div className="p-6 flex flex-col h-full">
                {/* Icon & Category */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{post.icon}</span>
                  <span className={`px-2 py-1 text-xs font-bold rounded uppercase tracking-wider
                    ${post.category === 'AI Security' ? 'bg-pink-900/30 text-pink-300' : 
                      post.category === 'SOC' ? 'bg-indigo-900/40 text-indigo-300' : 
                      post.category === 'Offensive' ? 'bg-red-900/30 text-red-300' :
                      'bg-blue-900/30 text-blue-300'}`}>
                    {post.category}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-indigo-200/60 text-sm mb-4 flex-grow line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between pt-4 border-t border-indigo-900/50 mt-auto">
                  <div className="flex items-center gap-4 text-xs text-indigo-400/60 font-mono">
                    <span>{new Date(post.date).toLocaleDateString('vi-VN', { month: 'short', day: 'numeric' })}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <div className="text-cyan-400 group-hover:translate-x-1 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {post.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-xs text-indigo-400/60 font-mono">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* Empty State */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold text-white mb-2">
            {searchQuery ? 'Không tìm thấy kết quả' : 'Chưa có bài viết trong danh mục này'}
          </h3>
          <p className="text-indigo-300/60 mb-4">
            {searchQuery 
              ? `Thử tìm kiếm từ khóa khác hoặc xem tất cả bài viết.`
              : 'Chúng tôi sẽ sớm cập nhật nội dung mới!'}
          </p>
          {(searchQuery || selectedCategory !== 'All') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-6 py-3 bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 rounded-lg hover:bg-cyan-500/30 transition-all"
            >
              Xóa bộ lọc
            </button>
          )}
        </div>
      )}
    </>
  );
}
