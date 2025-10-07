import { TaeyeonDirection } from "../../../store/slices/taeyeonSlice";

interface DirectionCardProps {
  singerName: string;
  direction: TaeyeonDirection;
}

const DirectionCard = ({ singerName, direction }: DirectionCardProps) => {
  console.log(singerName);
  return (
    <div id="DirectionCards" className={`flex flex-col gap-4 w-[90%]`}>
      {/* 첫번째 카드 */}
      <div className="border-[0.1vw] border-black">
        {/* Header */}
        <div
          className="
    h-[5vh] flex items-center justify-start
    text-black text-left font-[AppleNeoB]
    px-[1vw] py-[0.5vh]
    text-[2vh]

    bg-gradient-to-b
    from-[#aaedff]
    to-[#599adc]
  "
        >
          {direction.title[0]}
        </div>

        <div id="except-title" className="flex flex-row gap-[1vh]">
          {/* Image col */}
          <div className="flex flex-col p-[1vw] w-full">
            <div className="flex flex-col items-start justify-center">
              {/* 기본 이미지 */}
              <img
                src={direction.image[0][0]}
                className={`w-full h-auto object-cover`}
              />

              <div className="flex flex-row gap-[1vh] w-full">
                <div className="whitespace-pre-line mt-[1vh] text-[1vw]">
                  {direction.description[0]}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 두번째 카드 */}
      <div className="border-[0.1vw] border-black">
        {/* Header */}
        <div
          className="
    h-[5vh] flex items-center justify-start
    text-black text-left font-[AppleNeoB]
    px-[1vw] py-[0.5vh]
    text-[2vh]

    bg-gradient-to-b
    from-[#aaedff]
    to-[#599adc]
  "
        >
          {direction.title[1]}
        </div>

        <div id="except-title" className="flex flex-row gap-[1vh]">
          {/* Image col */}
          <div className="flex flex-col p-[1vw] w-full">
            <div className="w-[100%] flex flex-col items-start justify-center">
              {/* 기본 이미지 */}
              <img
                src={direction.image[1][0]}
                className={`w-[100%] h-auto object-cover`}
              />

              <div className="flex flex-row gap-[1vh] w-full">
                <div className="whitespace-pre-line mt-[1vh] text-[1vw]">
                  {direction.description[1]}
                </div>
              </div>
              <div className="flex flex-row gap-[1vh] w-[80%] mt-[1vh]">
                <img
                  src={direction.image[1][1]}
                  className={`w-[80%] h-auto object-cover`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 세번째 카드 */}
      <div className="border-[0.1vw] border-black">
        {/* Header */}
        <div
          className="
    h-[5vh] flex items-center justify-start
    text-black text-left font-[AppleNeoB]
    px-[1vw] py-[0.5vh]
    text-[2vh]

    bg-gradient-to-b
    from-[#aaedff]
    to-[#599adc]
  "
        >
          {direction.title[2]}
        </div>

        <div id="except-title" className="flex flex-row gap-[1vh]">
          {/* Image col */}
          <div className="flex flex-col p-[1vw] w-full">
            <div className="flex flex-col items-start justify-center">
              {/* 기본 이미지 */}
              <img
                src={direction.image[2][0]}
                className={`w-full h-auto object-cover`}
              />

              <div className="flex flex-row gap-[1vh] w-full">
                <div className="whitespace-pre-line mt-[1vh] text-[1vw]">
                  {direction.description[2]}
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-[1vh] w-[80%] mt-[1vh]">
              <img
                src={direction.image[2][1]}
                className={`w-[100%] h-auto object-cover`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 네번째 카드 */}
      <div className="border-[0.1vw] border-black">
        {/* Header */}
        <div
          className="
    h-[5vh] flex items-center justify-start
    text-black text-left font-[AppleNeoB]
    px-[1vw] py-[0.5vh]
    text-[2vh]

    bg-gradient-to-b
    from-[#aaedff]
    to-[#599adc]
  "
        >
          {direction.title[3]}
        </div>

        <div id="except-title" className="flex flex-row gap-[1vh]">
          {/* Image col */}
          <div className="flex flex-col p-[1vw] w-full">
            <div className="w-[100%] flex flex-col items-start justify-center">
              {/* 기본 이미지 */}
              <img
                src={direction.image[3][0]}
                className={`w-[100%] h-auto object-cover`}
              />

              <div className="flex flex-row gap-[1vh] w-[100%]">
                <div className="whitespace-pre-line mt-[1vh] text-[1vw]">
                  {direction.description[3]}
                </div>
              </div>
              <div className="flex flex-row gap-[1vh] w-[100%] mt-[1vh]">
                <img
                  src={direction.image[3][1]}
                  className={`w-[60%] h-auto object-cover`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectionCard;
