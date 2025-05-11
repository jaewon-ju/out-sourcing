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
        <div className="relative w-full flex flex-col items-center">
          {/* welcome + 버튼 영역 */}
          <div className="flex flex-col items-center w-full">
            {/* welcome to Anemoia */}
            <div className="mt-[1rem] w-[90%] h-[6rem] z-10 bg-[#A2C7E9] shadow-md rounded-lg border border-black">
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

          {/* 유튜브 영상 */}
          <div className="mt-[2rem] ml-[4rem] w-full flex justify-start">
            <iframe
              className="rounded-xl"
              width="480rem"
              height="270rem"
              src="https://www.youtube.com/embed/IKlkZZv76Ho?si=ojqbpcd-mWiDTZ03"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          {/* 컨텐츠 영역 */}
          <div className="relative flex flex-row w-full">
            {/* 왼쪽 콘텐츠 */}
            <div className="flex flex-row w-[80%] mt-10 ml-10">
              <ContentContainer singerName={singerName} />
            </div>

            {/* 오른쪽 메뉴를 위해 비워둔 영역*/}
            <div className="w-[20%]"></div>
          </div>

          {/* 오른쪽 메뉴 */}
          <div className="fixed top-[40%] left-[77%] flex flex-col gap-0 bg-[#A2C7E9] rounded-xl shadow-md">
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
                <span className="w-fit bg-white font-bold px-4 py-2">UP!</span>
              </div>
            </a>
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
