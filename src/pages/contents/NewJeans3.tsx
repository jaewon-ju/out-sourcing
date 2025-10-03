import FashionCard from "./NewJeans3Cards/FashionCard";
import PropsCard from "./NewJeans3Cards/PropsCard";
import SetSpaceCard from "./NewJeans3Cards/SetSpaceCard";
import DirectionCard from "./NewJeans3Cards/DirectionCard";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useState } from "react";
import TypographyCard from "./NewJeans3Cards/TypographyCard";
export type SectionContent = {
  id: string;
  label: string;
  content: React.ReactNode;
};

const NewJeans3Content = () => {
  const sections = ["Fashion", "Props", "Set Space", "Direction"];
  const height = useSelector((state: RootState) => state.height["newjeans3"]);
  const newJeans3Content = useSelector(
    (state: RootState) => state.newJeans3Content
  );
  const [propsHeight, setPropsHeight] = useState(0);

  const cards = {
    Fashion: (
      <FashionCard singerName="newjeans3" fashion={newJeans3Content.fashion} />
    ),
    Props: (
      <PropsCard
        singerName="newjeans3"
        props={newJeans3Content.props}
        setPropsHeight={setPropsHeight}
      />
    ),
    "Set Space": (
      <SetSpaceCard
        singerName="newjeans3"
        setSpace={newJeans3Content.setSpace}
      />
    ),
    Direction: (
      <DirectionCard
        singerName="newjeans3"
        direction={newJeans3Content.direction}
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
        <TypographyCard
          singerName="newjeans3"
          typography={newJeans3Content.typography}
        />
      </div>
    </div>
  );
};

export default NewJeans3Content;
