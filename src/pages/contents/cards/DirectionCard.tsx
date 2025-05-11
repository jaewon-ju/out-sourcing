import { NCTDirection } from "../../../store/slices/nctContentSlice";

interface DirectionCardProps {
  singerName: string;
  direction: NCTDirection;
}

const DirectionCard = ({ singerName, direction }: DirectionCardProps) => {
  console.log(singerName);
  return (
    <div id="DirectionCards" className={`flex flex-col gap-4 w-[80%]`}>
      {/* 첫번째 카드 */}
      <div className="border border-black">
        {/* Header */}
        <div className="bg-[#A2C7E9] text-black text-xl text-left font-bold px-4 py-2">
          {direction.title[0]}
        </div>

        <div id="except-title" className="flex flex-row gap-[0.5rem]">
          {/* Image col */}
          <div className="flex flex-col p-[0.5rem] w-full">
            <div className="flex flex-col items-start justify-center">
              {/* 기본 이미지 */}
              <img
                src={direction.image[0][0]}
                className={`w-full h-auto object-cover`}
              />

              <div className="flex flex-row gap-[0.5rem] w-full">
                <div className="whitespace-pre-line mt-[0.5rem]">
                  {direction.description[0]}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 두번째 카드 */}
      <div className="border border-black">
        {/* Header */}
        <div className="bg-[#A2C7E9] text-black text-xl text-left font-bold px-4 py-2">
          {direction.title[0]}
        </div>

        <div id="except-title" className="flex flex-row gap-[0.5rem]">
          {/* Image col */}
          <div className="flex flex-col p-[0.5rem] w-full">
            <div className="w-[100%] flex flex-col items-start justify-center">
              {/* 기본 이미지 */}
              <img
                src={direction.image[1][0]}
                className={`w-[100%] h-auto object-cover`}
              />

              <div className="flex flex-row gap-[0.5rem] w-full">
                <div className="whitespace-pre-line mt-[0.5rem]">
                  {direction.description[1]}
                </div>
              </div>
              <div className="flex flex-row gap-[0.5rem] w-[80%] mt-[0.5rem]">
                <img
                  src={direction.image[1][1]}
                  className={`w-[30%] h-auto object-cover`}
                />
                <img
                  src={direction.image[1][2]}
                  className={`w-[70%] h-auto object-cover`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 세번째 카드 */}
      <div className="border border-black">
        {/* Header */}
        <div className="bg-[#A2C7E9] text-black text-xl text-left font-bold px-4 py-2">
          {direction.title[2]}
        </div>

        <div id="except-title" className="flex flex-row gap-[0.5rem]">
          {/* Image col */}
          <div className="flex flex-col p-[0.5rem] w-full">
            <div className="flex flex-col items-start justify-center">
              {/* 기본 이미지 */}
              <img
                src={direction.image[2][0]}
                className={`w-full h-auto object-cover`}
              />

              <div className="flex flex-row gap-[0.5rem] w-full">
                <div className="whitespace-pre-line mt-[0.5rem]">
                  {direction.description[2]}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 네번째 카드 */}
      <div className="border border-black">
        {/* Header */}
        <div className="bg-[#A2C7E9] text-black text-xl text-left font-bold px-4 py-2">
          {direction.title[3]}
        </div>

        <div id="except-title" className="flex flex-row gap-[0.5rem]">
          {/* Image col */}
          <div className="flex flex-col p-[0.5rem] w-full">
            <div className="w-[100%] flex flex-col items-start justify-center">
              {/* 기본 이미지 */}
              <img
                src={direction.image[3][0]}
                className={`w-[100%] h-auto object-cover`}
              />

              <div className="flex flex-row gap-[0.5rem] w-[100%]">
                <div className="whitespace-pre-line mt-[0.5rem]">
                  {direction.description[3]}
                </div>
              </div>
              <div className="flex flex-row gap-[0.5rem] w-[100%] mt-[0.5rem]">
                <img
                  src={direction.image[3][1]}
                  className={`w-[30%] h-auto object-cover`}
                />
                <img
                  src={direction.image[3][2]}
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
