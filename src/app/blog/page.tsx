import { getAllPosts } from '@/shared/lib/mdx';
import BlogList from '@/features/blog/components/BlogList';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | TKCyber - InfoSec Knowledge Base',
  description: 'Đọc các bài viết mới nhất về SIEM, XDR, SOAR, Penetration Testing và các chủ đề cybersecurity khác.',
  keywords: ['cybersecurity blog', 'infosec articles', 'SIEM tutorials', 'pentesting guides'],
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-sec-main pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-indigo-950/50 border border-cyan-500/30 rounded-full font-mono text-sm text-cyan-400 shadow-lg backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>{'>'} cd /blog/latest</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Security <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Intel</span>
          </h1>
          
          <p className="text-lg text-indigo-200/80 max-w-2xl mx-auto">
            Tìm hiểu sâu các chủ đề cybersecurity qua các hướng dẫn và tutorial chi tiết.
          </p>
        </div>

        {/* Blog List với Search & Filter */}
        <BlogList posts={posts} />

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-indigo-700 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Cập nhật tin tức</h2>
          <p className="text-indigo-200/80 mb-6 max-w-xl mx-auto">
            Đăng ký nhận bản tin để cập nhật các insights và tutorials mới nhất về cybersecurity.
          </p>
          <div className="flex gap-3 justify-center">
            <input
              type="email"
              placeholder="email@example.com"
              className="px-6 py-3 bg-indigo-950/50 border border-indigo-700 rounded-lg text-white placeholder-indigo-400 focus:outline-none focus:border-cyan-500 transition-colors"
            />
            <button className="px-8 py-3 bg-cyan-400 text-indigo-950 font-bold rounded-lg hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(34,211,238,0.4)]">
              Đăng ký
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

