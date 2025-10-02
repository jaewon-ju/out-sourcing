// hooks/useContentDic.ts
import { useSelector } from "react-redux";
import { RootState } from "../store/index";

export const useContentDic = () => {
  const nctContent = useSelector((state: RootState) => state.nctContent);
  const taeyeonContent = useSelector(
    (state: RootState) => state.taeyeonContent
  );
  const Hearts2HeartsContent = useSelector(
    (state: RootState) => state.Hearts2HeartsContent
  );
  const lucyContent = useSelector((state: RootState) => state.lucyContent);
  const newJeans2Content = useSelector(
    (state: RootState) => state.newJeans2Content
  );

  return {
    nct: nctContent,
    taeyeon: taeyeonContent,
    Hearts2Hearts: Hearts2HeartsContent,
    lucy: lucyContent,
    newjeans2: newJeans2Content,
  };
};
