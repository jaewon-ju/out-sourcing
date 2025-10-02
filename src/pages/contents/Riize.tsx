import FashionCard from "./RiizeCards/FashionCard";
import PropsCard from "./RiizeCards/PropsCard";
import SetSpaceCard from "./RiizeCards/SetSpaceCard";
import DirectionCard from "./RiizeCards/DirectionCard";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useState } from "react";
import TypographyCard from "./RiizeCards/TypographyCard";
export type SectionContent = {
  id: string;
  label: string;
  content: React.ReactNode;
};

const RiizeContent = () => {
  const sections = ["Fashion", "Props", "Set Space", "Direction"];
  const height = useSelector((state: RootState) => state.height["riize"]);
  const riizeContent = useSelector((state: RootState) => state.riizeContent);
  const [propsHeight, setPropsHeight] = useState(0);

  const cards = {
    Fashion: <FashionCard singerName="riize" fashion={riizeContent.fashion} />,
    Props: (
      <PropsCard
        singerName="riize"
        props={riizeContent.props}
        setPropsHeight={setPropsHeight}
      />
    ),
    "Set Space": (
      <SetSpaceCard singerName="riize" setSpace={riizeContent.setSpace} />
    ),
    Direction: (
      <DirectionCard singerName="riize" direction={riizeContent.direction} />
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
        <TypographyCard singerName="riize" typography={riizeContent.typography} />
      </div>
    </div>
  );
};

export default RiizeContent;
