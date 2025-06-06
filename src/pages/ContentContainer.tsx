import NCTContent from "./contents/NCT";

const content: Record<string, React.ReactNode> = {
  nct: <NCTContent />,
};

const ContentContainer = ({ singerName }: { singerName: string }) => {
  const component: React.ReactNode = content[singerName.toLowerCase()];

  return <div className={`w-full`}>{component}</div>;
};

export default ContentContainer;
