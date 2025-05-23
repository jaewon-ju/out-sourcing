import FashionCard from "./cards/FashionCard";
import PropsCard from "./cards/PropsCard";
import SetSpaceCard from "./cards/SetSpaceCard";
import FontCard from "./cards/FontCard";
import DirectionCard from "./cards/DirectionCard";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useState } from "react";
export type SectionContent = {
  id: string;
  label: string;
  content: React.ReactNode;
};

const NCTContent = () => {
  const sections = ["Fashion", "Props", "Set Space", "Direction", "Font"];
  const height = useSelector((state: RootState) => state.height["nct"]);
  const nctContent = useSelector((state: RootState) => state.nctContent);
  const [propsHeight, setPropsHeight] = useState(0);

  const cards = {
    Fashion: <FashionCard singerName="nct" fashion={nctContent.fashion} />,
    Props: (
      <PropsCard
        singerName="nct"
        props={nctContent.props}
        setPropsHeight={setPropsHeight}
      />
    ),
    "Set Space": (
      <SetSpaceCard singerName="nct" setSpace={nctContent.setSpace} />
    ),
    Font: <FontCard singerName="nct" font={nctContent.font} />,
    Direction: (
      <DirectionCard singerName="nct" direction={nctContent.direction} />
    ),
  };

  return (
    <div>
      {sections.map((section) => (
        <div
          id={section}
          key={section}
          className="mt-[5vh] flex flex-col justify-center items-center gap-[4vh] overflow-y-auto"
        >
          <div className="text-black text-center text-[2vh] font-[Apple] px-[1vw] py-[0.5vh] bg-[#A2C7E9] w-fit border border-grey-500">
            {section}
          </div>

          <div
            id="scroll-box"
            className={`
                flex flex-col justify-start items-center w-full py-[2vh] font-[Apple]
                border border-black
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
    </div>
  );
};

export default NCTContent;
