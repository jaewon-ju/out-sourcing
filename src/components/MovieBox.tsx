import MovieImage from "./MovieImage";
import { useSelector } from "react-redux";
import { RootState } from "../store/index";

const MovieBox = () => {
  const pages = ["nct", "nct", "nct", "nct"];
  const { home } = useSelector((state: RootState) => state.nctContent);

  return (
    <div className="flex flex-row gap-[2vw] shadow-xl/30">
      {pages.map((page) => (
        <div className="flex flex-col items-center w-[30vw] bg-white rounded-3xl">
          <MovieImage key={page} page={page} />
          <div className="flex flex-row w-full">
            {/* 흰색 배경 + 텍스트 */}
            <div className="flex flex-col w-[50%]">
              <div className="text-[2vh] font-[Apple] mt-[1vh] pl-[1vw] text-left w-full">
                {home.title}
              </div>
              <div className="text-[2vh] font-[Apple] mt-[1vh] pl-[1vw] text-left w-full">
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
          <div className="flex flex-row w-full mt-[1vh] bg-blue-400 rounded-bl-3xl rounded-br-3xl">
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
