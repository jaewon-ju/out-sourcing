import MovieBox from "./MovieBox";
import { useRef } from "react";

const MovieSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = window.innerWidth * 0.4; // 한 번에 40vw 만큼 이동
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full">
      {/* 좌우 버튼 */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 px-3 py-1 rounded-full shadow"
      >
        ◀
      </button>

      {/* 아카이브 이미지 컬렉션 */}
      <section
        ref={scrollRef}
        aria-label="Anemoia Archive"
        className="w-full flex justify-start overflow-x-scroll scroll-smooth scrollbar-none"
      >
        <MovieBox />
      </section>

      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 px-3 py-1 rounded-full shadow"
      >
        ▶
      </button>
    </div>
  );
};

export default MovieSlider;
