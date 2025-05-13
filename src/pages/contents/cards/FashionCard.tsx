import { useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
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
  const [imageLoaded, setImageLoaded] = useState(false); // 이미지 로딩 상태 추적

  const handleImageLoad = () => {
    setImageLoaded(true); // 이미지가 로드되면 상태 변경
  };

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
  }, [dispatch, singerName, imageLoaded]);

  return (
    <div id="FashionCards" className={`flex flex-col gap-4 w-[90%]`}>
      {/* 첫번째 카드 */}
      <div ref={firstCardRef} className="border border-black">
        {/* Header */}
        <div className="bg-[#A2C7E9] text-[2vh] text-black text-left font-[AppleBold] font-bold px-[1vw] py-[0.5vh]">
          {fashion.title[0]}
        </div>

        <div id="except-title" className="flex flex-row gap-[0.5vh]">
          {/* Image col */}
          <div className="flex flex-col pl-[0.5vw] pt-[0.5vh] pb-[0.5vh] w-1/2">
            <div className="flex flex-col items-start justify-center">
              <img
                src={fashion.image[0][0]}
                alt={fashion.description[0]}
                className="w-full h-auto object-cover mb-2"
                onLoad={handleImageLoad} // 이미지 로딩 완료 시 호출
              />
              <p className="font-[AppleBold] font-bold text-left text-[1.5vw]">
                {fashion.subTitle[0]}
              </p>
              <p className="text-xs mt-[0.25vh] text-[1.2vw]">
                {fashion.subDescription[0]}
              </p>
              <p className="mt-[2vh] text-[1.2vw]">{fashion.timeStamp[0]}</p>
              <button className="mb-[1vh] border border-black px-[1vw] py-[0.5vh] mt-[1vh] text-[1.2vw]">
                Add to Memory
              </button>
            </div>
          </div>

          {/* Image col */}
          <div className="flex flex-col pr-[0.5vw] pt-[0.5vh] pb-[0.5vh] w-1/2">
            <div className="flex flex-col items-start justify-center">
              <img
                src={fashion.image[0][1]}
                alt={fashion.description[1]}
                className="w-full h-auto object-cover mb-2"
              />
              <p className="text-[1vw] text-left whitespace-pre-line">
                {fashion.description[0]}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 두번째 카드 */}
      <div ref={secondCardRef} className="border border-black">
        {/* Header */}
        <div className="bg-[#A2C7E9] text-[2vh] text-black text-left font-[AppleBold] font-bold px-[1vw] py-[0.5vh]">
          {fashion.title[1]}
        </div>

        <div id="except-title" className="flex flex-row gap-[0.5vh]">
          {/* Image col */}
          <div className="flex flex-col pl-[0.5vw] pt-[0.5vh] pb-[0.5vh] w-1/2">
            <div className="flex flex-col items-start justify-center">
              <img
                src={fashion.image[1][0]}
                alt={fashion.description[1]}
                className="w-full h-auto object-cover mb-2"
              />
              <p className="font-[AppleBold] font-bold text-left text-[1.5vw]">
                {fashion.subTitle[1]}
              </p>
              <p className="text-xs mt-[0.25vh] text-[1.2vw]">
                {fashion.subDescription[1]}
              </p>
              <p className="mt-[2vh] text-[1.2vw]">{fashion.timeStamp[1]}</p>
              <button className="mb-[1vh] border border-black px-[1vw] py-[0.5vh] mt-[1vh] text-[1.2vw]">
                Add to Memory
              </button>
            </div>
          </div>

          {/* Image col */}
          <div className="flex flex-col pr-[0.5vw] pt-[0.5vh] pb-[0.5vh] w-1/2">
            <div className="flex flex-col items-start justify-center">
              <img
                src={fashion.image[1][1]}
                alt={fashion.description[1]}
                className="w-full h-auto object-cover mb-2"
              />
              <p className="text-[1vw] text-left whitespace-pre-line">
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
