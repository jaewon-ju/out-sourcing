import NCTContent from "./contents/NCT";
import TaeyeonContent from "./contents/Taeyeon";
import Hearts2HeartsContent from "./contents/Hearts2Hearts";
import LucyContent from "./contents/Lucy";
import NewJeans2Content from "./contents/NewJeans2";
import NewJeans3Content from "./contents/NewJeans3";
import LesserafimContent from "./contents/Lesserafim";
import RiizeContent from "./contents/Riize";
import BtsContent from "./contents/Bts";

const content: Record<string, React.ReactNode> = {
  nct: <NCTContent />,
  taeyeon: <TaeyeonContent />,
  Hearts2Hearts: <Hearts2HeartsContent />,
  lucy: <LucyContent />,
  newjeans2: <NewJeans2Content />,
  newjeans3: <NewJeans3Content />,
  lesserafim: <LesserafimContent />,
  riize: <RiizeContent />,
  bts: <BtsContent />,
};

const ContentContainer = ({ singerName }: { singerName: string }) => {
  const component: React.ReactNode = content[singerName];

  return <div className={`w-full`}>{component}</div>;
};

export default ContentContainer;
