import { useParams } from "react-router-dom";
import SubPageTemplate from "./SubPageTemplate";

// 각 페이지 콘텐츠 import
import NCTPage from "./contents/NCT";

const pageContents: Record<string, typeof NCTPage> = {
  nct: NCTPage,
};

const audioList = {
  nct: "/music/nct.mp3",
};

const DynamicSubPage = () => {
  const { singer } = useParams();
  const page = singer && pageContents[singer];
  const audioSrc = audioList[singer as keyof typeof audioList];

  if (!page) {
    return <div className="text-center mt-20">존재하지 않는 페이지입니다.</div>;
  }

  return <SubPageTemplate singerName={singer} audioSrc={audioSrc} />;
};

export default DynamicSubPage;
