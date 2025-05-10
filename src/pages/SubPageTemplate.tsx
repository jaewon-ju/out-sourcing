import { useNavigate } from "react-router-dom";
import ContentContainer from "./ContentContainer";

interface SubPageTemplateProps {
  singerName: string;
  videoSrc?: string;
}

const SubPageTemplate = ({ singerName, videoSrc }: SubPageTemplateProps) => {
  const navigate = useNavigate();
  const sections = ["Fashion", "Props", "Set Space", "Typography", "Direction"];

  return (
    <div
      id="top"
      className="min-h-screen w-screen flex flex-col items-center justify-center bg-white"
    >
      <div style={{ ...containerStyle }}>
        {/* 상단 화면 바 */}
        <img
          src="/images/topBar.png"
          alt="topbar"
          className="w-full object-contain"
        />

        {/* welcome + 컨텐츠 영역 */}
        <div className="w-full flex flex-col items-center">
          {/* welcome + 버튼 영역 */}
          <div className="flex flex-col items-center justify-between w-full">
            {/* welcome to Anemoia */}
            <div className="mt-10 w-[80%] z-10 bg-[#A2C7E9] py-6 px-8 shadow-md rounded-lg">
              <div className="flex items-center justify-between gap-4 w-full">
                {/* 왼쪽 이미지 */}
                <img
                  src="/images/home2.png"
                  alt="left"
                  className="h-24 object-contain"
                />

                {/* 텍스트 */}
                <div className="text-black text-center whitespace-nowrap">
                  <span className="text-[50px] font-roboto-condensed italic mr-2 mr-5">
                    Welcome to
                  </span>
                  <span className="text-[75px] font-bold font-['snell']">
                    Anemoia
                  </span>
                </div>

                {/* 오른쪽 이미지 */}
                <img
                  src="/images/home2.png"
                  alt="right"
                  className="h-24 object-contain"
                />
              </div>
            </div>

            <div className="w-full flex flex-col items-center">
              {/* home survey youtube */}
              <div className="mt-10 flex justify-center items-center gap-18">
                <div className="flex flex-col items-center gap-2">
                  <img
                    src="/images/home.png"
                    alt="home"
                    className="h-15 object-contain cursor-pointer"
                    onClick={() => navigate("/")}
                  />
                  <div className="text-black">Home</div>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <img
                    src="/images/survey.png"
                    alt="survey"
                    className="h-13 object-contain cursor-pointer"
                    onClick={() => navigate("/survey")}
                  />
                  <div className="text-black">Survey</div>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <img
                    src="/images/youtube.png"
                    alt="youtube"
                    className="h-15 object-contain cursor-pointer"
                    onClick={() => navigate("/youtube")}
                  />
                  <div className="text-black">Youtube</div>
                </div>
              </div>
            </div>
          </div>

          {/* 컨텐츠 영역 */}
          <div className="relative flex flex-row w-full">
            {/* 왼쪽 콘텐츠 */}
            <div className="flex flex-row w-[80%] mt-10 ml-10">
              <ContentContainer singerName={singerName} />
            </div>

            {/* 오른쪽 메뉴 */}
            <div className="fixed right-[13vw] flex flex-col gap-0 bg-[#A2C7E9] rounded-md shadow-md">
              {sections.map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className="text-black font-source-serif-pro text-center hover:text-blue-700 px-4 py-3 border-b border-grey"
                >
                  {section}
                </a>
              ))}
              <a href="#top">
                <div className="text-black font-source-serif-pro text-center hover:text-blue-700 px-4 py-5">
                  <span className="w-fit bg-white font-bold px-4 py-2">
                    UP!
                  </span>
                </div>
              </a>
            </div>
          </div>

          {videoSrc && <video src={videoSrc} autoPlay muted loop />}
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
  backgroundSize: "cover",
  backgroundPosition: "center",
  transition: "background-image 0.7s ease-in-out",
  border: "1px solid #333",
  boxShadow: "0 0 20px rgba(0,0,0,0.3)",
  overflow: "scroll",
} as React.CSSProperties;
