import { useNavigate } from "react-router-dom";
import ContentContainer from "./ContentContainer";
import { useEffect, useState } from "react";
import MusicPlayer from "../components/MusicPlayer";

interface SubPageTemplateProps {
  singerName: string;
  audioSrc?: string;
}

const SubPageTemplate = ({ singerName, audioSrc }: SubPageTemplateProps) => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string | null>(null);

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

  const sections = ["Fashion", "Props", "Set Space", "Direction", "Font"];

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div
      id="top"
      className="relative min-h-screen w-screen flex flex-col items-center justify-center bg-white"
    >
      <div style={{ ...containerStyle }}>
        {/* 상단 화면 바 */}
        <img
          src="/images/topBar.png"
          alt="topbar"
          className="w-full object-contain"
        />

        {audioSrc && <MusicPlayer audioSrc={audioSrc} isSubPage={true} />}

        {/* welcome + 컨텐츠 영역 */}
        <div className="bg-dual relative w-full flex flex-col items-center">
          {/* welcome + 버튼 영역 */}
          <div className="flex flex-col items-center w-full">
            {/* welcome to Anemoia */}
            <div className="mt-[1vh] w-[90%] h-[15vh] z-10 bg-[#A2C7E9] shadow-md rounded-lg border border-black flex items-center justify-center">
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

            {/* home survey youtube */}
            <div className="w-full flex flex-col items-center">
              <div className="mt-[5vh] flex justify-center items-center gap-[5vw]">
                {/* Home */}
                <div className="flex flex-col items-center">
                  <img
                    src="/images/home.png"
                    alt="home"
                    className="h-[8vh] object-contain cursor-pointer hover:scale-120 transition-transform"
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
                    className="h-[8vh] object-contain cursor-pointer hover:scale-120 transition-transform"
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
                    className="h-[8vh] object-contain cursor-pointer hover:scale-120 transition-transform"
                    onClick={() =>
                      window.open(
                        "https://www.youtube.com/watch?v=IKlkZZv76Ho",
                        "_blank"
                      )
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
              className="rounded-xl w-[48vw] h-[27vw]"
              src="https://www.youtube.com/embed/IKlkZZv76Ho?si=ojqbpcd-mWiDTZ03"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <p className="text-black font-[AppleBold] font-bold mt-[2vh] text-[2.4vw] flex justify-start">
              NCT WISH 엔시티 위시 'Steady' MV
            </p>
            <p className="font-[Apple] text-black flex justify-start mt-[1vh] text-[1.4vw]">
              그리운 과거의 학창시절, 순정만화 같은 사랑, 유년기의 여름날
            </p>
          </div>

          {/* 컨텐츠 영역 */}
          <div className="relative flex flex-row w-full">
            {/* 왼쪽 콘텐츠 */}
            <div className="flex flex-row w-[80%] mt-[10vh] ml-[2vw]">
              <ContentContainer singerName={singerName} />
            </div>
            {/* 오른쪽 메뉴를 위해 비워둔 영역*/}
            <div className="w-[20%]"></div>
          </div>

          {/* 오른쪽 메뉴 */}
          <div
            id="section-menu"
            className="fixed top-[50vh] left-[78vw] flex flex-col gap-0 bg-[#A2C7E9] rounded-xl shadow-md"
          >
            {sections.map((section, index: number) => (
              <div
                key={index}
                className={`flex flex-col gap-0 border-gray-500 
                  ${
                    index === sections.length - 1
                      ? "border-b-0"
                      : "border-b-[0.13vh]"
                  }`}
              >
                <a
                  href={`#${section}`}
                  onClick={() => handleClick(section)} // 클릭 시 handleClick 호출
                  className={`font-[Serif] text-black text-center hover:text-blue-700 
                    px-[1vw] py-[1vh]
                    text-[1.4vw]
                  ${activeSection === section ? "text-blue-700" : ""}
                  `}
                >
                  {section}
                </a>
              </div>
            ))}
            <a href="#top">
              <div className="text-black font-[Serif] text-center hover:text-blue-700 px-[1vw] py-[1vh]">
                <span className="w-fit bg-white font-bold px-[0.5vw] py-[0.5vh] text-[1.4vw]">
                  UP!
                </span>
              </div>
            </a>
          </div>

          {/* tags */}
          <div className="flex flex-row w-full justify-center mt-[10vh] gap-[3vw]">
            <p className="text-black text-[1.2vw] text-center px-[1vw] py-[0.5vh] bg-[#A2C7E9] rounded-xl shadow-md font-[AppleBold]">
              2000s
            </p>
            <p className="text-black text-[1.2vw] text-center px-[1vw] py-[0.5vh] bg-[#A2C7E9] rounded-xl shadow-md font-[AppleBold]">
              School
            </p>
            <p className="text-black text-[1.2vw] text-center px-[1vw] py-[0.5vh] bg-[#A2C7E9] rounded-xl shadow-md font-[AppleBold]">
              Japan
            </p>
            <p className="text-black text-[1.2vw] text-center px-[1vw] py-[0.5vh] bg-[#A2C7E9] rounded-xl shadow-md font-[AppleBold]">
              First Love
            </p>
          </div>

          {/* related */}
          <div className="mt-[10vh] mb-[10vh] w-[100%]">
            <p className="bg-[url('/images/bubble.png')] bg-cover bg-center text-black rounded-lg w-fit ml-[2vw] px-[1vw] py-[0.5vh] text-[2vh] font-[AppleBold]">
              Related Articles
            </p>
            <div className="flex flex-row w-[70%] mt-[4vh] ml-[2vw] gap-[2vw]">
              <div className="bg-black w-[16vw] aspect-[16/9]"></div>
              <div className="bg-black w-[16vw] aspect-[16/9]"></div>
              <div className="bg-black w-[16vw] aspect-[16/9]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubPageTemplate;

const containerStyle = {
  width: "80vw",
  minHeight: "100vh", // 변경된 부분
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: "1px solid #333",
  boxShadow: "0 0 20px rgba(0,0,0,0.3)",
  overflow: "scroll",
  scrollBehavior: "smooth",
  zIndex: "0",
} as React.CSSProperties;
