import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getAllSlugs, getAllPosts } from '@/shared/lib/mdx';
import { useMDXComponents } from '@/shared/components/mdx-components';
import ReadingProgress from '@/shared/components/ReadingProgress';
import RelatedPosts from '@/shared/components/RelatedPosts';
import ShareButtons from '@/shared/components/ShareButtons';
import ViewCounter from '@/shared/components/ViewCounter';
import type { Metadata } from 'next';
import Link from 'next/link';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import 'highlight.js/styles/tokyo-night-dark.css';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | TKCyber`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const components = useMDXComponents({});

  return (
    <div className="min-h-screen bg-sec-main pt-24 pb-16">
      {/* Reading Progress Bar */}
      <ReadingProgress />
      
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-indigo-300 hover:text-cyan-400 mb-8 transition-colors font-mono text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Quay lại Blog
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">{post.icon}</span>
            <span className={`px-3 py-1 text-xs font-bold rounded uppercase tracking-wider
              ${post.category === 'AI Security' ? 'bg-pink-900/30 text-pink-300 border border-pink-800' : 
                post.category === 'SOC' ? 'bg-indigo-900/40 text-indigo-300 border border-indigo-800' : 
                post.category === 'Offensive' ? 'bg-red-900/30 text-red-300 border border-red-800' :
                'bg-blue-900/30 text-blue-300 border border-blue-800'}`}>
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-indigo-200/80 mb-6 leading-relaxed">
            {post.excerpt}
          </p>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-indigo-400 font-mono border-t border-b border-indigo-800 py-4">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('vi-VN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{post.readTime}</span>
            </div>
            <ViewCounter slug={slug} increment={true} />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-indigo-950/50 border border-indigo-800 text-indigo-300 rounded-full text-xs font-mono"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-invert prose-indigo max-w-none">
          <div className="bg-sec-card/20 border border-indigo-800/50 rounded-xl p-8 md:p-12">
            <MDXRemote
              source={post.content}
              components={components}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [rehypeHighlight, rehypeSlug],
                },
              }}
            />
          </div>
        </div>

        {/* Related Posts */}
        <RelatedPosts 
          currentPost={post} 
          allPosts={allPosts}
          maxPosts={3}
        />

        {/* Footer - Share */}
        <footer className="mt-12 pt-8 border-t border-indigo-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-900/50 hover:bg-indigo-800 text-white rounded-lg transition-all border border-indigo-700"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Tất cả bài viết
            </Link>
            
            <ShareButtons title={post.title} slug={slug} />
          </div>
        </footer>
      </article>
    </div>
  );
}

