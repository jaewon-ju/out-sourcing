import { useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { setHeight } from "../../../store/slices/heightSlice";
import { NCTFashion } from "../../../store/slices/nctContentSlice";

interface FashionCardProps {
  singerName: string;
  fashion: NCTFashion;
}

const FashionCard = ({ singerName, fashion }: FashionCardProps) => {
  const dispatch = useDispatch();

  const firstCardRef = useRef<HTMLDivElement>(null);
  const secondCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calcHeight = () => {
      const first = firstCardRef.current?.offsetHeight || 0;
      const second = secondCardRef.current?.offsetHeight || 0;
      const gap = 32; // 예: gap + scrollbox의 py

      const totalHeight = first + second / 2 + gap;
      console.log(totalHeight);
      dispatch(setHeight({ singer: singerName, height: totalHeight }));
    };

    calcHeight();
    window.addEventListener("resize", calcHeight); // 반응형 대응
    return () => window.removeEventListener("resize", calcHeight);
  }, [dispatch, singerName]);

  return (
    <div id="FashionCards" className={`flex flex-col gap-4 w-[80%]`}>
      {/* 첫번째 카드 */}
      <div ref={firstCardRef} className="border border-black">
        {/* Header */}
        <div className="bg-[#A2C7E9] text-black text-xl text-left font-bold px-4 py-2">
          {fashion.title[0]}
        </div>

        <div id="except-title" className="flex flex-row gap-[0.5rem]">
          {/* Image col */}
          <div className="flex flex-col pl-[0.5rem] pt-[0.5rem] pb-[0.5rem] w-1/2">
            <div className="flex flex-col items-start justify-center">
              <img
                src={fashion.image[0][0]}
                alt={fashion.description[0]}
                className="w-full h-auto object-cover mb-2"
              />
              <p className="text-bold font-bold text-left">
                {fashion.subTitle[0]}
              </p>
              <p className="text-xs mt-[0.25rem]">
                {fashion.subDescription[0]}
              </p>
              <p className="mt-[1rem]">{fashion.timeStamp[0]}</p>
              <button className="mb-[1rem] border border-black px-2 py-1 mt-[0.25rem]">
                Add to Memory
              </button>
            </div>
          </div>

          {/* Image col */}
          <div className="flex flex-col pr-[0.5rem] pt-[0.5rem] pb-[0.5rem] w-1/2">
            <div className="flex flex-col items-start justify-center">
              <img
                src={fashion.image[0][1]}
                alt={fashion.description[1]}
                className="w-full h-auto object-cover mb-2"
              />
              <p className="text-sm text-left whitespace-pre-line">
                {fashion.description[0]}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 두번째 카드 */}
      <div ref={secondCardRef} className="border border-black">
        {/* Header */}
        <div className="bg-[#A2C7E9] text-black text-xl text-left font-bold px-4 py-2">
          {fashion.title[1]}
        </div>

        <div id="except-title" className="flex flex-row gap-[0.5rem]">
          {/* Image col */}
          <div className="flex flex-col pl-[0.5rem] pt-[0.5rem] pb-[0.5rem] w-1/2">
            <div className="flex flex-col items-start justify-center">
              <img
                src={fashion.image[1][0]}
                alt={fashion.description[1]}
                className="w-full h-auto object-cover mb-2"
              />
              <p className="text-bold font-bold text-left">
                {fashion.subTitle[1]}
              </p>
              <p className="text-xs mt-[0.25rem]">
                {fashion.subDescription[1]}
              </p>
              <p className="mt-[1rem]">{fashion.timeStamp[1]}</p>
              <button className="mb-[1rem] border border-black px-2 py-1 mt-[0.25rem]">
                Add to Memory
              </button>
            </div>
          </div>

          {/* Image col */}
          <div className="flex flex-col pr-[0.5rem] pt-[0.5rem] pb-[0.5rem] w-1/2">
            <div className="flex flex-col items-start justify-center">
              <img
                src={fashion.image[1][1]}
                alt={fashion.description[1]}
                className="w-full h-auto object-cover mb-2"
              />
              <p className="text-sm text-left whitespace-pre-line">
                {fashion.description[1]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FashionCard;
