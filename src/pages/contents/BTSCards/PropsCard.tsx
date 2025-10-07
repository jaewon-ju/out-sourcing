import { useState, useRef, useEffect } from "react";
import { Props } from "../../../store/slices/btsContentSlice";

interface PropsCardProps {
  singerName: string;
  props: Props;
  setPropsHeight: (height: number) => void;
}

const PropsCard = ({ singerName, props, setPropsHeight }: PropsCardProps) => {
  const [popupData, setPopupData] = useState<{
    image: string;
    title: string;
    description: string;
  } | null>(null);

  const firstCardRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  useEffect(() => {
    const calcHeight = () => {
      const first = firstCardRef.current?.offsetHeight || 0;

      const rootFontSize = parseFloat(
        getComputedStyle(document.documentElement).fontSize
      );

      const gapInRem = 4;
      const gapInPx = gapInRem * rootFontSize;

      const totalHeight = first + gapInPx;
      setPropsHeight(totalHeight);
    };

    calcHeight();
    window.addEventListener("resize", calcHeight);
    return () => window.removeEventListener("resize", calcHeight);
  }, [singerName, imageLoaded, setPropsHeight]);

  const handleClick = (image: string, title: string, description: string) => {
    setPopupData({ image, title, description });
  };

  const closePopup = () => setPopupData(null);

  return (
    <div id="PropsCards" className={`grid grid-cols-2 gap-4 w-[100%]`}>
      {props.image.map((item, index) => (
        <div
          key={index}
          ref={index === 0 ? firstCardRef : null}
          className={`relative bg-gray-200 flex justify-center items-center aspect-square ${
            index === 0 ? "w-[94%] ml-[1rem]" : "w-[94%] mr-[1rem]"
          }`}
        >
          <h1 className="text-[2vh] font-[AppleNeoB] absolute top-[1rem] left-[1rem]">
            No.{index + 1}
          </h1>
          <img
            src={item.src}
            className="w-[45%] hover:w-[53%] transition-all duration-300"
            onClick={() =>
              handleClick(
                item.detailImage,
                item.detailTitle,
                item.detailDescription
              )
            }
            onLoad={index === 0 ? handleImageLoad : undefined}
          />
        </div>
      ))}

      {popupData && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-[50%] border border-black">
            <div className="bg-[#A2C7E9] m-[1vw] border border-black p-[1vw]">
              <button
                onClick={closePopup}
                className=" w-[1.5vw] h-[1.5vw] mb-[1vh] bg-[url('/images/X.png')] bg-cover bg-center cursor-pointer"
              ></button>
              <img
                src={popupData.image}
                alt={popupData.title}
                className="w-full h-auto rounded mb-[1vh]"
              />
              <h2 className="text-[1.5vw] font-[AppleNeoB] mb-[1vh] mt-[1vh]">
                {popupData.title}
              </h2>
              <p className="text-[1vw]">{popupData.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropsCard;
