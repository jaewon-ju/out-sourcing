import FashionCard from "./Hearts2HeartsCards/FashionCard";
import PropsCard from "./Hearts2HeartsCards/PropsCard";
import SetSpaceCard from "./Hearts2HeartsCards/SetSpaceCard";
import DirectionCard from "./Hearts2HeartsCards/DirectionCard";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useState } from "react";
import TypographyCard from "./Hearts2HeartsCards/TypographyCard";

export type SectionContent = {
  id: string;
  label: string;
  content: React.ReactNode;
};

const Hearts2HeartsContent = () => {
  const sections = ["Fashion", "Props", "Set Space", "Direction"];
  const height = useSelector(
    (state: RootState) => state.height["Hearts2Hearts"]
  );
  const hearts2heartsContent = useSelector(
    (state: RootState) => state.Hearts2HeartsContent
  );
  const [propsHeight, setPropsHeight] = useState(0);

  const cards = {
    Fashion: (
      <FashionCard
        singerName="Hearts2Hearts"
        fashion={hearts2heartsContent.fashion}
      />
    ),
    Props: (
      <PropsCard
        singerName="Hearts2Hearts"
        props={hearts2heartsContent.props}
        setPropsHeight={setPropsHeight}
      />
    ),
    "Set Space": (
      <SetSpaceCard
        singerName="Hearts2Hearts"
        setSpace={hearts2heartsContent.setSpace}
      />
    ),
    Direction: (
      <DirectionCard
        singerName="Hearts2Hearts"
        direction={hearts2heartsContent.direction}
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
                flex flex-col justify-start items-center w-full py-[2vh] font-[Apple]
                border-2 border-black
                bg-white
                scrollbar-thumb-[#CCCCCC] scrollbar-track-white scrollbar-w-[2vw]
                ${
                  section === "Props"
                    ? "overflow-y-scroll scrollbar scrollbar-h-[100%]"
                    : "overflow-y-auto scrollbar scrollbar-h-1/2"
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
          singerName="Hearts2Hearts"
          typography={hearts2heartsContent.typography}
        />
      </div>
    </div>
  );
};

export default Hearts2HeartsContent;
