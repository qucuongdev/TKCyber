'use client';

import { useEffect, useState } from 'react';

interface ViewCounterProps {
  slug: string;
  increment?: boolean;
}

export default function ViewCounter({ slug, increment = true }: ViewCounterProps) {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    // Increment view
    if (increment) {
      fetch(`/api/views/${slug}`, { method: 'POST' })
        .then(res => res.json())
        .then(data => setViews(data.views))
        .catch(() => setViews(null));
    } else {
      // Just get view count
      fetch(`/api/views/${slug}`)
        .then(res => res.json())
        .then(data => setViews(data.views))
        .catch(() => setViews(null));
    }
  }, [slug, increment]);

  if (views === null) {
    return (
      <div className="flex items-center gap-2 text-indigo-400/60 text-sm font-mono">
        <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 text-indigo-400 text-sm font-mono">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
      <span>{views.toLocaleString('vi-VN')} lượt xem</span>
    </div>
  );
}


