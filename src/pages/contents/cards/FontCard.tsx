import { NCTFont } from "../../../store/slices/nctContentSlice";

interface FontCardProps {
  singerName: string;
  font: NCTFont;
}

const FontCard = ({ singerName, font }: FontCardProps) => {
  console.log(singerName);
  return (
    <div id="FontCards" className={`flex flex-col gap-4 w-[80%]`}>
      {/* 첫번째 카드 */}
      <div className="border border-black">
        {/* Header */}
        <div className="bg-[#A2C7E9] text-black text-xl text-left font-bold px-4 py-2">
          {font.title[0]}
        </div>

        <div id="except-title" className="flex flex-row gap-[0.5rem]">
          {/* Image col */}
          <div className="flex flex-col p-[0.5rem] w-full">
            <div className="flex flex-col items-start justify-center">
              {/* 기본 이미지 */}
              <img
                src={font.image[0][0]}
                className={`w-full h-auto object-cover`}
              />

              <div className="flex flex-row gap-[0.5rem] w-full">
                <div className="whitespace-pre-line mt-[0.5rem]">
                  {font.description[0]}
                </div>
              </div>
              <div className="flex flex-row gap-[0.5rem] w-full overflow-hidden">
                <img
                  src={font.image[0][1]}
                  className="max-w-[40%]  h-auto object-contain"
                  alt="image1"
                />
                <img
                  src={font.image[0][2]}
                  className="max-w-[40%] h-auto object-contain"
                  alt="image2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 두번째 카드 */}
      <div className="border border-black">
        {/* Header */}
        <div className="bg-[#A2C7E9] text-black text-xl text-left font-bold px-4 py-2">
          {font.title[1]}
        </div>

        <div id="except-title" className="flex flex-row gap-[0.5rem]">
          {/* Image col */}
          <div className="flex flex-col p-[0.5rem] w-full">
            <div className="flex flex-col items-start justify-center">
              {/* 기본 이미지 */}
              <img
                src={font.image[1][0]}
                className={`w-full h-auto object-cover`}
              />

              <div className="flex flex-row gap-[0.5rem] w-full">
                <div className="whitespace-pre-line mt-[0.5rem]">
                  {font.description[1]}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FontCard;
