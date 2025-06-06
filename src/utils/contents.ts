// hooks/useContentDic.ts
import { useSelector } from "react-redux";
import { RootState } from "../store/index";

export const useContentDic = () => {
  const nctContent = useSelector((state: RootState) => state.nctContent);
  const taeyeonContent = useSelector(
    (state: RootState) => state.taeyeonContent
  );

  return {
    nct: nctContent,
    taeyeon: taeyeonContent,
  };
};
