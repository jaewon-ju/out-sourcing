// MainLayout.tsx
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { useEffect, useState } from "react";
import MovieSlider from "./components/MovieSlider";

function MainLayout() {
  const hoveredPage = useSelector((state: RootState) => state.ui.hoveredPage);
  const [backgroundImage, setBackgroundImage] = useState("default");

  const backgroundMap: Record<string, string> = {
    default: "/images/default.jpg",
    nct: "/images/nct.jpg",
  };

  // hoveredPage가 변경될 때 배경 이미지를 동적으로 설정
  useEffect(() => {
    if (hoveredPage) {
      setBackgroundImage(backgroundMap[hoveredPage] || "none");
    }
  }, [hoveredPage]);

  return (
    <div
      id="top"
      className="min-h-screen w-screen flex flex-col items-center justify-center"
    >
      <div
        className={`
          w-[80vw] min-h-[100vh]
          relative flex flex-col items-center 
          border-1 border-black box-shadow-20px-black-30% overflow-scroll 
          transition-all duration-700 ease-linear
          bg-cover bg-center
        `}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* 상단 네비게이션 바 */}
        <img
          src="/images/topBar.png"
          alt="topbar"
          className="w-full object-contain"
        />

        {/* Hero 콘텐츠 카드 영역 */}
        <div className="w-full flex flex-col items-center">
          <div className="mt-[5vh] flex justify-center items-center gap-[4vw]">
            {/* {["school", "VHS Video", "Retro", "Music"].map((title, i) => ( */}
            {["home", "home", "home", "home"].map((title) => (
              <div className="flex flex-col items-center">
                <img
                  src={`/images/${title}.png`}
                  alt={title}
                  className="h-[4vh] object-contain cursor-pointer hover:scale-120 transition-transform"
                  // onClick={() => navigate("/")}
                />
                <div className="mt-[1vh] font-[Apple] text-black text-[2vh]">
                  Home
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Welcome 영역 및 MovieBox */}
        <div className="relative w-full flex flex-col items-center">
          {/* welcome to Anemoia */}
          <div className="mt-[1vh] w-[90%] h-[15vh] z-10 flex items-center justify-center">
            <div className="flex items-center justify-center gap-[5vw] w-full">
              {/* 왼쪽 이미지 */}
              <img
                src="/images/home2.png"
                alt="left"
                className="h-[13vh] object-contain"
              />

              {/* 텍스트 */}
              <div className=" text-black text-center mt-[1vw]">
                <span className="font-[RobotoItalic] text-[6vh] font-light mr-[1.5vw]">
                  Welcome to
                </span>
                <span className="font-[Snell] text-[10vh]">Anemoia</span>
              </div>

              {/* 오른쪽 이미지 */}
              <img
                src="/images/home2.png"
                alt="right"
                className="h-[13vh] object-contain"
              />
            </div>
          </div>
        </div>

        {/* Anemoia 철학 및 환영 메시지 */}
        <section
          aria-label="Welcome Description"
          className="flex flex-col items-center text-center px-8 mt-[25vh] w-full"
        >
          <p className="text-[2vh]">
            welcome to a place shaped by memories that were never yours. <br />A
            Space where longing drifts untethered - half dream, half deja vu
          </p>
          <p className="text-[2vh] mt-[3vh] font-[Apple]">
            What does nostalgia mean to you?
          </p>
          <p className="text-[2vh] mt-[3vh] font-[Apple]">
            Click
            <br />
            ⬇︎
          </p>
          <a
            href="https://forms.gle/1234567890"
            className="text-[2vh] mt-[3vh] font-[Apple] underline text-blue-600"
          >
            Tell us Here!
          </a>
        </section>

        {/* 아카이브 이미지 컬렉션 */}
        <MovieSlider />

        {/* 주요 콘텐츠 카드 (정보 설명) */}
        <section aria-label="Informational Cards" className="mt-28 px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className="flex gap-8 items-center bg-white p-6 rounded-3xl shadow-md"
              >
                <img
                  src={`https://via.placeholder.com/276?text=card${i + 1}`}
                  alt={`card${i + 1}`}
                  className="w-48 h-48 rounded-xl object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    Card Title {i + 1}
                  </h3>
                  <p className="text-lg">
                    설명 텍스트가 이곳에 들어갑니다. 필요한 내용을 입력하세요.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* NCT 관련 큐레이션 콘텐츠 */}
        <section
          aria-label="NCT Curation Section"
          className="mt-28 px-8 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-10">NCT Curation</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-64 h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden shadow-md bg-white"
              >
                <img
                  src={`https://via.placeholder.com/288?text=nct${i + 1}`}
                  alt={`nct${i + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </section>

        {/* 푸터 */}
        <footer className="mt-28 mb-10 px-8 text-center text-sm text-gray-600">
          © 2025 Anemoia. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default MainLayout;
