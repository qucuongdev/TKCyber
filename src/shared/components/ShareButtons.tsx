'use client';

import { useState } from 'react';

interface ShareButtonsProps {
  title: string;
  slug: string;
}

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const url = typeof window !== 'undefined' ? window.location.href : '';

  const handleShare = (platform: string) => {
    const text = `Đọc bài: ${title}`;
    
    switch (platform) {
      case 'twitter':
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
          '_blank'
        );
        break;
      case 'facebook':
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
          '_blank'
        );
        break;
      case 'linkedin':
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
          '_blank'
        );
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        break;
    }
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-indigo-400 font-mono">Chia sẻ:</span>
      
      {/* Twitter */}
      <button
        onClick={() => handleShare('twitter')}
        className="p-3 bg-indigo-900/50 hover:bg-indigo-800 rounded-lg transition-all border border-indigo-700 group"
        aria-label="Chia sẻ lên Twitter"
        title="Twitter"
      >
        <svg className="w-5 h-5 text-indigo-300 group-hover:text-cyan-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
        </svg>
      </button>
      
      {/* Facebook */}
      <button
        onClick={() => handleShare('facebook')}
        className="p-3 bg-indigo-900/50 hover:bg-indigo-800 rounded-lg transition-all border border-indigo-700 group"
        aria-label="Chia sẻ lên Facebook"
        title="Facebook"
      >
        <svg className="w-5 h-5 text-indigo-300 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      </button>
      
      {/* LinkedIn */}
      <button
        onClick={() => handleShare('linkedin')}
        className="p-3 bg-indigo-900/50 hover:bg-indigo-800 rounded-lg transition-all border border-indigo-700 group"
        aria-label="Chia sẻ lên LinkedIn"
        title="LinkedIn"
      >
        <svg className="w-5 h-5 text-indigo-300 group-hover:text-blue-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </button>
      
      {/* Copy Link */}
      <button
        onClick={() => handleShare('copy')}
        className={`p-3 rounded-lg transition-all border group ${
          copied
            ? 'bg-green-500/20 border-green-500 text-green-300'
            : 'bg-indigo-900/50 hover:bg-indigo-800 border-indigo-700'
        }`}
        aria-label="Copy link"
        title={copied ? 'Đã copy!' : 'Copy link'}
      >
        {copied ? (
          <svg className="w-5 h-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-indigo-300 group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        )}
      </button>
    </div>
  );
}


