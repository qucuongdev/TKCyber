import React from 'react';
import Link from 'next/link';
import { PostMetadata } from '@/shared/lib/mdx';

interface ArticleListProps {
  posts: PostMetadata[];
}

const ArticleList: React.FC<ArticleListProps> = ({ posts }) => {

  return (
    <section className="py-24 relative z-10 bg-sec-main border-t border-indigo-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Threat <span className="text-indigo-400">Intel</span></h2>
            <p className="text-indigo-300/60">Bài viết mới nhất từ SOC.</p>
          </div>
          <Link href="/blog" className="hidden md:flex items-center gap-2 text-indigo-300 hover:text-white transition-colors font-mono text-sm uppercase">
            Xem tất cả <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="flex flex-col bg-sec-card/40 backdrop-blur-sm border border-indigo-800/50 rounded-lg overflow-hidden hover:border-indigo-400/50 transition-all duration-300 group hover:shadow-lg hover:shadow-indigo-500/10 h-full">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`px-2 py-1 text-xs font-bold rounded uppercase tracking-wider
                      ${post.category === 'AI Security' ? 'bg-pink-900/30 text-pink-300' : 
                        post.category === 'SOC' ? 'bg-indigo-900/40 text-indigo-300' : 
                        post.category === 'Offensive' ? 'bg-red-900/30 text-red-300' :
                        'bg-blue-900/30 text-blue-300'}`}>
                      {post.category}
                    </span>
                    <span className="text-indigo-400/60 text-xs font-mono">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-indigo-200/60 text-sm mb-4 flex-grow line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-indigo-900/50 mt-auto">
                     <span className="text-indigo-400/60 text-xs font-mono">
                       {new Date(post.date).toLocaleDateString('vi-VN', { month: 'short', day: 'numeric' })}
                     </span>
                     <div className="flex gap-2">
                       {post.tags.slice(0, 2).map(tag => (
                         <span key={tag} className="text-xs text-indigo-400/60">#{tag}</span>
                       ))}
                     </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleList;

