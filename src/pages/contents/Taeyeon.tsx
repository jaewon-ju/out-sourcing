import FashionCard from "./TaeyeonCards/FashionCard";
import PropsCard from "./TaeyeonCards/PropsCard";
import SetSpaceCard from "./TaeyeonCards/SetSpaceCard";
import DirectionCard from "./TaeyeonCards/DirectionCard";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useState } from "react";
import TypographyCard from "./TaeyeonCards/TypographyCard";

export type SectionContent = {
  id: string;
  label: string;
  content: React.ReactNode;
};

const TaeyeonContent = () => {
  const sections = ["Fashion", "Props", "Set Space", "Direction"];
  const height = useSelector((state: RootState) => state.height["taeyeon"]);
  const taeyeonContent = useSelector(
    (state: RootState) => state.taeyeonContent
  );
  const [propsHeight, setPropsHeight] = useState(0);

  const cards = {
    Fashion: (
      <FashionCard singerName="taeyeon" fashion={taeyeonContent.fashion} />
    ),
    Props: (
      <PropsCard
        singerName="taeyeon"
        props={taeyeonContent.props}
        setPropsHeight={setPropsHeight}
      />
    ),
    "Set Space": (
      <SetSpaceCard singerName="taeyeon" setSpace={taeyeonContent.setSpace} />
    ),
    Direction: (
      <DirectionCard
        singerName="taeyeon"
        direction={taeyeonContent.direction}
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
          singerName="taeyeon"
          typography={taeyeonContent.typography}
        />
      </div>
    </div>
  );
};

export default TaeyeonContent;
