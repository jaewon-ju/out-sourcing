import { useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { setHeight } from "../../../store/slices/heightSlice";
interface FashionCardProps {
  title: string;
  imageSrc: string;
  description: string;
}

const FashionCard = ({ title, imageSrc, description }: FashionCardProps) => {
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
      dispatch(setHeight({ singer: "nct", height: totalHeight }));
    };

    calcHeight();
    window.addEventListener("resize", calcHeight); // 반응형 대응
    return () => window.removeEventListener("resize", calcHeight);
  }, []);

  return (
    <div id="FashionCards" className={`flex flex-col gap-4 w-[80%]`}>
      {/* 첫번째 카드 */}
      <div ref={firstCardRef} className="border border-gray-400 rounded">
        {/* Header */}
        <div className="bg-blue-400 text-black text-left font-bold px-4 py-2 rounded-t">
          {title}
        </div>

        <div className="flex flex-row gap-4 p-4">
          {/* Image Row */}
          <div className="flex flex-col gap-4 p-4 w-1/2">
            <div className="flex flex-col items-center justify-center border border-gray-300 p-4 w-1/2 rounded">
              <img
                src={imageSrc}
                alt={description}
                className="w-full h-auto object-cover mb-2"
              />
              <p className="text-sm text-center">{description}</p>
            </div>
          </div>

          {/* Image Row */}
          <div className="flex flex-col gap-4 p-4 w-1/2">
            <div className="flex flex-col items-center justify-center border border-gray-300 p-4 w-1/2 rounded">
              <img
                src={imageSrc}
                alt={description}
                className="w-full h-auto object-cover mb-2"
              />
              <p className="text-sm text-center">{description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 두번째 카드 */}
      <div ref={secondCardRef} className="border border-gray-400 rounded">
        {/* Header */}
        <div className="bg-blue-400 text-black text-left font-bold px-4 py-2 rounded-t">
          {title}
        </div>

        <div className="flex flex-row gap-4 p-4">
          {/* Image Row */}
          <div className="flex flex-col gap-4 p-4 w-1/2">
            <div className="flex flex-col items-center justify-center border border-gray-300 p-4 w-1/2 rounded">
              <img
                src={imageSrc}
                alt={description}
                className="w-full h-auto object-cover mb-2"
              />
              <p className="text-sm text-center">{description}</p>
            </div>
          </div>

          {/* Image Row */}
          <div className="flex flex-col gap-4 p-4 w-1/2">
            <div className="flex flex-col items-center justify-center border border-gray-300 p-4 w-1/2 rounded">
              <img
                src={imageSrc}
                alt={description}
                className="w-full h-auto object-cover mb-2"
              />
              <p className="text-sm text-center">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FashionCard;
