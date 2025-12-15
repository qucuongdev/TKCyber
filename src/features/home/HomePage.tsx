import React from "react";
import Hero from "./components/Hero";
import ArticleList from "./components/ArticleList";
import TopicCard from "./components/TopicCard";
import { SECURITY_TOPICS } from "@/shared/constants";
import { getAllPosts } from "@/shared/lib/mdx";

const HomePage: React.FC = () => {
  const latestPosts = getAllPosts().slice(0, 3); // Latest 3 posts

  return (
    <main>
      <Hero />

      {/* Topics Section */}
      <section id="topics" className="py-20 bg-sec-main relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-mono text-indigo-300 text-sm tracking-wider uppercase mb-2 block">
              Khả năng Cốt lõi
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Security Operations
            </h2>
            <p className="mt-4 text-indigo-200/60 max-w-2xl mx-auto">
              Khám phá các lĩnh vực trọng tâm của chúng tôi.
              <span className="text-indigo-300 ml-1">
                Tích hợp phân tích AI.
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SECURITY_TOPICS.map((topic) => (
              <TopicCard key={topic.id} topic={topic} />
            ))}
          </div>
        </div>
      </section>

      <ArticleList posts={latestPosts} />
    </main>
  );
};

export default HomePage;
