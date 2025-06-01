import { useEffect, useRef, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const nicknames = ["고양이", "노스텔", "감성인", "무지개", "기억상자"];
const profileImages = [
  "/survey/face/face1.png",
  "/survey/face/face2.png",
  "/survey/face/face3.png",
  "/survey/face/face4.png",
  "/survey/face/face5.png",
  "/survey/face/face6.png",
  "/survey/face/face7.png",
  "/survey/face/face8.png",
  "/survey/face/face9.png",
  "/survey/face/face10.png",
  "/survey/face/face11.png",
  "/survey/face/face12.png",
  "/survey/face/face13.png",
  "/survey/face/face14.png",
  "/survey/face/face15.png",
  "/survey/face/face16.png",
];

function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function CommentBox({ title }: { title: string }) {
  const [entries, setEntries] = useState<any[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  const fetchEntries = async () => {
    const snapshot = await getDocs(collection(db, "surveys"));
    const data = snapshot.docs.map((doc) => doc.data());
    setEntries(data.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds));
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const scrollByAmount = (amount: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ top: amount, behavior: "smooth" });
    }
  };

  // 동기화용: 스크롤 시 thumb 위치 조정
  const handleScroll = () => {
    const scrollEl = scrollRef.current;
    const thumbEl = thumbRef.current;
    if (!scrollEl || !thumbEl) return;

    const { scrollTop, scrollHeight, clientHeight } = scrollEl;
    const thumbHeightRatio = clientHeight / scrollHeight;
    const thumbTop = scrollTop * thumbHeightRatio;
    thumbEl.style.top = `${thumbTop}px`;
  };

  useEffect(() => {
    const scrollEl = scrollRef.current;
    const thumbEl = thumbRef.current;
    if (!scrollEl || !thumbEl) return;

    const updateThumbHeight = () => {
      const { scrollHeight, clientHeight } = scrollEl;
      const ratio = clientHeight / scrollHeight;
      const thumbHeight = clientHeight * ratio;

      thumbEl.style.height = `${thumbHeight}px`;
      console.log(thumbHeight);
    };

    updateThumbHeight();
    window.addEventListener("resize", updateThumbHeight); // 창 크기 변경 대응
    return () => window.removeEventListener("resize", updateThumbHeight);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-[40vw] mt-[5vh] mb-[10vh] relative">
      {/* 타인의 기억 */}
      <div className="flex items-center justify-start w-full text-[1.2vw] font-[Bodoni]">
        <img
          src="/survey/person.png"
          alt="person"
          className="w-[7vw] h-[7vw]"
        />
        {title}
      </div>

      {/* 댓글 박스 + 스크롤바 */}
      <div className="relative w-full flex flex-row">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="
          space-y-[1vh] h-[50vh] overflow-y-scroll w-full bg-white p-[2vh] pr-[3vw]
          scrollbar-none"
        >
          {entries.map((entry, idx) => {
            const nickname =
              getRandomItem(nicknames) + Math.floor(Math.random() * 1000);
            const profile = getRandomItem(profileImages);
            return (
              <div
                key={idx}
                className="flex flex-col items-start gap-[2vh] rounded-md bg-white bg-opacity-80 mb-[5vh]"
              >
                <div className="flex flex-row items-center justify-between px-[1vw] w-[90%] bg-[url('/survey/bar.png')] aspect-[1829/160] bg-contain bg-center bg-no-repeat">
                  <div className="text-[1.2vw] font-[Bodoni]">{`no.${
                    idx + 1
                  } ${nickname}`}</div>
                  <div className="text-[1.2vw] font-[Bodoni]">{`<${entry.createdAt
                    .toDate()
                    .toLocaleString()}>`}</div>
                </div>
                <div className="flex flex-row items-start gap-4 w-[90%]">
                  <img
                    src={profile}
                    alt={profile}
                    className="w-[5vw] h-[5vw]"
                  />
                  <div className="text-[1.2vw] font-[Bodoni]">
                    {entry.opinion}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 커스텀 스크롤바 */}
        <div className="ml-[1vw] h-[50vh] flex flex-col items-center justify-between">
          {/* 위쪽 화살표 */}
          <img
            src="/survey/bar_top.png"
            onClick={() => scrollByAmount(-50)}
            className="w-[2vw] h-[2vw]"
          />

          {/* 막대 전체 */}
          <div className="relative w-[2vw] flex-1 bg-[#D8E9F9] border-1 border-[#2b61a7]">
            <div
              ref={thumbRef}
              className="absolute w-full bg-[#acceea] cursor-pointer border-b-1 border-t-1 border-[#2b61a7]"
            />
          </div>

          {/* 아래쪽 화살표 */}
          <img
            src="/survey/bar_bottom.png"
            onClick={() => scrollByAmount(50)}
            className="w-[2vw] h-[2vw]"
          />
        </div>
      </div>
    </div>
  );
}
