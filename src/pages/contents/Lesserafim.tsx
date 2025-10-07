import FashionCard from "./LesserafimCards/FashionCard";
import PropsCard from "./LesserafimCards/PropsCard";
import SetSpaceCard from "./LesserafimCards/SetSpaceCard";
import DirectionCard from "./LesserafimCards/DirectionCard";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useState } from "react";
import TypographyCard from "./LesserafimCards/TypographyCard";
export type SectionContent = {
  id: string;
  label: string;
  content: React.ReactNode;
};

const LesserafimContent = () => {
  const sections = ["Fashion", "Props", "Set Space", "Direction"];
  const height = useSelector((state: RootState) => state.height["lesserafim"]);
  const lesserafimContent = useSelector(
    (state: RootState) => state.lesserafimContent
  );
  const [propsHeight, setPropsHeight] = useState(0);

  const cards = {
    Fashion: (
      <FashionCard
        singerName="lesserafim"
        fashion={lesserafimContent.fashion}
      />
    ),
    Props: (
      <PropsCard
        singerName="lesserafim"
        props={lesserafimContent.props}
        setPropsHeight={setPropsHeight}
      />
    ),
    "Set Space": (
      <SetSpaceCard
        singerName="lesserafim"
        setSpace={lesserafimContent.setSpace}
      />
    ),
    Direction: (
      <DirectionCard
        singerName="lesserafim"
        direction={lesserafimContent.direction}
      />
    ),
  };

  return (
    <div>
      {sections.map((section) => (
        <div
          id={section}
          key={section}
          className="mt-[15vh] flex flex-col justify-center items-center gap-[3vh] overflow-y-auto"
        >
          <img
            src={`/images/${
              section.includes(" ") ? section.replace(" ", "_") : section
            }.png`}
            alt={section}
            className="h-[5vh]"
          />

          <div
            id="scroll-box"
            className={`
                flex flex-col justify-start items-center w-full py-[2vh] font-[AppleNeoR]
                border-2 border-black
                bg-white
                overflow-y-scroll scrollbar
                scrollbar-w-[2vw]
                ${
                  section === "Props" || section === "Fashion"
                    ? " scrollbar-h-[100%] scrollbar-track-[#CCCCCC]"
                    : " scrollbar-h-1/2 scrollbar-thumb-[#CCCCCC] scrollbar-track-white"
                }
            `}
            style={{
              height: section === "Props" ? propsHeight : `${height}px`,
            }}
          >
            {cards[section as keyof typeof cards]}
          </div>
        </div>
      ))}
      <div
        id="Typography"
        key="Typography"
        className="mt-[15vh] flex flex-col justify-center items-center gap-[3vh]"
      >
        <img
          src={`/images/Typography.png`}
          alt="Typography"
          className="h-[5vh]"
        />
        <TypographyCard
          singerName="lesserafim"
          typography={lesserafimContent.typography}
        />
      </div>
    </div>
  );
};

export default LesserafimContent;
