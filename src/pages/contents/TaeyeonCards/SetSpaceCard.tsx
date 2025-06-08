import { TaeyeonSetSpace } from "../../../store/slices/taeyeonSlice";
import { useState } from "react";
interface SetSpaceCardProps {
  singerName: string;
  setSpace: TaeyeonSetSpace;
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
    <div id="SetSpaceCards" className={`flex flex-col gap-4 w-[90%]`}>
      {[0, 1].map((index) => (
        <div className="border-[0.1vw] border-black">
          {/* Header */}
          <div
            className="
    h-[5vh] flex items-center justify-start
    text-black text-left font-[AppleBold] font-bold
    px-[1vw] py-[0.5vh]
      text-[2vh]

    bg-gradient-to-b
    from-[#aaedff]
    to-[#599adc]
  "
          >
            {setSpace.title[index]}
          </div>

          <div id="except-title" className="flex flex-row gap-[1vh]">
            {/* Image col */}
            <div className="flex flex-col p-[1vw] w-full">
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

                <div className="flex flex-row gap-[1vh] w-full">
                  <div className="w-[80%] whitespace-pre-line mt-[1vh] text-[0.9vw]">
                    {setSpace.description[index]}
                  </div>
                  <div className="w-[20%] mt-[1vh]">
                    <button
                      className="
                      font-[AppleBold]
                      text-[1.2vw]
                  float-right 
                  h-[3vh] 
                  bg-[#e9e9e9] 
                  border-1 border-black rounded-md 
                  p-[0.5vw]
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
