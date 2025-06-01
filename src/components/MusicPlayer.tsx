import { useEffect, useRef, useState } from "react";

export default function MusicPlayer({
  audioSrc,
  isSubPage,
}: {
  audioSrc: string;
  isSubPage: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isClose, setIsClose] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let currentY = 0;

    const update = () => {
      const targetY = isSubPage ? window.scrollY + 320 : window.scrollY + 10;
      if (currentY < targetY) {
        currentY += (targetY - currentY) * 0.1;
      } else {
        currentY -= (currentY - targetY) * 0.1;
      }
      if (ref.current) {
        ref.current.style.transform = `translateY(${currentY}px)`;
      }

      requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  }, []);

  const closePlayer = () => {
    setIsClose(true);
  };

  useEffect(() => {
    if (!audioSrc || !audioRef.current) return;
    audioRef.current.volume = 0.3;
    audioRef.current.loop = true;

    const playAudio = async () => {
      try {
        await audioRef.current?.play();
      } catch (err) {
        console.warn("Auto-play with sound failed. User interaction needed.");
      }
    };

    playAudio();
  }, [audioSrc]);

  useEffect(() => {
    if (!audioRef.current) return;

    const updateTime = () => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
        setDuration(audioRef.current.duration);
      }
    };

    const interval = setInterval(updateTime, 500); // 또는 requestAnimationFrame로 최적화 가능

    return () => clearInterval(interval);
  }, [isPlaying]);

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60)
      .toString()
      .padStart(1, "0");
    const s = Math.floor(sec % 60)
      .toString()
      .padStart(2, "0");
    return `-${m}:${s}`;
  };

  const handleAudio = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        setIsPlaying(true);
        console.log("play");
        audioRef.current.volume = 0.3;
        audioRef.current.play().catch((err) => {
          console.warn("재생 실패:", err);
        });
      } else {
        setIsPlaying(false);
        console.log("pause");
        audioRef.current.pause();
      }
    }
  };

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  if (isClose) return null;

  return (
    <div
      ref={ref}
      className={`
        absolute right-[2vw] z-50
        ${
          isSubPage ? "w-[18rem]" : "w-[20rem]"
        } h-[7.5rem] rounded-[1rem] bg-gray-100 
        shadow-xl/30
        flex flex-col justify-between p-[1rem]
        transition-transform will-change-transform
        `}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between">
        <div className="flex space-x-[0.5rem] items-center relative group">
          <div
            className="w-[1rem] h-[1rem] rounded-full bg-red-500 relative cursor-pointer"
            onClick={closePlayer}
          >
            <span className="absolute inset-0 flex items-center justify-center text-white text-[0.6rem] opacity-0 group-hover:opacity-100">
              ×
            </span>
          </div>
          <div className="w-[1rem] h-[1rem] rounded-full bg-yellow-400" />
          <div className="w-[1rem] h-[1rem] rounded-full bg-green-500" />
        </div>
        <div className="text-gray-600 text-[0.8rem]">
          {formatTime(duration - currentTime)}
        </div>
      </div>

      {/* Progress bar with images */}
      <div className="relative w-full h-[1.5rem] mt-[0.8rem] mb-[1rem]">
        <img
          src="/images/music/progress_background.png"
          alt="progress bar"
          className="w-full h-[0.5rem] object-cover rounded-full"
        />

        <div
          className="absolute top-0 left-0 h-[0.5rem] rounded-full overflow-hidden"
          style={{ width: `${progressPercent}%` }}
        >
          <img
            src="/images/music/progress_done.png"
            alt="progress done"
            className="w-full h-full object-cover"
          />
        </div>
        <img
          src="/images/music/progress_handle.png"
          alt="progress handle"
          className="absolute top-[-0.25rem] w-[0.3rem] h-[1.0rem] will-change-transform"
          style={{
            left: `${(currentTime / duration) * 100}%`,
            transform: "translateX(-50%)",
          }}
        />
      </div>

      {/* Control buttons */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-[1rem]">
          <img
            src="/images/music/music_speaker.png"
            alt="speaker"
            className="w-[1rem] h-[1rem]"
          />
          <img
            src="/images/music/music_dot.png"
            alt="dot"
            className="w-[1rem] h-[0.2rem]"
          />
        </div>

        <div className="flex items-center space-x-[1rem] mb-[0.5rem]">
          <img
            src="/images/music/music_backward.png"
            alt="backward"
            className="w-[1.8rem] h-[1rem] opacity-50"
          />
          <button
            onClick={handleAudio}
            className={`
            w-[1rem] h-[1rem] bg-cover bg-center
            ${
              isPlaying
                ? "bg-[url('/images/music/music_pause.png')]"
                : "bg-[url('/images/music/music_play.png')]"
            }
          `}
          ></button>
          <img
            src="/images/music/music_forward.png"
            alt="forward"
            className="w-[1.8rem] h-[1rem]"
          />
        </div>

        <div className="flex items-center space-x-[1rem]">
          <img
            src="/images/music/music_comment.png"
            alt="comment"
            className="w-[1rem] h-[1rem]"
          />
          <img
            src="/images/music/music_catalog.png"
            alt="catalog"
            className="w-[1.2rem] h-[1.2rem] mb-[0.5rem]"
          />
        </div>
      </div>
      {audioSrc && <audio ref={audioRef} src={audioSrc} loop />}
    </div>
  );
}
