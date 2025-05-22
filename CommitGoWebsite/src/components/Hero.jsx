import { useState } from 'react';

const Hero = () => {
  const [isWatchingVideo, setIsWatchingVideo] = useState(false);

  const toggleVideo = () => {
    setIsWatchingVideo(!isWatchingVideo);
  };

  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <div className="max-w-xl">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
                不鸽 <span className="text-purple-600">(CommitGo)</span>: 
                <span className="block mt-2">专注学习，兑换快乐时光！</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                专为K12学生打造，将学习与娱乐巧妙结合，培养自律好习惯。打破传统学习与娱乐的界限，让孩子在自律中成长。
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-full transition-colors duration-300 flex items-center">
                  <span>开启高效学习之旅</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <button 
                  className="border border-gray-300 hover:border-purple-600 text-gray-700 hover:text-purple-600 font-medium py-3 px-6 rounded-full transition-colors duration-300 flex items-center"
                  onClick={toggleVideo}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  <span>观看介绍视频</span>
                </button>
              </div>
              <div className="mt-10 flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="h-8 w-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600">
                      {i}
                    </div>
                  ))}
                </div>
                <p className="ml-4 text-sm text-gray-600">已有 <span className="font-semibold">10,000+</span> 学生正在使用</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="bg-white shadow-xl rounded-2xl p-4 max-w-md mx-auto">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-purple-100 rounded-xl p-4 flex flex-col items-center justify-center aspect-square">
                  <img 
                    src="/uploads/start.png" 
                    alt="开启高效学习之旅" 
                    className="w-full h-auto rounded-lg"
                  />
                  <p className="text-xs text-center mt-2 text-gray-600">开启学习之旅</p>
                </div>
                <div className="bg-yellow-100 rounded-xl p-4 flex flex-col items-center justify-center aspect-square">
                  <img 
                    src="/uploads/register.png" 
                    alt="选择角色" 
                    className="w-full h-auto rounded-lg"
                  />
                  <p className="text-xs text-center mt-2 text-gray-600">选择您的角色</p>
                </div>
                <div className="bg-green-100 rounded-xl p-4 flex flex-col items-center justify-center aspect-square">
                  <img 
                    src="/uploads/stu1.png" 
                    alt="专注学习" 
                    className="w-full h-auto rounded-lg"
                  />
                  <p className="text-xs text-center mt-2 text-gray-600">专注学习模式</p>
                </div>
                <div className="bg-blue-100 rounded-xl p-4 flex flex-col items-center justify-center aspect-square">
                  <img 
                    src="/uploads/parent1.png" 
                    alt="家长监督" 
                    className="w-full h-auto rounded-lg"
                  />
                  <p className="text-xs text-center mt-2 text-gray-600">家长监督模式</p>
                </div>
              </div>
            </div>
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-purple-200 rounded-full opacity-50 -z-10"></div>
            <div className="absolute -left-10 -top-10 w-40 h-40 bg-yellow-200 rounded-full opacity-50 -z-10"></div>
          </div>
        </div>
      </div>
      
      {/* Video Modal */}
      {isWatchingVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={toggleVideo}>
          <div className="relative w-full max-w-4xl mx-4" onClick={e => e.stopPropagation()}>
            <button 
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              onClick={toggleVideo}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="bg-black rounded-lg aspect-video flex items-center justify-center">
              <div className="text-white text-xl">视频介绍内容</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;