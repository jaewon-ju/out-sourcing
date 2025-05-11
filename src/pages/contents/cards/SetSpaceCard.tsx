import { NCTSetSpace } from "../../../store/slices/nctContentSlice";
import { useState } from "react";
interface SetSpaceCardProps {
  singerName: string;
  setSpace: NCTSetSpace;
}

const SetSpaceCard = ({ singerName, setSpace }: SetSpaceCardProps) => {
  console.log(singerName);
  const [isHovered, setIsHovered] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  return (
    <div id="SetSpaceCards" className={`flex flex-col gap-4 w-[80%]`}>
      {[0, 1, 2, 3, 4].map((index) => (
        <div className="border border-black">
          {/* Header */}
          <div className="bg-[#A2C7E9] text-black text-xl text-left font-bold px-4 py-2">
            {setSpace.title[index]}
          </div>

          <div id="except-title" className="flex flex-row gap-[0.5rem]">
            {/* Image col */}
            <div className="flex flex-col p-[0.5rem] w-full">
              <div className="relative flex flex-col items-start justify-center">
                {/* 기본 이미지 */}
                <img
                  src={setSpace.image[index]}
                  className={`w-full h-auto object-cover absolute top-0 left-0 transition-opacity duration-300 
                  ${isHovered[index] ? "opacity-0" : "opacity-100"}
                `}
                />

                {/* 호버 이미지 */}
                <img
                  src={setSpace.hoverImage[index]}
                  className={`w-full h-auto object-cover transition-opacity duration-300 
                  ${isHovered[index] ? "opacity-100" : "opacity-0"}
                `}
                />

                <div className="flex flex-row gap-[0.5rem] w-full">
                  <div className="w-[80%] whitespace-pre-line mt-[0.5rem]">
                    {setSpace.description[index]}
                  </div>
                  <div className="w-[20%] mt-[0.5rem]">
                    <button
                      className="
                  float-right 
                  h-[1.5rem] 
                  bg-[#e9e9e9] 
                  border-1 border-black rounded-md 
                  p-[0.5rem]
                  flex items-center justify-center
                  hover:bg-[#d9d9d9]
                  "
                      onMouseEnter={() =>
                        setIsHovered((prev) => {
                          const newHover = [...prev];
                          newHover[index] = true;
                          return newHover;
                        })
                      }
                      onMouseLeave={() =>
                        setIsHovered((prev) => {
                          const newHover = [...prev];
                          newHover[index] = false;
                          return newHover;
                        })
                      }
                    >
                      Reality
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SetSpaceCard;
