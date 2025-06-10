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
  const [isClicked, setIsClicked] = useState(false);

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

  const handleClick = () => {
    setIsClicked(true);
  };

  const closePopup = () => setIsClicked(false);

  return (
    <>
      <div id="FashionCards" className={`flex flex-col gap-4 w-[90%]`}>
        {/* 첫번째 카드 */}
        <div ref={firstCardRef} className="border-[0.1vw] border-black">
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
            {fashion.title[0]}
          </div>

          <div id="except-title" className="flex flex-row gap-[1.2vw]">
            {/* Image col */}
            <div className="flex flex-col pl-[1.2vw] pt-[1.2vw] pb-[1.2vw] w-1/2">
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
                <p className="text-xs mt-[0.25vh] text-[0.8vw]">
                  {fashion.subDescription[0]}
                </p>
                <p className="mt-[2vh] text-[1.2vw]">{fashion.timeStamp[0]}</p>
                <button
                  className="
              mb-[1vh] border border-black 
              px-[1vw] py-[0.5vh] mt-[1vh] text-[1.2vw]
              cursor-pointer
              bg-[#e8e8e8]"
                  style={{
                    boxShadow: "inset 0 0 0.1vw 0.1vw rgba(0, 0, 0, 0.3)",
                  }}
                  onClick={handleClick}
                >
                  Add to Memory
                </button>
              </div>
            </div>

            {/* Image col */}
            <div className="flex flex-col pr-[1.2vw] pt-[1.2vw] pb-[1.2vw] w-1/2">
              <div className="flex flex-col items-start justify-center">
                <img
                  src={fashion.image[0][1]}
                  alt={fashion.description[1]}
                  className="w-full h-auto object-cover mb-2"
                />
                <p className="text-[0.8vw] text-left whitespace-pre-line">
                  {fashion.description[0]}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 두번째 카드 */}
        <div ref={secondCardRef} className="border-[0.1vw] border-black">
          {/* Header */}
          <div
            className="bg-[#A2C7E9] text-[2vh] h-[5vh] flex items-center justify-start
        text-black text-left font-[AppleBold] font-bold px-[1vw] py-[0.5vh]
            bg-gradient-to-b
    from-[#aaedff]
    to-[#599adc]"
          >
            {fashion.title[1]}
          </div>

          <div id="except-title" className="flex flex-row gap-[1.2vw]">
            {/* Image col */}
            <div className="flex flex-col pl-[1.2vw] pt-[1.2vw] pb-[1.2vw] w-1/2">
              <div className="flex flex-col items-start justify-center">
                <img
                  src={fashion.image[1][0]}
                  alt={fashion.description[1]}
                  className="w-full h-auto object-cover mb-2"
                />
                <p className="font-[AppleBold] font-bold text-left text-[1.5vw]">
                  {fashion.subTitle[1]}
                </p>
                <p className="text-xs mt-[0.25vh] text-[0.8vw]">
                  {fashion.subDescription[1]}
                </p>
                <p className="mt-[2vh] text-[1.2vw]">{fashion.timeStamp[1]}</p>
                <button
                  className="
                mb-[1vh] border 
                border-black px-[1vw] py-[0.5vh] mt-[1vh] text-[1.2vw]
                cursor-pointer
                bg-[#e8e8e8]"
                  style={{
                    boxShadow: "inset 0 0 0.1vw 0.1vw rgba(0, 0, 0, 0.3)",
                  }}
                  onClick={handleClick}
                >
                  Add to Memory
                </button>
              </div>
            </div>

            {/* Image col */}
            <div className="flex flex-col pr-[1.2vw] pt-[1.2vw] pb-[1.2vw] w-1/2">
              <div className="flex flex-col items-start justify-center">
                <img
                  src={fashion.image[1][1]}
                  alt={fashion.description[1]}
                  className="w-full h-auto object-cover mb-2"
                />
                <p className="text-[0.8vw] text-left whitespace-pre-line">
                  {fashion.description[1]}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3,4,5,6 카드 */}
        {[3, 4, 5, 6].map((index) => (
          <div key={index} className="border-[0.1vw] border-black">
            {/* Header */}
            <div
              className="bg-[#A2C7E9] text-[2vh] h-[5vh] flex items-center justify-start
        text-black text-left font-[AppleBold] font-bold px-[1vw] py-[0.5vh]
            bg-gradient-to-b
    from-[#aaedff]
    to-[#599adc]"
            >
              {fashion.title[index - 1]}
            </div>

            <div id="except-title" className="flex flex-row gap-[1.2vw]">
              {/* Image col */}
              <div className="flex flex-col pl-[1.2vw] pt-[1.2vw] pb-[1.2vw] w-1/2">
                <div className="flex flex-col items-start justify-center">
                  <img
                    src={fashion.image[index - 1][0]}
                    alt={fashion.description[index - 1]}
                    className="w-full h-auto object-cover mb-2"
                  />
                  <p className="font-[AppleBold] font-bold text-left text-[1.5vw]">
                    {fashion.subTitle[index - 1]}
                  </p>
                  <p className="text-xs mt-[0.25vh] text-[0.8vw]">
                    {fashion.subDescription[index - 1]}
                  </p>
                  <p className="mt-[2vh] text-[1.2vw]">
                    {fashion.timeStamp[index - 1]}
                  </p>
                  <button
                    className="
                mb-[1vh] border 
                border-black px-[1vw] py-[0.5vh] mt-[1vh] text-[1.2vw]
                cursor-pointer
                bg-[#e8e8e8]"
                    style={{
                      boxShadow: "inset 0 0 0.1vw 0.1vw rgba(0, 0, 0, 0.3)",
                    }}
                    onClick={handleClick}
                  >
                    Add to Memory
                  </button>
                </div>
              </div>

              {/* Image col */}
              <div className="flex flex-col pr-[1.2vw] pt-[1.2vw] pb-[1.2vw] w-1/2">
                <div className="flex flex-col items-start justify-center">
                  <img
                    src={fashion.image[index - 1][1]}
                    alt={fashion.description[index - 1]}
                    className="w-full h-auto object-cover mb-2"
                  />
                  <p className="text-[0.8vw] text-left whitespace-pre-line">
                    {fashion.description[index - 1]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        {isClicked && (
          <div className="fixed inset-0 bg-opacity-50 flex flex-col items-center justify-center z-50">
            <div className="bg-white w-[40%] border border-black">
              <div className="bg-[#A2C7E9] m-[1vw] border border-black pt-[4vh] pb-[4vh] flex flex-col items-center justify-center">
                <img
                  src="/images/memory.png"
                  alt="memory"
                  className="w-[90%] h-auto rounded"
                />
                <button
                  onClick={closePopup}
                  className="w-[10vw] h-[2vw] bg-[#e8e8e8] text-black border border-black mt-[4vh] cursor-pointer"
                >
                  글로 되돌아가기
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FashionCard;
