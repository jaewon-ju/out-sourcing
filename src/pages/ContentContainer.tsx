import NCTContent from "./contents/NCT";
import TaeyeonContent from "./contents/Taeyeon";

const content: Record<string, React.ReactNode> = {
  nct: <NCTContent />,
  taeyeon: <TaeyeonContent />,
};

const ContentContainer = ({ singerName }: { singerName: string }) => {
  const component: React.ReactNode = content[singerName.toLowerCase()];

  return <div className={`w-full`}>{component}</div>;
};

export default ContentContainer;
