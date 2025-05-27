import MovieImage from "./MovieImage";
import { useSelector } from "react-redux";
import { RootState } from "../store/index";

const MovieBox = ({ sortDirection }: { sortDirection: string }) => {
  const { home: nctHome } = useSelector((state: RootState) => state.nctContent);
  const { home: dummyHome } = useSelector(
    (state: RootState) => state.dummyContent
  );

  // home.year로 아래의 콘텐츠 정렬
  // 각 가수의 home을 담고 있는 배열이 필요함.
  const homeArray = [nctHome, nctHome, dummyHome, dummyHome];
  if (sortDirection === "ASC") {
    homeArray.sort((a, b) => a.year - b.year);
  } else {
    homeArray.sort((a, b) => b.year - a.year);
  }

  return (
    <div className="flex flex-row gap-[1vw] shadow-xl/30">
      {homeArray.map((home) => (
        <div className="flex flex-col items-center w-[25vw] bg-white rounded-3xl">
          <MovieImage key={home.singer} page={home.singer} />
          <div className="flex flex-row w-full">
            {/* 흰색 배경 + 텍스트 */}
            <div className="flex flex-col w-[50%]">
              <div className="text-[2vh] font-[AppleExtraBold] font-bold mt-[1vh] pl-[1vw] text-left w-full text-[#0000ee]">
                {home.title}
              </div>
              <div className="text-[2vh] font-[Apple] mt-[1vh] pl-[1vw] text-left w-full text-[#0000ee]">
                {home.groupName}
              </div>
            </div>
            <div className="flex flex-col w-[50%]">
              <div className="text-[2vh] font-[Apple] mt-[1vh] pr-[1vw] text-right w-full">
                {home.year}
              </div>
            </div>
          </div>

          {/* 태그 */}
          <div className="flex flex-row w-full mt-[1vh] bg-[#0000ee] rounded-bl-3xl rounded-br-3xl text-white">
            {home.tags.map((tag) => (
              <span
                key={tag}
                className="text-[2vh] font-[Apple] pl-[1vw] rounded-bl-3xl rounded-br-3xl"
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

export default MovieBox;
