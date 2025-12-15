'use client';

import { useEffect, useState } from 'react';

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      const scrollableHeight = documentHeight - windowHeight;
      const scrolled = (scrollTop / scrollableHeight) * 100;
      
      setProgress(Math.min(scrolled, 100));
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress(); // Initial calculation
    
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <>
      {/* Progress bar ở top */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-indigo-950/50">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transition-all duration-150 ease-out shadow-lg shadow-cyan-500/50"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      {/* Circular progress indicator (optional - bottom right) */}
      {progress > 10 && (
        <div className="fixed bottom-8 right-8 z-40">
          <div className="relative w-14 h-14">
            {/* Background circle */}
            <svg className="w-14 h-14 transform -rotate-90">
              <circle
                cx="28"
                cy="28"
                r="24"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                className="text-indigo-900/50"
              />
              {/* Progress circle */}
              <circle
                cx="28"
                cy="28"
                r="24"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 24}`}
                strokeDashoffset={`${2 * Math.PI * 24 * (1 - progress / 100)}`}
                className="text-cyan-400 transition-all duration-150"
                strokeLinecap="round"
              />
            </svg>
            
            {/* Percentage text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-bold text-cyan-300">
                {Math.round(progress)}%
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
