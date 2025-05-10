import FashionCard from "./cards/FashionCard";
import PropsCard from "./cards/PropsCard";
import SetSpaceCard from "./cards/SetSpaceCard";
import TypographyCard from "./cards/TypographyCard";
import DirectionCard from "./cards/DirectionCard";

export type SectionContent = {
  id: string;
  label: string;
  content: React.ReactNode;
};

const NCTContent = () => {
  const sections = ["Fashion", "Props", "Set Space", "Typography", "Direction"];

  const cards = {
    Fashion: (
      <FashionCard
        title="Fashion"
        imageSrc="https://via.placeholder.com/150"
        description="Fashion"
      />
    ),
    Props: (
      <PropsCard
        title="Props"
        imageSrc="https://via.placeholder.com/150"
        description="Props"
      />
    ),
    "Set Space": (
      <SetSpaceCard
        title="Set Space"
        imageSrc="https://via.placeholder.com/150"
        description="Set Space"
      />
    ),
    Typography: (
      <TypographyCard
        title="Typography"
        imageSrc="https://via.placeholder.com/150"
        description="Typography"
      />
    ),
    Direction: (
      <DirectionCard
        title="Direction"
        imageSrc="https://via.placeholder.com/150"
        description="Direction"
      />
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
            className="flex flex-col justify-center items-center gap-4 bg-gray-200 w-full py-4"
          >
            {cards[section as keyof typeof cards]}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NCTContent;
