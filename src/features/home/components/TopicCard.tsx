'use client';

import React, { useState } from 'react';
import { Topic, LoadingState } from '@/shared/types';
import { explainSecurityConcept } from '@/shared/services/geminiService';

interface TopicCardProps {
  topic: Topic;
}

const TopicCard: React.FC<TopicCardProps> = ({ topic }) => {
  const [explanation, setExplanation] = useState<string | null>(null);
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.IDLE);

  const handleExplain = async () => {
    if (loadingState === LoadingState.LOADING) return;
    
    setLoadingState(LoadingState.LOADING);
    const result = await explainSecurityConcept(topic.title);
    setExplanation(result);
    setLoadingState(LoadingState.SUCCESS);
  };

  return (
    <div className="relative group bg-sec-card/40 backdrop-blur-sm border border-indigo-800/50 hover:border-indigo-400/50 rounded-xl p-6 transition-all duration-300 hover:shadow-[0_0_20px_rgba(129,140,248,0.15)] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-indigo-500/20 rounded-full blur-2xl group-hover:bg-indigo-400/20 transition-all duration-500"></div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="text-4xl">{topic.icon}</div>
          <div className="text-xs font-mono text-indigo-400 border border-indigo-800 px-2 py-1 rounded">
             ID_{topic.id.toUpperCase()}
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2">{topic.title}</h3>
        <p className="text-indigo-200/70 text-sm font-mono mb-4">{topic.shortDescription}</p>
        
        <div className="min-h-[80px]">
           {explanation ? (
             <div className="text-indigo-100 text-sm leading-relaxed animate-fade-in bg-indigo-950/60 p-3 rounded border-l-2 border-indigo-400">
                <span className="text-indigo-400 font-mono text-xs block mb-1">{'>'} AI_ANALYSIS_OUTPUT:</span>
                <div dangerouslySetInnerHTML={{ __html: explanation.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }} />
             </div>
           ) : (
             <p className="text-indigo-200/50 text-sm line-clamp-3">{topic.fullDescription}</p>
           )}
        </div>

        <button 
          onClick={handleExplain}
          disabled={loadingState === LoadingState.LOADING}
          className="mt-6 w-full py-2 bg-indigo-950/80 hover:bg-indigo-500 hover:text-white text-indigo-300 text-sm rounded flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed group-hover:border-indigo-500/30 border border-indigo-900"
        >
          {loadingState === LoadingState.LOADING ? (
            <>
              <svg className="animate-spin h-4 w-4 text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>ANALYZING...</span>
            </>
          ) : (
            <>
              <svg className="w-4 h-4 text-indigo-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>{explanation ? 'REFRESH INTEL' : 'EXPLAIN WITH AI'}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default TopicCard;


