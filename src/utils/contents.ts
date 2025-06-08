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

  return {
    nct: nctContent,
    taeyeon: taeyeonContent,
    Hearts2Hearts: Hearts2HeartsContent,
  };
};
