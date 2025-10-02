import MovieImage from "./MovieImage";

const MovieBox = ({ sortDirection }: { sortDirection: string }) => {
  // home.year로 아래의 콘텐츠 정렬
  // 각 가수의 home을 담고 있는 배열이 필요함.
  const homeArray = [
    nct,
    weekend,
    butterflies,
    rightNow,
    lucy,
    bubbleGum,
    love119,
    comeOver,
    firstMeeting,
    dynamite,
  ];
  if (sortDirection === "ASC") {
    homeArray.sort((a, b) => a.year - b.year);
  } else {
    homeArray.sort((a, b) => b.year - a.year);
  }

  return (
    <div className="flex flex-row gap-[1vw] shadow-xl/30">
      {homeArray.map((home) => (
        <div className="flex flex-col items-center w-[25vw] bg-white rounded-3xl h-fit">
          <MovieImage key={home.singer} page={home.singer} />
          <div className="flex flex-row w-full">
            {/* 흰색 배경 + 텍스트 */}
            <div className="flex flex-col w-[70%]">
              <div
                className={`${
                  home.title.length > 10 ? "text-[2.5vh]" : "text-[3vh]"
                } 
                h-[3vh]
                font-[AppleExtraBold] font-bold mt-[1vh] pl-[1vw] text-left w-full text-[#0000ee]`}
              >
                {home.title}
              </div>
              <div className="text-[2vh] font-[Apple] mt-[0.5vh] pl-[1vw] text-left w-full text-[#0000ee]">
                {home.groupName}
              </div>
            </div>
            <div className="flex flex-col w-[30%]">
              <div className="text-[2vh] font-[Apple] mt-[1vh] pr-[1vw] text-right w-full">
                {home.year}
              </div>
            </div>
          </div>

          {/* 태그 */}
          <div className="flex flex-row w-full mt-[2vh] h-[4vh] bg-[#0000ee] rounded-bl-2xl rounded-br-2xl text-white items-center">
            {home.tags.map((tag) => (
              <span
                key={tag}
                className="text-[2vh] font-[Apple] pl-[1vw] rounded-bl-2xl rounded-br-2xl"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

type movieSliderType = {
  singer: string;
  title: string;
  groupName: string;
  tags: string[];
  year: number;
};

const nct: movieSliderType = {
  singer: "nct",
  title: "Steady",
  groupName: "NCT WISH",
  tags: ["Japan", "2000s", "School", "First Love"],
  year: 2025, // 2024년 9월 24일 발매
};

const weekend: movieSliderType = {
  singer: "taeyeon",
  title: "Weekend",
  groupName: "태연",
  tags: ["pastel", "retro travel", "early 2000s", "daydream"],
  year: 2025, // 2021년 7월 6일 발매
};

const butterflies: movieSliderType = {
  singer: "Hearts2Hearts",
  title: "Butterflies",
  groupName: "하츠투하츠",
  tags: ["first love", "spring fever", "camcorder", "School"],
  year: 2025, // 2025년 2월 24일 발매 (싱글 앨범 'The Chase'의 B-side)
};

const rightNow: movieSliderType = {
  singer: "NewJeans",
  title: "Right Now",
  groupName: "New Jeans",
  tags: ["digital youth", "early 2000s", "VHS", "city pop"],
  year: 2024, // 2024년 6월 17일 뮤직비디오 선공개, 6월 21일 싱글 앨범 발매
};

const lucy: movieSliderType = {
  singer: "lucy",
  title: "잠깨",
  groupName: "루시",
  tags: ["VHS", "dreamy", "morning light", "lo-fi"],
  year: 2025, // 2025년 3월 27일 발매
};

const bubbleGum: movieSliderType = {
  singer: "NewJeans2",
  title: "Bubble Gum",
  groupName: "New Jeans",
  tags: ["1990s", "slumber party", "y2k", "girlhood"],
  year: 2024, // 2024년 5월 24일 발매
};

const love119: movieSliderType = {
  singer: "RIIZE",
  title: "Love 119",
  groupName: "라이즈",
  tags: ["late 1990s", "School", "youth chaos", "first love"],
  year: 2024, // 2024년 1월 5일 발매
};

const comeOver: movieSliderType = {
  singer: "Lesserafim",
  title: "Come Over",
  groupName: "르세라핌",
  tags: ["1960s", "millennial pink", "sleepover", "TV static"],
  year: 2025, // 2025년 3월 31일 발매
};

const firstMeeting: movieSliderType = {
  singer: "TWS",
  title: "첫 만남은 계획대로 되지 않아",
  groupName: "투어스",
  tags: ["School", "early 2000s", "awkward love"],
  year: 2024, // 2024년 1월 22일 발매
};

const dynamite: movieSliderType = {
  singer: "BTS",
  title: "Dynamite",
  groupName: "BTS",
  tags: ["disco fever", "1970s", "roller rink", "color pop"],
  year: 2020, // 2020년 8월 21일 발매
};

export default MovieBox;
