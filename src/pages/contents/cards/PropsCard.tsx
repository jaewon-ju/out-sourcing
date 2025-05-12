import { useState, useRef, useEffect } from "react";
import { NCTProps } from "../../../store/slices/nctContentSlice";

interface PropsCardProps {
  singerName: string;
  props: NCTProps;
  setPropsHeight: (height: number) => void;
}

const PropsCard = ({ singerName, props, setPropsHeight }: PropsCardProps) => {
  console.log(singerName);
  const [popupData, setPopupData] = useState<{
    image: string;
    title: string;
    description: string;
  } | null>(null);

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

      // HTML의 font-size 가져오기 (기본적으로 rem = 16px)
      const rootFontSize = parseFloat(
        getComputedStyle(document.documentElement).fontSize
      );

      // gap을 rem 단위로 설정 (예: 3rem)
      const gapInRem = 3; // 예: gap이 3rem이라면
      const gapInPx = gapInRem * rootFontSize; // gap을 px로 변환

      const totalHeight = first + second + gapInPx;
      console.log(totalHeight);
      setPropsHeight(totalHeight);
    };

    calcHeight();
    window.addEventListener("resize", calcHeight); // 반응형 대응
    return () => window.removeEventListener("resize", calcHeight);
  }, [singerName, imageLoaded]);

  const handleClick = (image: string, title: string, description: string) => {
    setPopupData({ image, title, description });
  };

  const closePopup = () => setPopupData(null);

  return (
    <div
      id="PropsCards"
      className={`grid grid-cols-2 gap-4 w-[80%] scroll-y-auto`}
    >
      {/* 첫번째 카드 */}
      <div
        ref={firstCardRef}
        className="relative bg-gray-200 flex justify-center items-center aspect-square"
      >
        <h1 className="text-xl font-semibold absolute top-[1rem] left-[1rem]">
          No.1
        </h1>
        <img
          src={props.image[0].src}
          className="w-[45%] hover:w-[60%] transition-all duration-300"
          onClick={() =>
            handleClick(
              props.image[0].detailImage,
              props.image[0].detailTitle,
              props.image[0].detailDescription
            )
          }
          onLoad={handleImageLoad} // 이미지 로딩 완료 시 호출
        />
      </div>

      {/* 두번째 카드 */}
      <div
        ref={secondCardRef}
        className="relative bg-gray-200 flex justify-center items-center aspect-square"
      >
        <h1 className="text-xl font-semibold absolute top-[1rem] left-[1rem]">
          No.1
        </h1>
        <img
          src={props.image[1].src}
          className="w-[45%] hover:w-[60%] transition-all duration-300"
          onClick={() =>
            handleClick(
              props.image[1].detailImage,
              props.image[1].detailTitle,
              props.image[1].detailDescription
            )
          }
        />
      </div>

      {/* 세번째 카드 */}
      <div className="relative bg-gray-200 flex justify-center items-center aspect-square">
        <h1 className="text-xl font-semibold absolute top-[1rem] left-[1rem]">
          No.1
        </h1>
        <img
          src={props.image[2].src}
          className="w-[60%] hover:w-[70%] transition-all duration-300"
          onClick={() =>
            handleClick(
              props.image[2].detailImage,
              props.image[2].detailTitle,
              props.image[2].detailDescription
            )
          }
        />
      </div>

      {/* 네번째 카드 */}
      <div className="relative bg-gray-200 flex justify-center items-center aspect-square">
        <h1 className="text-xl font-semibold absolute top-[1rem] left-[1rem]">
          No.1
        </h1>
        <img
          src={props.image[3].src}
          className="w-[60%] hover:w-[70%] transition-all duration-300"
          onClick={() =>
            handleClick(
              props.image[3].detailImage,
              props.image[3].detailTitle,
              props.image[3].detailDescription
            )
          }
        />
      </div>

      {/* 팝업 */}
      {popupData && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-[40%] border border-black">
            <div className="bg-[#A2C7E9] m-[0.5rem] border border-black p-4">
              <button
                onClick={closePopup}
                className=" w-[1.5rem] h-[1.5rem] mb-[1rem] text-black text-xl border border-black bg-gray-200 flex justify-center items-center"
              >
                X
              </button>
              <img
                src={popupData.image}
                alt={popupData.title}
                className="w-full h-auto rounded mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{popupData.title}</h2>
              <p className="text-sm">{popupData.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropsCard;
