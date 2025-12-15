import Link from 'next/link';
import { PostMetadata } from '@/shared/lib/mdx';

interface RelatedPostsProps {
  currentPost: PostMetadata;
  allPosts: PostMetadata[];
  maxPosts?: number;
}

export default function RelatedPosts({ currentPost, allPosts, maxPosts = 3 }: RelatedPostsProps) {
  // Tính điểm liên quan cho mỗi post
  const getRelevanceScore = (post: PostMetadata): number => {
    let score = 0;
    
    // Cùng category = điểm cao
    if (post.category === currentPost.category) {
      score += 10;
    }
    
    // Shared tags
    const sharedTags = post.tags.filter(tag => currentPost.tags.includes(tag));
    score += sharedTags.length * 5;
    
    // Bài gần đây bonus nhẹ
    const daysDiff = Math.abs(
      new Date(post.date).getTime() - new Date(currentPost.date).getTime()
    ) / (1000 * 60 * 60 * 24);
    if (daysDiff < 30) score += 2;
    
    return score;
  };

  // Lấy related posts
  const relatedPosts = allPosts
    .filter(post => post.slug !== currentPost.slug) // Loại bỏ bài hiện tại
    .map(post => ({
      ...post,
      relevanceScore: getRelevanceScore(post)
    }))
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, maxPosts);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 pt-12 border-t border-indigo-800">
      <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        Bài viết liên quan
      </h2>
      
      <div className="grid gap-6 md:grid-cols-3">
        {relatedPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group"
          >
            <article className="bg-sec-card/40 backdrop-blur-sm border border-indigo-800/50 rounded-lg p-6 hover:border-indigo-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 h-full">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{post.icon}</span>
                <span className={`px-2 py-1 text-xs font-bold rounded uppercase tracking-wider
                  ${post.category === 'AI Security' ? 'bg-pink-900/30 text-pink-300' : 
                    post.category === 'SOC' ? 'bg-indigo-900/40 text-indigo-300' : 
                    post.category === 'Offensive' ? 'bg-red-900/30 text-red-300' :
                    'bg-blue-900/30 text-blue-300'}`}>
                  {post.category}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors line-clamp-2">
                {post.title}
              </h3>
              
              <p className="text-indigo-200/60 text-sm line-clamp-2 mb-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-xs text-indigo-400/60 font-mono">
                <span>{post.readTime}</span>
                <svg className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
