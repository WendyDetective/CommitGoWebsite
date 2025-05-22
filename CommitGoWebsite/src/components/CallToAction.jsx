const CallToAction = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-600 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-400 rounded-full opacity-20 -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-800 rounded-full opacity-20 -ml-20 -mb-20"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            立即下载『不鸽』，开启高效学习新旅程！
          </h2>
          <p className="text-xl text-purple-100 mb-10">
            加入成千上万的学生和家长，体验创新的学习方式，让学习更高效、更轻松、更有趣！
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-white hover:bg-gray-100 text-purple-600 font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>App Store 下载</span>
            </button>
            <button className="bg-white hover:bg-gray-100 text-purple-600 font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
              </svg>
              <span>Google Play 下载</span>
            </button>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="bg-purple-700 bg-opacity-50 rounded-lg px-4 py-2 text-center">
              <p className="text-white">扫描二维码下载</p>
              <div className="w-24 h-24 bg-white mt-2 mx-auto"></div>
            </div>
            <div className="bg-purple-700 bg-opacity-50 rounded-lg px-4 py-2 text-center">
              <p className="text-white">加入官方社群</p>
              <div className="w-24 h-24 bg-white mt-2 mx-auto"></div>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-purple-500">
            <p className="text-purple-200">还有疑问？联系我们的客服团队</p>
            <a href="mailto:support@commitgo.com" className="text-white font-medium hover:underline">support@commitgo.com</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;