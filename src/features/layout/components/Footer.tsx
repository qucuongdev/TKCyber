import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="font-mono text-xl font-bold text-white">
            TK<span className="text-gray-600">Cyber</span>
          </span>
          <p className="text-gray-500 text-sm mt-2">© 2024 TKCyber. All rights reserved.</p>
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="text-gray-500 hover:text-sec-accent transition-colors">Twitter</a>
          <a href="#" className="text-gray-500 hover:text-sec-accent transition-colors">GitHub</a>
          <a href="#" className="text-gray-500 hover:text-sec-accent transition-colors">RSS</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


