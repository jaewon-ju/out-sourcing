import NCTContent from "./contents/NCT";

const ContentContainer = ({ singerName }: { singerName: string }) => {
  const content: Record<string, React.ReactNode> = {
    nct: <NCTContent />,
  };

  const component: React.ReactNode = content[singerName.toLowerCase()];

  return <div className={`w-full`}>{component}</div>;
};

export default ContentContainer;
