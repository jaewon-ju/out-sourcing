import { useState } from "react";

const FolderBox = () => {
  const [clickedFolder, setClickedFolder] = useState<string>("Original");

  const folderImageMap: Record<string, string[]> = {
    Original: [
      "/images/nct.png",
      "/images/taeyeon.png",
      "/images/NewJeans2.png",
      "/images/RIIZE.png",
      "/images/Hearts2Hearts.png",
      "/images/Lesserafim.png",
      "/images/Lucy.png",
      "/images/TWS.png",
      "/images/BTS.png",
    ],
    "School Days": [
      "/images/nct.png",
      "/images/NewJeans2.png",
      "/images/Hearts2Hearts.png",
      "/images/RIIZE.png",
      "/images/TWS.png",
    ],
    "Western Retro": [
      "/images/Hearts2Hearts.png",
      "/images/taeyeon.png",
      "/images/Lesserafim.png",
      "/images/BTS.png",
    ],
    "VHS TV Show": [
      "/images/Hearts2Hearts.png",
      "/images/NewJeans.png",
      "/images/NewJeans2.png",
      "/images/Lucy.png",
    ],
  };

  // 3x3 그리드 생성
  const renderImageGrid = () => {
    const images = clickedFolder
      ? folderImageMap[clickedFolder]
      : folderImageMap.Original;

    const imageGrid = images.map((imgSrc, index) => (
      <img
        key={index}
        src={imgSrc}
        alt={`${imgSrc}-${index}`}
        className="h-[9vw] object-cover aspect-video"
      />
    ));
    return (
      <div className="grid grid-cols-3 gap-y-[1vw] gap-[0.5vw] mt-[5vh]">
        {imageGrid}
      </div>
    );
  };

  return (
    <div
      className="flex flex-col items-center justify-center mt-[15vh] w-[100%] z-10"
      onClick={() => {
        setClickedFolder("Original"); // 전체 영역 클릭 시 선택 해제
      }}
    >
      {/* folder 이미지 */}
      <div className="flex flex-row items-center justify-center mt-[5vh] gap-[3vw]">
        {["School Days", "Western Retro", "VHS TV Show"].map((item) => {
          const isSelected = clickedFolder === item;

          return (
            <div
              key={item}
              className="flex flex-col items-center justify-center w-[18%] cursor-pointer"
              // 이벤트 버블링 방지 (자신을 클릭한 경우 상위 div의 onClick이 동작하지 않도록)
              onClick={(e) => {
                e.stopPropagation();
                setClickedFolder(item);
              }}
            >
              {/* 폴더 이미지 */}
              <img
                src={
                  isSelected
                    ? "/images/main/clicked-folder.png"
                    : "/images/main/folder.png"
                }
                alt="folder"
                className="object-center w-[60%]"
              />

              {/* 텍스트 */}
              <span
                className={`mt-2 text-[1.8vh] font-[Apple] ${
                  isSelected ? "text-blue-600 underline" : "text-black"
                }`}
              >
                {item}
              </span>
            </div>
          );
        })}
      </div>

      {/* 이미지 그리드 */}
      {renderImageGrid()}
    </div>
  );
};
export default FolderBox;
