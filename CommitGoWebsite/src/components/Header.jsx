import { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="h-10 w-10 bg-purple-600 rounded-full flex items-center justify-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-800">不鸽 <span className="text-sm text-gray-600">CommitGo</span></span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">功能特点</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">工作原理</a>
            <a href="#advantages" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">我们的优势</a>
            <a href="#voices" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">用户心声</a>
          </nav>
          
          <div>
            <button className="hidden md:inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-full transition-colors duration-300">
              开启体验
            </button>
            <button className="md:hidden text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;