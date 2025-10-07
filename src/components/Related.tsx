import { Link } from "react-router-dom";
import { useContentDic } from "../utils/contents";

export default function Related({ singerName }: { singerName: string }) {
  const contentDic: Record<string, any> = useContentDic();
  const content = contentDic[singerName];

  return (
    <div className="relative mt-[10vh] mb-[10vh] h-[20vh] w-[100%] flex flex-col">
      <img
        src="/images/related_button.png"
        alt="related"
        className="h-[5vh] object-contain absolute top-[0vh] left-[7vw]"
      />
      <div className="flex flex-row w-[70%] gap-[2vw] absolute top-[6vh] left-[7vw]">
        {content.related.image.map((image: string) => {
          const fileName = image.split("/").pop()?.split(".")[0] || "";
          return (
            <Link to={`/sub/${fileName}`} className="w-[16vw] aspect-[16/9]">
              <img
                src={image}
                alt="related"
                className="w-full h-full rounded-lg"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
