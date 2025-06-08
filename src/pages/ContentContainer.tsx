import NCTContent from "./contents/NCT";
import TaeyeonContent from "./contents/Taeyeon";
import Hearts2HeartsContent from "./contents/Hearts2Hearts";

const content: Record<string, React.ReactNode> = {
  nct: <NCTContent />,
  taeyeon: <TaeyeonContent />,
  Hearts2Hearts: <Hearts2HeartsContent />,
};

const ContentContainer = ({ singerName }: { singerName: string }) => {
  const component: React.ReactNode = content[singerName];

  return <div className={`w-full`}>{component}</div>;
};

export default ContentContainer;
