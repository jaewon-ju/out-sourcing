import MovieBox from "./MovieBox";
import { useRef, useState } from "react";

const MovieSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [sortDirection, setSortDirection] = useState<string>("DESC");

  const sortAscending = () => {
    setSortDirection("ASC");
  };

  const sortDescending = () => {
    setSortDirection("DESC");
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = window.innerWidth * 0.4; // 한 번에 40vw 만큼 이동
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full flex flex-col items-center justify-start mt-[20vh]">
      {/* 필터링 버튼 */}
      <div className="relative flex flex-row w-full justify-start ml-[5vw]">
        {/* 배경 이미지 */}
        <img
          src="/images/main/filter.png"
          alt="filter"
          className="w-[35rem] h-[8rem] object-center"
        />

        {/* 텍스트 오버레이 */}
        <div className="absolute top-[1.2rem] left-0 flex flex-row items-center justify-start">
          <span
            onClick={() => sortAscending()}
            className="text-white text-[2.5rem] font-[AppleExtraBold] ml-[4rem] cursor-pointer"
          >
            Earlier
          </span>
          <span
            onClick={() => sortDescending()}
            className="text-white text-[2.5rem] font-[AppleExtraBold] ml-[8.5rem] cursor-pointer"
          >
            Later
          </span>
        </div>
      </div>

      <div className="w-full relative">
        {/* 좌우 버튼 */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-[#1f25c0] bg-opacity-80 px-3 py-1 rounded-full shadow cursor-pointer"
        >
          ◀
        </button>

        {/* 아카이브 이미지 컬렉션 */}
        <section
          ref={scrollRef}
          aria-label="Anemoia Archive"
          className="w-full flex ml-[3vw] justify-start overflow-x-scroll scroll-smooth scrollbar-none pr-[20vw]"
        >
          <MovieBox sortDirection={sortDirection} />
        </section>

        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-[#1f25c0] bg-opacity-80 px-3 py-1 rounded-full shadow cursor-pointer"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default MovieSlider;
