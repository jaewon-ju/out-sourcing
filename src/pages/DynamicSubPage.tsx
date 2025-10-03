import { useParams } from "react-router-dom";
import SubPageTemplate from "./SubPageTemplate";

// 각 페이지 콘텐츠 import
import NCTPage from "./contents/NCT";
import TaeyeonPage from "./contents/Taeyeon";
import LucyPage from "./contents/Lucy";
import Hearts2HeartsPage from "./contents/Hearts2Hearts";
import NewJeans2Page from "./contents/NewJeans2";
import LesserafimPage from "./contents/Lesserafim";
import RiizePage from "./contents/Riize";
import BtsPage from "./contents/Bts";

const pageContents: Record<string, typeof NCTPage> = {
  nct: NCTPage,
  taeyeon: TaeyeonPage,
  Hearts2Hearts: Hearts2HeartsPage,
  lucy: LucyPage,
  newjeans2: NewJeans2Page,
  lesserafim: LesserafimPage,
  riize: RiizePage,
  bts: BtsPage,
};

const audioList = {
  nct: "/music/nct.mp3",
  taeyeon: "/music/taeyeon.mp3",
  Hearts2Hearts: "/music/Hearts2Hearts.mp3",
  lucy: "/music/lucy.mp3",
  newjeans: "/music/newjeans.mp3",
  newjeans2: "/music/newjeans2.mp3",
  lesserafim: "/music/lesserafim.mp3",
  riize: "/music/riize.mp3",
  bts: "/music/bts.mp3",
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
