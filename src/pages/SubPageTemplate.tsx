import { useNavigate } from "react-router-dom";
import ContentContainer from "./ContentContainer";
import { useEffect, useState } from "react";
import MusicPlayer from "../components/MusicPlayer";
import TopBarWithInput from "./TopBarWithInput";
import Related from "../components/Related";
import { useContentDic } from "../utils/contents";

interface SubPageTemplateProps {
  singerName: string;
  audioSrc?: string;
}

const SubPageTemplate = ({ singerName, audioSrc }: SubPageTemplateProps) => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const contentDic: Record<string, any> = useContentDic();
  const content = contentDic[singerName];

  const handleClick = (section: string) => {
    // 클릭한 항목의 인덱스를 상태로 저장
    setActiveSection(section);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    const menu = document.querySelector("#section-menu"); // 메뉴 요소 선택
    if (menu && !menu.contains(event.target as Node)) {
      setActiveSection(null); // 메뉴 외부 클릭 시 null로 설정
    }
  };

  const sections = ["Fashion", "Props", "Set Space", "Direction", "Typography"];

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div
      id="top"
      className="relative min-h-screen w-screen 
      flex flex-col items-center justify-center bg-[#e2e3e8]"
    >
      <div style={{ ...containerStyle }}>
        {/* 상단 화면 바 */}
        <TopBarWithInput />

        {audioSrc && <MusicPlayer audioSrc={audioSrc} isSubPage={true} />}

        {/* welcome + 컨텐츠 영역 */}
        <div className="bg-dual relative w-full flex flex-col items-center">
          {/* welcome + 버튼 영역 */}
          <div className="flex flex-col items-center w-full">
            <img
              src="/images/title.png"
              alt="title"
              className="w-[80%] mt-[4vh]"
            />

            {/* home survey youtube */}
            <div className="w-full flex flex-col items-center">
              <div className="mt-[5vh] flex justify-center items-center gap-[5vw]">
                {/* Home */}
                <div className="flex flex-col items-center">
                  <img
                    src="/images/home.png"
                    alt="home"
                    className="h-[5vh] object-contain cursor-pointer hover:scale-120 transition-transform"
                    onClick={() => navigate("/")}
                  />
                  <div className="mt-[1vh] font-[Apple] text-black text-[2vh]">
                    Home
                  </div>
                </div>

                {/* Survey */}
                <div className="flex flex-col items-center">
                  <img
                    src="/images/survey.png"
                    alt="survey"
                    className="h-[5vh] object-contain cursor-pointer hover:scale-120 transition-transform"
                    onClick={() => navigate("/survey")}
                  />
                  <div className="mt-[1vh] font-[Apple] text-black text-[2vh]">
                    Survey
                  </div>
                </div>

                {/* YouTube */}
                <div className="flex flex-col items-center">
                  <img
                    src="/images/youtube.png"
                    alt="youtube"
                    className="h-[5vh] object-contain cursor-pointer hover:scale-120 transition-transform"
                    onClick={() =>
                      window.open(content.youtube.viewUrl, "_blank")
                    }
                  />
                  <div className="mt-[1vh] font-[Apple] text-black text-[2vh]">
                    Youtube
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 유튜브 영상 */}
          <div className="mt-[3vh] ml-[8vw] w-full flex flex-col justify-start">
            <iframe
              className="rounded-xl w-[32vw] h-[18vw]"
              src={content.youtube.url}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <p className="text-black font-[AppleBold] font-bold mt-[2vh] text-[1.8vw] flex justify-start">
              {content.youtube.title}
            </p>
            <p className="font-[Apple] text-black flex justify-start mt-[0.5vh] text-[1vw]">
              {content.youtube.subTitle}
            </p>
          </div>

          {/* 컨텐츠 영역 */}
          <div className="relative flex flex-row w-full">
            {/* 왼쪽 콘텐츠 */}
            <div className="flex flex-row w-[75%] mt-[10vh] ml-[4vw]">
              <ContentContainer singerName={singerName} />
            </div>
            {/* 오른쪽 메뉴를 위해 비워둔 영역*/}
            <div className="w-[20%]"></div>
          </div>

          {/* 오른쪽 메뉴 */}
          <div
            id="section-menu"
            className="fixed top-[50vh] left-[69vw] flex flex-col gap-0 
            bg-[#a0d7ea] border-[#2b61a7] w-[9vw] border-[0.13vh]
            shadow-[2px_2px_0_rgba(0,0,0,0.3)] "
          >
            {sections.map((section, index: number) => (
              <div
                key={index}
                className={`flex flex-col gap-0 border-white w-full
                  ${
                    index === sections.length - 1
                      ? "border-b-0"
                      : "border-b-[0.13vh]"
                  }`}
              >
                <a
                  href={`#${section}`}
                  onClick={() => handleClick(section)}
                  className={`font-[Serif] text-black text-left hover:text-blue-700 
                    flex items-center justify-between
                    px-[0.5vw] py-[1vh]
                    text-[1.2vw]
    ${activeSection === section ? "text-blue-700" : ""}
  `}
                >
                  <span className="truncate">{section}</span>
                  <img
                    src="/images/arrow.png"
                    alt="arrow"
                    className="h-[1.8vh]"
                  />
                </a>
              </div>
            ))}
            <a href="#top">
              <div className="text-black font-[Serif] text-center hover:text-blue-700 px-[1vw] py-[1vh]">
                <span
                  className="w-fit bg-white font-bold px-[0.8vw] py-[0.5vh] text-[1.4vw]
                border-[0.13vh] border-black shadow-[2px_2px_0_rgba(0,0,0,0.3)]
                "
                >
                  UP!
                </span>
              </div>
            </a>
          </div>

          {/* tags */}
          <div className="flex flex-row w-full justify-center mt-[10vh] gap-[3vw]">
            {content.tags.map((tag: string) => (
              <div
                className="text-[1.2vw] min-w-[6vw] p-[0.5vw] from-[#AAEDFF] to-[#599ADC]
                aspect-[519/240] bg-gradient-to-b rounded-xl flex items-center justify-center
                font-[Apple] font-medium
                border-[0.15vw] border-[#2D6DA6]"
              >
                {tag}
              </div>
            ))}
          </div>

          {/* related */}
          <Related key={singerName} singerName={singerName} />

          {/* 푸터 */}
          <img
            src="/images/tape.png"
            alt="footer"
            className="h-[15vh] object-contain"
          />
          <a
            href={content.youtube.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0000ee] font-[Apple] text-[1vw] mb-[10vh]"
          >
            {content.youtube.url}
          </a>
        </div>
      </div>
    </div>
  );
};

export default SubPageTemplate;

const containerStyle = {
  width: "60vw",
  minHeight: "100vh", // 변경된 부분
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: "1px solid #333",
  boxShadow: "0 0 20px rgba(0,0,0,0.3)",
  overflow: "scroll",
  scrollBehavior: "smooth",
  backgroundColor: "white",
  zIndex: "0",
  scrollbarWidth: "none",
} as React.CSSProperties;
