import React from 'react';
import { HERO_STATS } from '@/shared/constants';

const Hero: React.FC = () => {
  // Generate curve paths for the background
  const curves = Array.from({ length: 12 }).map((_, i) => {
    // Creating a more flowing, parallel wave pattern similar to the reference image
    const yStart = 200 + i * 35;
    const cp1Y = 400 + i * 45;
    const cp2Y = 100 + i * 25;
    const yEnd = -100 + i * 30;
    
    return (
      <path 
        key={i}
        d={`M-100 ${yStart} C 300 ${cp1Y} 900 ${cp2Y} 1600 ${yEnd}`} 
        stroke="rgba(255, 255, 255, 0.15)" 
        strokeWidth="1.2"
        fill="none"
      />
    );
  });

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden bg-sec-main">
      {/* Background Elements - Purple Wave Theme */}
      <div className="absolute inset-0 z-0 bg-sec-main">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#312e81] via-[#1e1b4b] to-[#0f0e24] opacity-95"></div>
        
        {/* SVG Waves */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none" 
          preserveAspectRatio="none" 
          viewBox="0 0 1440 800" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {curves}
        </svg>

        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        
        {/* Terminal Badge */}
        <div className="inline-block mb-8">
           <div className="flex items-center gap-2 px-4 py-2 bg-indigo-950/50 border border-cyan-500/30 rounded-full font-mono text-sm text-cyan-400 shadow-lg backdrop-blur-sm">
             <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
             <span>{'>'} root@tkcyber:~$ ./init_security.sh</span>
           </div>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-xl">
          Information <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Security</span>
        </h1>

        {/* Subtext */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-indigo-200/80 mb-10 leading-relaxed font-light">
          Chia sẻ kiến thức chuyên sâu về <span className="text-cyan-400 font-medium">Offensive Security</span>, <span className="text-purple-400 font-medium">SOC</span>, <span className="text-cyan-400 font-medium">GRC</span> và <span className="text-purple-400 font-medium">AI Security</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a href="/blog" className="px-8 py-3.5 bg-cyan-400 text-indigo-950 font-bold rounded-full hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.4)] flex items-center gap-2">
            Khám phá Blog
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <a href="/#topics" className="px-8 py-3.5 border border-white/20 text-white rounded-full hover:bg-white/10 transition-all duration-300 font-mono bg-white/5 backdrop-blur-sm">
            Xem Chủ đề
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 md:gap-24 border-t border-white/10 pt-10 max-w-4xl mx-auto">
          {HERO_STATS.map((stat, index) => (
            <div key={index} className="text-center group cursor-default">
              <div className={`text-3xl md:text-4xl font-bold mb-1 ${index % 2 === 0 ? 'text-cyan-400' : 'text-purple-500'}`}>{stat.value}</div>
              <div className="text-sm md:text-base text-indigo-300/60 font-mono uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

