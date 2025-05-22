const Advantages = () => {
  return (
    <section id="advantages" className="py-20 bg-gradient-to-b from-white to-purple-50 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
            『不鸽』的独特优势
          </h2>
          <p className="text-xl text-gray-600">
            我们的设计理念是将学习与娱乐有机结合，让效率与乐趣并存
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-purple-600">
            <div className="flex justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">创新的学习-娱乐兑换机制</h3>
            <p className="text-gray-600 text-center">
              学习时间直接转化为娱乐时长，让专注学习拥有实质奖励，建立正向激励循环
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-blue-600">
            <div className="flex justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">正向激励，告别强制</h3>
            <p className="text-gray-600 text-center">
              摒弃传统限制和惩罚模式，培养学生内在学习动力，形成自律学习习惯
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-green-600">
            <div className="flex justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">分年龄段设计</h3>
            <p className="text-gray-600 text-center">
              针对不同K12阶段学生特点定制功能，小学、初中、高中均有专属设计
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-yellow-600">
            <div className="flex justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">亲子互动新模式</h3>
            <p className="text-gray-600 text-center">
              改变传统监管方式，构建家长与孩子之间的积极互动，共同成长
            </p>
          </div>
        </div>
        
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="bg-purple-100 rounded-full w-32 h-32 flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                隐私与安全保障
              </h3>
              <p className="text-gray-600 mb-4">
                『不鸽』严格保护用户数据安全和隐私。我们采用业界标准的加密技术，确保您和孩子的信息不会被未授权访问。学习记录和个人信息仅限于家长和孩子本人查看。
              </p>
              <p className="text-gray-600">
                我们不会将用户数据用于任何商业目的，也不会与第三方共享。让您和孩子能够在安全的环境中专注学习。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;