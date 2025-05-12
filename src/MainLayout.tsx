// MainLayout.tsx
import { useSelector } from "react-redux";
import { RootState } from "./store";
import MovieBox from "./components/MovieBox";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";

function MainLayout() {
  const hoveredPage = useSelector((state: RootState) => state.ui.hoveredPage);
  const [backgroundImage, setBackgroundImage] = useState("default");

  const backgroundMap: Record<string, string> = {
    default: "/images/default.jpg",
    nct: "/images/nct.jpg",
  };

  // MovieImage에서 배경 이미지 변경 함수 처리
  useEffect(() => {
    if (hoveredPage) {
      setBackgroundImage(backgroundMap[hoveredPage] || "none"); // 배경 이미지 변경
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
          bg-cover
          bg-center
        `}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* 상단 화면 바 */}
        <img
          src="/images/topBar.png"
          alt="topbar"
          className="w-full object-contain"
        />

        {/* welcome + 컨텐츠 영역 */}
        <div className="relative w-full flex flex-col items-center">
          {/* welcome + 버튼 영역 */}
          <div className="flex flex-col items-center w-full">
            {/* welcome to Anemoia */}
            <div className="mt-[1rem] w-[90%] h-[6rem] z-10">
              <div className="flex items-center justify-between gap-4 w-full">
                {/* 왼쪽 이미지 */}
                <img
                  src="/images/home2.png"
                  alt="left"
                  className="h-[5rem] object-contain"
                />

                {/* 텍스트 */}
                <div className="ml-[1rem] text-black text-center whitespace-nowrap">
                  <span className="text-[2.5rem] font-light font-stretch-ultra-condensed font-roboto-condensed italic mr-2 mr-5">
                    Welcome to
                  </span>
                  <span className="text-[4rem] font-bold font-['snell']">
                    Anemoia
                  </span>
                </div>

                {/* 오른쪽 이미지 */}
                <img
                  src="/images/home2.png"
                  alt="right"
                  className="h-[5rem] object-contain"
                />
              </div>
              <div className="mt-[10vh]">
                <MovieBox />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
