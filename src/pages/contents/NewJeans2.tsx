import FashionCard from "./NewJeans2Cards/FashionCard";
import PropsCard from "./NewJeans2Cards/PropsCard";
import SetSpaceCard from "./NewJeans2Cards/SetSpaceCard";
import DirectionCard from "./NewJeans2Cards/DirectionCard";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useState } from "react";
import TypographyCard from "./NewJeans2Cards/TypographyCard";
export type SectionContent = {
  id: string;
  label: string;
  content: React.ReactNode;
};

const NewJeans2Content = () => {
  const sections = ["Fashion", "Props", "Set Space", "Direction"];
  const height = useSelector((state: RootState) => state.height["newjeans2"]);
  const newJeans2Content = useSelector(
    (state: RootState) => state.newJeans2Content
  );
  const [propsHeight, setPropsHeight] = useState(0);

  const cards = {
    Fashion: (
      <FashionCard singerName="newjeans2" fashion={newJeans2Content.fashion} />
    ),
    Props: (
      <PropsCard
        singerName="newjeans2"
        props={newJeans2Content.props}
        setPropsHeight={setPropsHeight}
      />
    ),
    "Set Space": (
      <SetSpaceCard
        singerName="newjeans2"
        setSpace={newJeans2Content.setSpace}
      />
    ),
    Direction: (
      <DirectionCard
        singerName="newjeans2"
        direction={newJeans2Content.direction}
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
                overflow-y-scroll scrollbar
                scrollbar-w-[2vw]
                ${
                  section === "Fashion"
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
          singerName="newjeans2"
          typography={newJeans2Content.typography}
        />
      </div>
    </div>
  );
};

export default NewJeans2Content;
