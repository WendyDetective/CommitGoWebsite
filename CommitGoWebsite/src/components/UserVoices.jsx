const UserVoices = () => {
  return (
    <section id="voices" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
            用户心声
          </h2>
          <p className="text-xl text-gray-600">
            听听我们的用户怎么说
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Student Testimonial */}
          <div className="bg-white rounded-2xl p-8 shadow-lg relative">
            <div className="absolute -top-5 -left-5 bg-yellow-400 rounded-full w-10 h-10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <div className="mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="36" className="fill-purple-200">
                <path d="M13.415.43c-2.523-.21-4.694.685-6.51 2.804C4.857 5.792 3.926 9.01 3.945 13.1c.02 6.696 3.582 13.477 8.476 16.072 1.286.654 3.764 1.504 4.735 1.41 1.92-.188 2.421-3.987.76-4.637l-.441-.159c-1.97-.753-3.495-2.535-4.375-4.103-1.527-2.715-1.726-5.767-1.726-5.767 2.621.578 4.758-.652 6.357-2.243 2.099-2.08 2.86-5.204 2.023-8.231-.8-2.922-2.48-4.801-6.338-5.021z"/>
                <path d="M33.938.43c-2.523-.21-4.694.685-6.51 2.804-2.047 2.557-2.978 5.775-2.959 9.865.02 6.696 3.582 13.477 8.476 16.072 1.286.654 3.764 1.504 4.735 1.41 1.92-.188 2.421-3.987.76-4.637l-.441-.159c-1.97-.753-3.494-2.535-4.375-4.103-1.527-2.715-1.726-5.767-1.726-5.767 2.621.578 4.758-.652 6.357-2.243 2.099-2.08 2.86-5.204 2.023-8.231-.8-2.922-2.48-4.801-6.338-5.021h-.002z"/>
              </svg>
            </div>
            <p className="text-gray-600 mb-6">
              作为一名初中生，我之前总是忍不住玩手机游戏，学习效率很低。使用『不鸽』后，我能通过专注学习获得游戏时间，这样既满足了我玩游戏的需求，又大大提高了学习效率。现在我反而期待学习时间，因为知道努力后有奖励！
            </p>
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                <span className="text-gray-600 font-bold">小明</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-800">王小明</h4>
                <p className="text-sm text-gray-500">初二学生</p>
              </div>
            </div>
          </div>
          
          {/* Parent Testimonial */}
          <div className="bg-white rounded-2xl p-8 shadow-lg relative">
            <div className="absolute -top-5 -left-5 bg-purple-600 rounded-full w-10 h-10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <div className="mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="36" className="fill-purple-200">
                <path d="M13.415.43c-2.523-.21-4.694.685-6.51 2.804C4.857 5.792 3.926 9.01 3.945 13.1c.02 6.696 3.582 13.477 8.476 16.072 1.286.654 3.764 1.504 4.735 1.41 1.92-.188 2.421-3.987.76-4.637l-.441-.159c-1.97-.753-3.495-2.535-4.375-4.103-1.527-2.715-1.726-5.767-1.726-5.767 2.621.578 4.758-.652 6.357-2.243 2.099-2.08 2.86-5.204 2.023-8.231-.8-2.922-2.48-4.801-6.338-5.021z"/>
                <path d="M33.938.43c-2.523-.21-4.694.685-6.51 2.804-2.047 2.557-2.978 5.775-2.959 9.865.02 6.696 3.582 13.477 8.476 16.072 1.286.654 3.764 1.504 4.735 1.41 1.92-.188 2.421-3.987.76-4.637l-.441-.159c-1.97-.753-3.494-2.535-4.375-4.103-1.527-2.715-1.726-5.767-1.726-5.767 2.621.578 4.758-.652 6.357-2.243 2.099-2.08 2.86-5.204 2.023-8.231-.8-2.922-2.48-4.801-6.338-5.021h-.002z"/>
              </svg>
            </div>
            <p className="text-gray-600 mb-6">
              作为一位家长，我以前经常因为孩子沉迷手机而苦恼，总是采用强制限制的方式，结果常常引起争执。使用『不鸽』后，我可以设置合理的奖励机制，孩子反而更加自觉学习了。最重要的是，我们之间的关系也变得更加和谐。
            </p>
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                <span className="text-gray-600 font-bold">李女士</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-800">李女士</h4>
                <p className="text-sm text-gray-500">初中生家长</p>
              </div>
            </div>
          </div>
          
          {/* Teacher Testimonial */}
          <div className="bg-white rounded-2xl p-8 shadow-lg relative">
            <div className="absolute -top-5 -left-5 bg-green-600 rounded-full w-10 h-10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <div className="mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="36" className="fill-purple-200">
                <path d="M13.415.43c-2.523-.21-4.694.685-6.51 2.804C4.857 5.792 3.926 9.01 3.945 13.1c.02 6.696 3.582 13.477 8.476 16.072 1.286.654 3.764 1.504 4.735 1.41 1.92-.188 2.421-3.987.76-4.637l-.441-.159c-1.97-.753-3.495-2.535-4.375-4.103-1.527-2.715-1.726-5.767-1.726-5.767 2.621.578 4.758-.652 6.357-2.243 2.099-2.08 2.86-5.204 2.023-8.231-.8-2.922-2.48-4.801-6.338-5.021z"/>
                <path d="M33.938.43c-2.523-.21-4.694.685-6.51 2.804-2.047 2.557-2.978 5.775-2.959 9.865.02 6.696 3.582 13.477 8.476 16.072 1.286.654 3.764 1.504 4.735 1.41 1.92-.188 2.421-3.987.76-4.637l-.441-.159c-1.97-.753-3.494-2.535-4.375-4.103-1.527-2.715-1.726-5.767-1.726-5.767 2.621.578 4.758-.652 6.357-2.243 2.099-2.08 2.86-5.204 2.023-8.231-.8-2.922-2.48-4.801-6.338-5.021h-.002z"/>
              </svg>
            </div>
            <p className="text-gray-600 mb-6">
              作为一名班主任，我一直在寻找帮助学生提高学习专注力的方法。『不鸽』APP正是我们需要的工具，我向班上的学生和家长推荐使用后，明显看到学生们的学习态度变得积极主动，课堂参与度也提高了不少。
            </p>
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                <span className="text-gray-600 font-bold">张老师</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-800">张老师</h4>
                <p className="text-sm text-gray-500">初中数学教师</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-purple-600 font-bold text-lg mb-4">来自全国各地的用户反馈</p>
          <div className="flex justify-center items-center flex-wrap gap-4">
            <div className="bg-white rounded-full py-2 px-4 shadow">
              <span className="text-gray-700">提高学习效率 <span className="text-green-600 font-bold">+82%</span></span>
            </div>
            <div className="bg-white rounded-full py-2 px-4 shadow">
              <span className="text-gray-700">亲子关系改善 <span className="text-green-600 font-bold">+75%</span></span>
            </div>
            <div className="bg-white rounded-full py-2 px-4 shadow">
              <span className="text-gray-700">学习主动性提升 <span className="text-green-600 font-bold">+90%</span></span>
            </div>
            <div className="bg-white rounded-full py-2 px-4 shadow">
              <span className="text-gray-700">推荐给朋友意愿 <span className="text-green-600 font-bold">96%</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserVoices;