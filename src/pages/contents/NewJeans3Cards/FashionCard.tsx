import { useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { setHeight } from "../../../store/slices/heightSlice";
import { Fashion } from "../../../store/slices/newjeans3ContentSlice";

interface FashionCardProps {
  singerName: string;
  fashion: Fashion;
}

const FashionCard = ({ singerName, fashion }: FashionCardProps) => {
  const dispatch = useDispatch();

  const firstCardRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  useEffect(() => {
    const calcHeight = () => {
      const first = firstCardRef.current?.offsetHeight || 0;
      const gap = 32;

      const totalHeight = first * 2 + gap;
      console.log(totalHeight);
      dispatch(setHeight({ singer: singerName, height: totalHeight }));
    };

    calcHeight();
    window.addEventListener("resize", calcHeight);
    return () => window.removeEventListener("resize", calcHeight);
  }, [dispatch, singerName, imageLoaded]);

  const handleClick = () => {
    setIsClicked(true);
  };

  const closePopup = () => setIsClicked(false);

  return (
    <>
      <div
        id="FashionCards"
        className={`flex flex-col gap-4 w-[90%] h-[100%] scrollbar-track-[#CCCCCC]`}
      >
        {fashion.title.map((title, index) => (
          <div
            key={index}
            ref={index === 0 ? firstCardRef : null}
            className="border-[0.1vw] border-black"
          >
            <div
              className="
    h-[5vh] flex items-center justify-start
    text-black text-left font-[AppleNeoB]
    px-[1vw] py-[0.5vh]
    text-[1.7vh]

    bg-gradient-to-b
    from-[#aaedff]
    to-[#599adc]
  "
            >
              {title}
            </div>

            <div id="except-title" className="flex flex-row gap-[1.2vw] ">
              <div className="flex flex-col pl-[1.2vw] pt-[1.2vw] pb-[1.2vw] w-1/2">
                <div className="flex flex-col items-start justify-center">
                  <img
                    src={fashion.image[index][0]}
                    alt={fashion.description[index]}
                    className="w-full h-auto object-cover mb-2"
                    onLoad={index === 0 ? handleImageLoad : undefined}
                  />
                  <p className="font-[AppleNeoB] text-left text-[1vw]">
                    {fashion.subTitle[index]}
                  </p>
                  <p className="text-xs mt-[0.25vh] text-[0.8vw]">
                    {fashion.subDescription[index]}
                  </p>
                  <p className="mt-[2vh] text-[1.2vw]">
                    {fashion.timeStamp[index]}
                  </p>
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

              <div className="flex flex-col pr-[1.2vw] pt-[1.2vw] pb-[1.2vw] w-1/2">
                <div className="flex flex-col items-start justify-center">
                  <img
                    src={fashion.image[index][1]}
                    alt={fashion.description[index]}
                    className="w-full h-auto object-cover mb-2"
                  />
                  <p className="text-[0.8vw] text-left whitespace-pre-line">
                    {fashion.description[index]}
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
