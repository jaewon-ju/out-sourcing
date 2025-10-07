// MainLayout.tsx
import React, { useEffect, useState } from "react";
import Spinner from "./components/Spinner";
const MovieSlider = React.lazy(() => import("./components/MovieSlider"));
const MusicPlayer = React.lazy(() => import("./components/MusicPlayer"));
const FolderBox = React.lazy(() => import("./components/FolderBox"));
const TopBarWithInput = React.lazy(() => import("./pages/TopBarWithInput"));

const preloadImage = (src: string) =>
  new Promise<void>((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve();
    img.onerror = () => reject();
  });

function MainLayout() {
  const audioSrc = "/music/nct.mp3";
  const [clickedButton, setClickedButton] = useState("default");
  const [backgroundImage, setBackgroundImage] = useState("defualt");
  const [tellUsHovered, setTellUsHovered] = useState(false);
  const [isAppLoaded, setIsAppLoaded] = useState(false);

  const backgroundMap: Record<string, string> = {
    default: "/background/main.webp",
    School: "/background/school.webp",
    "VHS-Video": "/background/vhs.webp",
    Retro: "/background/retro.webp",
    Music: "/background/music.webp",
  };

  useEffect(() => {
    if (clickedButton) {
      setBackgroundImage(backgroundMap[clickedButton]);
    }
  }, [clickedButton]);

  useEffect(() => {
    const loadResources = async () => {
      try {
        // 주요 이미지 preload
        await Promise.all([
          preloadImage("/background/top.webp"),
          preloadImage("/background/bottom.webp"),
          preloadImage("/images/home2.png"),
          preloadImage("/images/main/cd.png"),
          preloadImage("/images/main/arrow.png"),
          preloadImage("/images/main/nostalgia.png"),
          preloadImage("/images/main/CdBox.png"),
          preloadImage("/images/main/anemoia.png"),
          ...["School", "VHS-Video", "Retro", "Music"].map((title) =>
            preloadImage(`/images/main/${title}.png`)
          ),
        ]);

        // React lazy component preload (optional)
        await Promise.all([
          import("./components/MovieSlider"),
          import("./components/MusicPlayer"),
          import("./components/FolderBox"),
          import("./pages/TopBarWithInput"),
        ]);

        // 모든 로딩 끝난 후 표시
        setIsAppLoaded(true);
      } catch (err) {
        console.error("Preload error", err);
        setIsAppLoaded(true); // 실패해도 fallback 으로 넘어감
      }
    };

    loadResources();
  }, []);

  if (!isAppLoaded) {
    return (
      <div className="min-h-screen w-screen flex items-center justify-center bg-[#e2e3e8]">
        <Spinner />
      </div>
    );
  }

  return (
    <div
      id="top"
      className="min-h-screen w-screen flex flex-col items-center justify-center relative
      bg-[#e2e3e8]
      "
      onClick={() => setClickedButton("default")}
    >
      {/* 상단 네비게이션 바 */}
      <div
        className={`
          w-[60vw] min-h-[100vh]
          relative flex flex-col items-center 
          border-1 border-black box-shadow-20px-black-30% overflow-scroll scrollbar-none
        `}
      >
        <div className="relative w-full flex flex-col">
          {/* TopBar는 따로 빼기 */}
          <div className="relative z-10 bg-[#e2e3e8]">
            <TopBarWithInput />
          </div>

          {/* BackgroundImage 시작 영역 */}
          <div className="relative flex flex-col items-center w-full flex-grow">
            <img
              src={backgroundImage}
              loading="eager"
              alt="top background"
              className="absolute top-0 left-0 w-full object-cover z-0 pointer-events-none select-none"
            />

            {/* Bottom background image */}
            <img
              src={`/background/bottom.webp`}
              loading="eager"
              alt="bottom background"
              className="absolute bottom-0 left-0 w-full object-cover z-1 pointer-events-none select-none"
            />
            <MusicPlayer audioSrc={audioSrc} isSubPage={false} />

            {/* 아이콘 영역 */}
            <div className="w-full flex flex-col items-center z-10">
              <div className="mt-[6vh] flex justify-center items-center gap-[3vw]">
                {["School", "VHS-Video", "Retro", "Music"].map((title) => (
                  <div className="flex flex-col items-center">
                    <img
                      src={`/images/main/${title}.png`}
                      loading="lazy"
                      alt={title}
                      className="h-[3vh] object-contain cursor-pointer hover:scale-120 transition-transform"
                      onClick={(e) => {
                        e.stopPropagation();
                        setClickedButton(title);
                      }}
                    />
                    <div className="mt-[1vh] font-[AppleNeoR] text-black text-[2vh]">
                      {title.replace(/-/g, " ")}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Welcome 영역 및 MovieBox */}
            <div className="relative w-full flex flex-col items-center mt-[3vh] z-10">
              {/* welcome to Anemoia */}
              <div className="mt-[1vh] w-[90%] h-[15vh] z-10 flex items-center justify-center">
                <div className="flex items-center justify-center gap-[3vw] w-full">
                  {/* 왼쪽 이미지 */}
                  <img
                    loading="lazy"
                    src="/images/home2.png"
                    alt="left"
                    className="h-[10vh] object-contain"
                  />

                  {/* 텍스트 */}
                  <div className=" text-black text-center mt-[1vw]">
                    <span className="font-[RobotoItalic] text-[5vh] font-light mr-[1.5vw]">
                      Welcome to
                    </span>
                    <span className="font-[Snell] text-[8vh]">Anemoia</span>
                  </div>

                  {/* 오른쪽 이미지 */}
                  <img
                    loading="lazy"
                    src="/images/home2.png"
                    alt="right"
                    className="h-[10vh] object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Anemoia 철학 및 환영 메시지 */}
            <section
              aria-label="Welcome Description"
              className="flex flex-col items-center text-center px-8 mt-[45vh] w-full z-10"
            >
              <img
                loading="lazy"
                src="/images/main/cd.png"
                alt="cd"
                className="w-[15vw] object-contain"
              />
              <p className="text-[2.5vh] text-[#000092]">
                Welcome to a place shaped by memories that were never yours.
                <br />A space where longing drifts untethered—half dream, half
                déjà vu
              </p>
              <p className="text-[2.5vh] mt-[3vh] font-[RobotoItalic] font-thin">
                What does nostalgia mean to you?
              </p>
              <p className="text-[2.5vh] mt-[3vh] font-[RobotoItalic] font-thin">
                Click
                <br />
              </p>
              <img
                loading="lazy"
                src="/images/main/arrow.png"
                alt="arrow"
                className="w-[2.5vh] object-contain"
              />

              {/* Tell us Here! */}
              <div className="flex flex-col items-center justify-center mt-[4vh]">
                <a
                  href="/survey"
                  className="relative inline-block group"
                  onMouseEnter={() => setTellUsHovered(true)}
                  onMouseLeave={() => setTellUsHovered(false)}
                >
                  {/* 텍스트 + 이미지 라인 */}
                  <span
                    className={`text-[4vh] font-[SerifSemibold] ${
                      tellUsHovered ? "text-blue-600" : "text-black"
                    } relative z-50`}
                  >
                    Tell us
                    <img
                      loading="lazy"
                      src="/images/main/nostalgia.png"
                      alt="nostalgia"
                      className="inline-block h-[5vh] mx-[1vh] object-contain align-middle z-50 relative"
                      aria-hidden="true"
                    />
                    Here!
                  </span>

                  {/* 밑줄: 전체 a 아래에, 이미지 뒤에 */}
                  <span
                    className={`absolute left-0 right-0 bottom-[1.3vh] h-[0.2vh] z-10 ${
                      tellUsHovered ? "bg-blue-600" : "bg-black"
                    }`}
                  />
                </a>
              </div>
            </section>

            {/* 아카이브 이미지 컬렉션 */}
            <MovieSlider />

            {/* welcome to a corner */}
            <div
              className="flex flex-row items-center justify-start mt-[6vh] ml-[6vw] w-[100%] z-10
        "
            >
              <span className="text-[1.1vw] font-[Bodoni] tracking-tighter leading-relaxed">
                <span className="text-[#0000ee]">
                  실제 경험하지 않았더라도, 의미를 가질 수 있는 기억들이
                  존재합니다.
                </span>
                <br />
                이곳은 그런 기억들을 위한 인터넷의 한 공간입니다. 이 아카이브는
                직접 겪은 적은 없지만 낯설지 않게 느껴지는 장면들을 모아둡니다
                <br />
                스크린의 지직거리는 노이즈, 흐릿한 춤 동작, 형광등이 켜진 복도,
                그리고 한 번도 소유한 적 없는 카세트 테이프에서 들려오는 음악
                등.
                <br />
                이러한 이미지와 소리들을 픽셀 단위로 수집하며,
                <span className="text-[#0000ee]">
                  <span> </span>존재하지 않았지만 그리운 시간
                </span>
                에 대한 감정을 공유하고자 합니다.
              </span>
            </div>

            <div className="flex flex-row items-center justify-start mt-[2vh] ml-[5vw] w-[100%] z-10">
              <img
                loading="lazy"
                src="/images/main/anemoia.png"
                alt="anemoia"
                className="w-[50%] object-center"
              />
            </div>

            {/* 폴더 박스 */}
            <FolderBox />

            <div className="relative flex flex-row items-center justify-center mt-[20vh] w-full z-10  ">
              {/* 이미지 */}
              <img
                loading="lazy"
                src="/images/main/CdBox.png"
                alt="CdBox"
                className="w-[60%] object-center"
              />

              {/* 텍스트 오버레이 */}
              <div className="absolute top-[35%] left-[50%] translate-x-[-50%] text-center">
                <p className="text-[1vw] font-[AppleNeoB]">
                  Drift further into the feeling
                </p>
                <a
                  href="https://www.youtube.com/watch?v=gBIk0pxmByw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0000ee] underline text-[0.8vw] inline-block mt-[1vh] relative top-[-1.5vh]"
                >
                  https://www.youtube.com/watch?v=gBIk0pxmByw
                </a>
              </div>
            </div>

            {/* 푸터 */}
            <footer className="px-8 text-center text-[0.8vw] font-[Bodoni] mt-[10vh] mb-[10vh]">
              © Welcome to Anemoia — A collection of unreal nostalgia, curated
              frame by frame.
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
