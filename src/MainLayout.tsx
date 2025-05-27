// MainLayout.tsx
import { useEffect, useState } from "react";
import MovieSlider from "./components/MovieSlider";
import MusicPlayer from "./components/MusicPlayer";
import FolderBox from "./components/FolderBox";

function MainLayout() {
  const audioSrc = "/music/nct.mp3";
  const [hoveredButton, setHoveredButton] = useState("default");
  const [backgroundImage, setBackgroundImage] = useState("none");
  const [tellUsHovered, setTellUsHovered] = useState(false);

  const backgroundMap: Record<string, string[]> = {
    default: ["bg-dual-school-2", "bg-dual-school-1"],
    School: ["bg-dual-school-1", "bg-dual-school-2"],
    "VHS-Video": ["bg-dual-school-1", "bg-dual-school-2"],
    Retro: ["bg-dual-school-1", "bg-dual-school-2"],
    Music: ["bg-dual-school-1", "bg-dual-school-2"],
  };

  useEffect(() => {
    if (hoveredButton) {
      setBackgroundImage(backgroundMap[hoveredButton][1]);
    }
  }, [hoveredButton]);

  return (
    <div
      id="top"
      className="min-h-screen w-screen flex flex-col items-center justify-center relative"
    >
      {/* 상단 네비게이션 바 */}
      <img
        src="/images/topBar.png"
        alt="topbar"
        className="w-[60vw] object-contain"
      />

      <div
        className={`
          w-[60vw] min-h-[100vh]
          relative flex flex-col items-center 
          border-1 border-black box-shadow-20px-black-30% overflow-scroll scrollbar-none
          transition-all duration-700 ease-linear bg-cover bg-center ${backgroundImage}
        `}
      >
        {/* music player */}
        <MusicPlayer audioSrc={audioSrc} isSubPage={false} />

        {/* 아이콘 영역 */}
        <div className="w-full flex flex-col items-center">
          <div className="mt-[6vh] flex justify-center items-center gap-[3vw]">
            {["School", "VHS-Video", "Retro", "Music"].map((title) => (
              <div className="flex flex-col items-center">
                <img
                  src={`/images/main/${title}.png`}
                  alt={title}
                  className="h-[3vh] object-contain cursor-pointer hover:scale-120 transition-transform"
                  onMouseEnter={() => setHoveredButton(title)}
                  onMouseLeave={() => setHoveredButton("default")}
                />
                <div className="mt-[1vh] font-[Apple] text-black text-[2vh]">
                  {title.replace(/-/g, " ")}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Welcome 영역 및 MovieBox */}
        <div className="relative w-full flex flex-col items-center mt-[3vh]">
          {/* welcome to Anemoia */}
          <div className="mt-[1vh] w-[90%] h-[15vh] z-10 flex items-center justify-center">
            <div className="flex items-center justify-center gap-[3vw] w-full">
              {/* 왼쪽 이미지 */}
              <img
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
          className="flex flex-col items-center text-center px-8 mt-[45vh] w-full"
        >
          <img
            src="/images/main/cd.png"
            alt="cd"
            className="w-[15vw] object-contain"
          />
          <p className="text-[2.5vh] text-[#000092]">
            Welcome to a place shaped by memories that were never yours.
            <br />A space where longing drifts untethered—half dream, half déjà
            vu
          </p>
          <p className="text-[2.5vh] mt-[3vh] font-[RobotoItalic] font-thin">
            What does nostalgia mean to you?
          </p>
          <p className="text-[2.5vh] mt-[3vh] font-[RobotoItalic] font-thin">
            Click
            <br />
          </p>
          <img
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
        <div className="flex flex-row items-center justify-start mt-[6vh] ml-[5vw] w-[100%]">
          <span className="text-[1.4vw] font-[Bodoni] tracking-tighter leading-tight">
            Welcome to a corner of the internet where memories don’t need to be
            real to matter.
            <br />
            This is a{" "}
            <span className="text-[#0000ee]">
              digital archive of moments you never lived
            </span>
            , but somehow miss — screen static, <br />
            blurry dance moves, fluorescent hallways, songs echoing from a
            cassette <span className="text-[#0000ee]">you never owned</span>.
            <br />
            We collect them, pixel by pixel, for everyone{" "}
            <span className="text-[#0000ee]">
              who feels nostalgic for times that never existed.
            </span>
          </span>
        </div>

        <div className="flex flex-row items-center justify-start mt-[5vh] ml-[5vw] w-[100%]">
          <img
            src="/images/main/anemoia.png"
            alt="anemoia"
            className="w-[50%] object-center"
          />
        </div>

        {/* 폴더 박스 */}
        <FolderBox />

        <div className="relative flex flex-row items-center justify-center mt-[15vh] w-full">
          {/* 이미지 */}
          <img
            src="/images/main/CdBox.png"
            alt="CdBox"
            className="w-[80%] object-center"
          />

          {/* 텍스트 오버레이 */}
          <div className="absolute top-[35%] left-[50%] translate-x-[-50%] text-center">
            <p className="text-[1.2vw] font-[AppleBold] font-semibold">
              Drift further into the feeling
            </p>
            <a
              href="https://www.youtube.com/watch?v=gBIk0pxmByw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0000ee] underline text-[1.2vw] inline-block mt-[-2.5vh]"
            >
              https://www.youtube.com/watch?v=gBIk0pxmByw
            </a>
          </div>
        </div>

        {/* 푸터 */}
        <footer className="px-8 text-center text-[1.2vw] font-[Bodoni] mt-[10vh] mb-[10vh]">
          © Welcome to Anemoia — A collection of unreal nostalgia, curated frame
          by frame.
        </footer>
      </div>
    </div>
  );
}

export default MainLayout;
