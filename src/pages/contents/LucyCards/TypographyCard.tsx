import { Typography } from "../../../store/slices/lucyContentSlice";
import { useState } from "react";

interface TypographyCardProps {
  singerName: string;
  typography: Typography;
}

const TypographyCard = ({ singerName, typography }: TypographyCardProps) => {
  console.log(singerName);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? typography.image.length - 1 : prevIndex - 1
    );
  };

  const goNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === typography.image.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      id="TypographyCards"
      className="relative w-[80%] aspect-[3212/4813] overflow-hidden"
    >
      {typography.image.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-700 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}

      <button
        className="absolute bottom-[10vh] left-[3vw] cursor-pointer z-10"
        onClick={goPrev}
      >
        <img src="/typography/prev.png" alt="arrow" className="w-[14vw]" />
      </button>
      <button
        className="absolute bottom-[10vh] right-[3vw] cursor-pointer z-10"
        onClick={goNext}
      >
        <img src="/typography/next.png" alt="arrow" className="w-[14vw]" />
      </button>
    </div>
  );
};

export default TypographyCard;
