import { Direction } from "../../../store/slices/riizeContentSlice";

interface DirectionCardProps {
  singerName: string;
  direction: Direction;
}

const DirectionCard = ({ singerName, direction }: DirectionCardProps) => {
  console.log(singerName);
  return (
    <div id="DirectionCards" className={`flex flex-col gap-4 w-[90%]`}>
      {direction.title.map((title, index) => (
        <div key={index} className="border-[0.1vw] border-black">
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
            {title}
          </div>

          <div id="except-title" className="flex flex-row gap-[1vh]">
            {/* Image col */}
            <div className="flex flex-col p-[1vw] w-full">
              <div className="flex flex-col items-start justify-center">
                {/* 기본 이미지 */}
                <img
                  src={direction.image[index][0]}
                  className={`w-full h-auto object-cover`}
                />

                <div className="flex flex-row gap-[1vh] w-full">
                  <div className="whitespace-pre-line mt-[1vh] text-[1vw]">
                    {direction.description[index]}
                  </div>
                </div>
                <div className="flex flex-row gap-[1vh] w-[100%] mt-[1vh]">
                  <img
                    src={direction.image[index][1]}
                    className={`w-[100%] h-auto object-cover`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DirectionCard;
