
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* 배경 블러 오브젝트 */}
      <div className="absolute w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-30 top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-30 bottom-10 right-10"></div>

      {/* 카드 */}
      <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-8 max-w-4xl w-full grid md:grid-cols-2 gap-8 transition transform hover:-translate-y-2 hover:shadow-2xl">
        
        {/* 사진 */}
        <div className="flex justify-center items-center">
          <img
            src="/me.jpeg"
            className="rounded-2xl shadow-lg w-full object-cover transition duration-500 hover:scale-105 hover:rotate-1"
          />
        </div>

        {/* 소개 */}
        <div className="flex flex-col justify-center">
          
          {/* 이름 */}
          <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Bunn
          </h1>

          {/* 태그 */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-blue-100 rounded-full text-sm">ENFJ</span>
            <span className="px-3 py-1 bg-purple-100 rounded-full text-sm">Department of Artificial Intelligence Software 24</span>
          </div>

          {/* 소개 텍스트 */}
          <div className="space-y-2 text-gray-700 text-sm leading-relaxed">
            <p>• AI / 기획 / 개발 / 디자인 이것저것~~..</p>
            <p>• AI솔루션 스타트업 기획·마케팅 인턴 (25.07-08)</p>
            <p>• IT콘텐츠 스타트업 기획·디자인 인턴 (26.01-02)</p>
            <p>• 무조건 불러내는 법 : 1. 드라이브 가자고 하기 2. 롤 하자고 하기</p>
            <p>• 중앙스트릿댄스동아리 FLAVOR 코레오 담당자 💃</p>
          </div>

          {/* 버튼 영역 */}
          <div className="mt-6 flex gap-3">
            
            {/* GitHub */}
            <a
              href="https://github.com/bunny-97"
              target="_blank"
              className="px-5 py-2 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition"
            >
              GitHub →
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/bunn9y7"
              target="_blank"
              className="px-5 py-2 bg-gradient-to-r from-pink-400 to-purple-500 text-white rounded-xl shadow hover:opacity-90 transition"
            >
              Instagram →
            </a>

          </div>
        </div>

      </div>
    </main>
  );
}