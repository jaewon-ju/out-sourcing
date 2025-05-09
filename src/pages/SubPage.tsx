// src/pages/SubPage.tsx
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const SubPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-white">
      <div
        className="relative"
        style={{
          width: "80vw",
          maxWidth: "960px",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 0.7s ease-in-out",
          border: "1px solid #333",
          boxShadow: "0 0 20px rgba(0,0,0,0.3)",
          overflow: "scroll",
        }}
      >
        <div className="flex justify-center items-center gap-5">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/survey")}>Survey</button>
          <button onClick={() => navigate("/youtube")}>Youtube</button>
        </div>
        {/* 사이드바 - 스크롤 따라다님 */}
        <div className="sticky top-50 self-start px-4 py-6 float-right">
          <div className="flex flex-col gap-4">
            <a href="#section1" className="text-blue-500 hover:underline">
              Section 1
            </a>
            <a href="#section2" className="text-blue-500 hover:underline">
              Section 2
            </a>
            <a href="#section3" className="text-blue-500 hover:underline">
              Section 3
            </a>
          </div>
        </div>
        {/* 내용 섹션 */}
        <div className="px-4 py-10 space-y-40">
          <div id="section1" className="h-screen bg-gray-100">
            Section 1 Content
          </div>
          <div id="section2" className="h-screen bg-gray-200">
            Section 2 Content
          </div>
          <div id="section3" className="h-screen bg-gray-300">
            Section 3 Content
          </div>
        </div>

        <video src="/videos/woodz.mp4" autoPlay muted loop />
      </div>
    </div>
  );
};

export default SubPage;
