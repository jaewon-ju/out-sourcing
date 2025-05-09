// MainLayout.tsx
import { useSelector } from "react-redux";
import { RootState } from "./store";
import MovieBox from "./components/MovieBox";
import { useEffect, useState, useRef } from "react";
import NavBar from "./components/NavBar";
import MusicController from "./components/musicController";
import AudioConsent from "./components/AudioConsent";

function MainLayout() {
  const hoveredPage = useSelector((state: RootState) => state.ui.hoveredPage);
  const [backgroundImage, setBackgroundImage] = useState("default");
  const [audioConsentGiven, setAudioConsentGiven] = useState(false);

  const handleAudioConsent = () => setAudioConsentGiven(true);

  const backgroundMap: Record<string, string> = {
    default: "images/default.jpg",
    woodz: "/images/woodz.jpg",
    way: "/images/way.webp",
    leehi: "/images/leehi.webp",
  };

  const musicMap: Record<string, string> = {
    woodz: "/music/music-home.mp3",
    way: "/music/music-about.mp3",
    leehi: "/music/music-contact.mp3",
  };

  // MovieImage에서 배경 이미지 변경 함수 처리
  useEffect(() => {
    if (hoveredPage) {
      setBackgroundImage(backgroundMap[hoveredPage] || "none"); // 배경 이미지 변경
    }
  }, [hoveredPage]);

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-white">
      <div
        className="relative"
        style={{
          width: "80vw",
          maxWidth: "960px",
          height: "100vh",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 0.7s ease-in-out",
          border: "1px solid #333",
          boxShadow: "0 0 20px rgba(0,0,0,0.3)",
          backgroundColor: hoveredPage ? undefined : "white",
        }}
      >
        <NavBar />
        {audioConsentGiven ? (
          <MusicController />
        ) : (
          <AudioConsent onConsent={handleAudioConsent} />
        )}
        <MovieBox />
      </div>
    </div>
  );
}

export default MainLayout;
