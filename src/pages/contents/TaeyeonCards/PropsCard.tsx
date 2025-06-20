import { useState, useRef, useEffect } from "react";
import { TaeyeonProps } from "../../../store/slices/taeyeonSlice";

interface PropsCardProps {
  singerName: string;
  props: TaeyeonProps;
  setPropsHeight: (height: number) => void;
}

const PropsCard = ({ singerName, props, setPropsHeight }: PropsCardProps) => {
  console.log(singerName);
  console.log(props);
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
      className={`grid grid-cols-2 gap-4 w-[100%] scroll-y-auto`}
    >
      {/* 첫번째 카드 */}
      <div
        ref={firstCardRef}
        className="relative bg-gray-200 flex justify-center items-center aspect-square w-[94%] ml-[1rem]"
      >
        <h1 className="text-[2vh] font-[AppleBold] font-bold absolute top-[1vh] left-[1vw]">
          No.1
        </h1>
        <img
          src={props.image[0].src}
          className="w-[45%] hover:w-[53%] transition-all duration-300"
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
        className="relative bg-gray-200 flex justify-center items-center 
        aspect-square w-[94%] mr-[1rem]"
      >
        <h1 className="text-[2vh] font-[AppleBold] font-bold absolute top-[1vh] left-[1vw]">
          No.2
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
      <div
        className="relative bg-gray-200 flex 
      justify-center items-center aspect-square w-[94%] ml-[1rem]"
      >
        <h1
          className="text-[2vh] font-[AppleBold] 
        font-bold absolute top-[1vh] left-[1vw]"
        >
          No.3
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
      <div
        className="relative bg-gray-200 flex justify-center items-center 
        aspect-square w-[94%] mr-[1rem]"
      >
        <h1 className="text-[2vh] font-[AppleBold] font-bold absolute top-[1vh] left-[1vw]">
          No.4
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

      {/* 세번째 카드 */}
      <div
        className="relative bg-gray-200 flex 
      justify-center items-center aspect-square w-[94%] ml-[1rem]"
      >
        <h1
          className="text-[2vh] font-[AppleBold] 
        font-bold absolute top-[1vh] left-[1vw]"
        >
          No.5
        </h1>
        <img
          src={props.image[4].src}
          className="w-[60%] hover:w-[70%] transition-all duration-300"
          onClick={() =>
            handleClick(
              props.image[4].detailImage,
              props.image[4].detailTitle,
              props.image[4].detailDescription
            )
          }
        />
      </div>

      {/* 여섯번째 카드 */}
      <div
        className="relative bg-gray-200 flex justify-center items-center 
        aspect-square w-[94%] mr-[1rem]"
      >
        <h1 className="text-[2vh] font-[AppleBold] font-bold absolute top-[1vh] left-[1vw]">
          No.6
        </h1>
        <img
          src={props.image[5].src}
          className="w-[60%] hover:w-[70%] transition-all duration-300"
          onClick={() =>
            handleClick(
              props.image[5].detailImage,
              props.image[5].detailTitle,
              props.image[5].detailDescription
            )
          }
        />
      </div>

      <div
        className="relative bg-gray-200 flex 
      justify-center items-center aspect-square w-[94%] ml-[1rem]"
      >
        <h1
          className="text-[2vh] font-[AppleBold] 
        font-bold absolute top-[1vh] left-[1vw]"
        >
          No.7
        </h1>
        <img
          src={props.image[6].src}
          className="w-[60%] hover:w-[70%] transition-all duration-300"
          onClick={() =>
            handleClick(
              props.image[6].detailImage,
              props.image[6].detailTitle,
              props.image[6].detailDescription
            )
          }
        />
      </div>

      {/* 팝업 */}
      {popupData && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-[50%] border border-black">
            <div className="bg-[#A2C7E9] m-[1vw] border border-black p-[1vw]">
              <button
                onClick={closePopup}
                className=" w-[1.5vw] h-[1.5vw] mb-[1vh] bg-[url('/images/X.png')] bg-cover bg-center"
              ></button>
              <img
                src={popupData.image}
                alt={popupData.title}
                className="w-full h-auto rounded mb-[1vh]"
              />
              <h2 className="text-[1.5vw] font-[AppleBold] font-bold mb-[1vh] mt-[1vh]">
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
