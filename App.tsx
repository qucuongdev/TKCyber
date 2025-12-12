import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ArticleList from './components/ArticleList';
import TopicCard from './components/TopicCard';
import Footer from './components/Footer';
import { SECURITY_TOPICS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-sec-main font-sans text-indigo-100 selection:bg-indigo-400 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Topics Section */}
        <section id="topics" className="py-20 bg-sec-main relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="font-mono text-indigo-300 text-sm tracking-wider uppercase mb-2 block">Core Capabilities</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Security Operations</h2>
              <p className="mt-4 text-indigo-200/60 max-w-2xl mx-auto">
                Explore our key focus areas.
                <span className="text-indigo-300 ml-1">Powered by AI Analysis.</span>
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SECURITY_TOPICS.map((topic) => (
                <TopicCard key={topic.id} topic={topic} />
              ))}
            </div>
          </div>
        </section>

        <ArticleList />
      </main>

      <Footer />
    </div>
  );
};

export default App;