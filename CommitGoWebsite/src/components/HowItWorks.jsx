const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
            『不鸽』如何运作？
          </h2>
          <p className="text-xl text-gray-600">
            我们的创新学习-娱乐兑换机制，让学习与娱乐达到完美平衡
          </p>
        </div>
        
        {/* For Students Section */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="bg-purple-600 text-white text-xl font-bold py-2 px-6 rounded-full mb-6 md:mb-0">
              学生端
            </div>
            <div className="md:ml-8 h-0.5 flex-grow bg-gradient-to-r from-purple-600 to-transparent"></div>
          </div>
          
          <div className="flex flex-col gap-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-purple-50 rounded-2xl p-4 flex flex-col items-center">
                <img 
                  src="/uploads/stu1.png" 
                  alt="学生主页面" 
                  className="w-full h-auto rounded-lg shadow-md mb-3"
                />
                <p className="text-sm text-gray-600 text-center">个人学习主页</p>
              </div>
              <div className="bg-purple-50 rounded-2xl p-4 flex flex-col items-center">
                <img 
                  src="/uploads/stu2.png" 
                  alt="任务列表" 
                  className="w-full h-auto rounded-lg shadow-md mb-3"
                />
                <p className="text-sm text-gray-600 text-center">任务列表管理</p>
              </div>
              <div className="bg-purple-50 rounded-2xl p-4 flex flex-col items-center">
                <img 
                  src="/uploads/stu3.png" 
                  alt="专注配置" 
                  className="w-full h-auto rounded-lg shadow-md mb-3"
                />
                <p className="text-sm text-gray-600 text-center">专注配置界面</p>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                专注学习，赢取奖励
              </h3>
            </div>
            
            <div className="flex flex-col justify-center">
              <ul className="space-y-6">
                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">任务管理</h4>
                    <p className="text-gray-600">查看并管理自建和监护人指派的学习任务，清晰掌握学习进度</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">开始专注</h4>
                    <p className="text-gray-600">进入专注学习模式，系统会自动记录学习时间并阻止分心应用</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">专注配置</h4>
                    <p className="text-gray-600">自定义黑白名单应用，设置个性化的学习-娱乐兑换规则</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">获取奖励</h4>
                    <p className="text-gray-600">完成学习任务后获得相应的娱乐时间和成就徽章，享受学习的成果</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* For Parents Section */}
        <div>
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="bg-blue-600 text-white text-xl font-bold py-2 px-6 rounded-full mb-6 md:mb-0">
              家长端
            </div>
            <div className="md:ml-8 h-0.5 flex-grow bg-gradient-to-r from-blue-600 to-transparent"></div>
          </div>
          
          <div className="flex flex-col gap-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-2xl p-4 flex flex-col items-center">
                <img 
                  src="/uploads/parent1.png" 
                  alt="家长概览" 
                  className="w-full h-auto rounded-lg shadow-md mb-3"
                />
                <p className="text-sm text-gray-600 text-center">学习概况监控</p>
              </div>
              <div className="bg-blue-50 rounded-2xl p-4 flex flex-col items-center">
                <img 
                  src="/uploads/parent2.png" 
                  alt="指派任务" 
                  className="w-full h-auto rounded-lg shadow-md mb-3"
                />
                <p className="text-sm text-gray-600 text-center">指派新任务</p>
              </div>
              <div className="bg-blue-50 rounded-2xl p-4 flex flex-col items-center">
                <img 
                  src="/uploads/parent3.png" 
                  alt="管理奖励" 
                  className="w-full h-auto rounded-lg shadow-md mb-3"
                />
                <p className="text-sm text-gray-600 text-center">奖励管理系统</p>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                积极引导，轻松监护
              </h3>
            </div>
            
            <div className="flex flex-col justify-center">
              <ul className="space-y-6">
                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">学习概况</h4>
                    <p className="text-gray-600">直观了解孩子的学习进度、任务完成情况和专注时长统计</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">指派新任务</h4>
                    <p className="text-gray-600">创建并指派定制化的学习任务给孩子，培养责任感和目标意识</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">设置奖励</h4>
                    <p className="text-gray-600">设定个性化的娱乐奖励，将孩子喜爱的活动转化为学习动力</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">查看详细报告</h4>
                    <p className="text-gray-600">分析孩子的学习数据和统计，科学评估学习效果和习惯养成</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;