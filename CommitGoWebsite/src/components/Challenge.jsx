const Challenge = () => {
  return (
    <section id="features" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
            孩子学习不专注？你是否也遇到这些烦恼？
          </h2>
          <p className="text-xl text-gray-600">
            在数字化时代，K12学生学习专注力正在下降，我们理解您的困扰。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="rounded-full bg-red-100 w-16 h-16 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">注意力分散</h3>
            <p className="text-gray-600">
              手机、平板、电脑带来的各种娱乐应用和社交媒体，使孩子无法保持专注学习。碎片化信息冲击着孩子的专注力。
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="rounded-full bg-yellow-100 w-16 h-16 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">时间管理困难</h3>
            <p className="text-gray-600">
              许多学生缺乏有效的时间管理能力，无法合理规划学习与娱乐时间，导致学习效率低下，甚至经常熬夜学习。
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">亲子关系紧张</h3>
            <p className="text-gray-600">
              家长对孩子使用电子设备的时间和管控方式往往导致争执，强制性的限制难以培养孩子的自律能力，反而产生抵触情绪。
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-2xl font-medium text-gray-700">
            <span className="text-purple-600 font-bold">『不鸽』</span> 提供了一种全新的解决方案
          </p>
          <div className="mt-6 flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-500 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;