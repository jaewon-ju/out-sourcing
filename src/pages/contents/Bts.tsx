import FashionCard from "./BTSCards/FashionCard";
import PropsCard from "./BTSCards/PropsCard";
import SetSpaceCard from "./BTSCards/SetSpaceCard";
import DirectionCard from "./BTSCards/DirectionCard";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useState } from "react";
import TypographyCard from "./BTSCards/TypographyCard";
export type SectionContent = {
  id: string;
  label: string;
  content: React.ReactNode;
};

const BtsContent = () => {
  const sections = ["Fashion", "Props", "Set Space", "Direction"];
  const height = useSelector((state: RootState) => state.height["bts"]);
  const btsContent = useSelector((state: RootState) => state.btsContent);
  const [propsHeight, setPropsHeight] = useState(0);

  const cards = {
    Fashion: <FashionCard singerName="bts" fashion={btsContent.fashion} />,
    Props: (
      <PropsCard
        singerName="bts"
        props={btsContent.props}
        setPropsHeight={setPropsHeight}
      />
    ),
    "Set Space": (
      <SetSpaceCard singerName="bts" setSpace={btsContent.setSpace} />
    ),
    Direction: (
      <DirectionCard singerName="bts" direction={btsContent.direction} />
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
                  section === "Props"
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
        <TypographyCard singerName="bts" typography={btsContent.typography} />
      </div>
    </div>
  );
};

export default BtsContent;
