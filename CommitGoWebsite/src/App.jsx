import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Challenge from './components/Challenge';
import HowItWorks from './components/HowItWorks';
import Advantages from './components/Advantages';
import UserVoices from './components/UserVoices';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading of assets
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {isLoaded ? (
        <>
          <Header />
          <main className="overflow-x-hidden">
            <Hero />
            <Challenge />
            <HowItWorks />
            <Advantages />
            <UserVoices />
            <CallToAction />
          </main>
          <Footer />
        </>
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-pulse text-purple-600 text-3xl font-bold">载入中...</div>
        </div>
      )}
    </div>
  );
}

export default App;