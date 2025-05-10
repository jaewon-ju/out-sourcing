import NCTContent from "./contents/NCT";

const ContentContainer = ({ singerName }: { singerName: string }) => {
  const content: Record<string, React.ReactNode> = {
    nct: <NCTContent />,
  };

  const component: React.ReactNode = content[singerName.toLowerCase()];

  return <div className="absolute top-50 py-10 w-[80%]">{component}</div>;
};

export default ContentContainer;
