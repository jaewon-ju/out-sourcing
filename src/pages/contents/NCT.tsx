import FashionCard from "./cards/FashionCard";
import PropsCard from "./cards/PropsCard";
import SetSpaceCard from "./cards/SetSpaceCard";
import FontCard from "./cards/FontCard";
import DirectionCard from "./cards/DirectionCard";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export type SectionContent = {
  id: string;
  label: string;
  content: React.ReactNode;
};

const NCTContent = () => {
  const sections = ["Fashion", "Props", "Set Space", "Typography", "Direction"];
  const height = useSelector((state: RootState) => state.height["nct"]);
  const nctContent = useSelector((state: RootState) => state.nctContent);

  const cards = {
    Fashion: <FashionCard singerName="nct" fashion={nctContent.fashion} />,
    Props: <PropsCard singerName="nct" props={nctContent.props} />,
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
          className="mt-10 flex flex-col justify-center items-center gap-5 overflow-y-auto"
        >
          <div className="text-black text-center px-4 py-2 bg-[#A2C7E9] w-fit border border-grey">
            {section}
          </div>

          <div
            id="scroll-box"
            className="flex flex-col justify-start items-center w-full py-4
             overflow-y-auto 
             scrollbar scrollbar-w-25 scrollbar-h-1/2 scrollbar-thumb-[#CCCCCC] scrollbar-track-white
             border border-black"
            style={{
              height: section === "Props" ? "auto" : `${height}px`,
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
