import { useState } from "react";

const FolderBox = () => {
  const [clickedFolder, setClickedFolder] = useState<string | null>(null);

  const folderImageMap: Record<string, string> = {
    "School Days": "/images/School-Days.png",
    "Western Retro": "/images/Western-Retro.png",
    "VHS TV Show": "/images/VHS-TV-Show.png",
  };

  // 초기 열별 이미지
  const columnImages = [
    "/images/School-Days.png",
    "/images/Western-Retro.png",
    "/images/VHS-TV-Show.png",
  ];

  // 3x3 그리드 생성
  const renderImageGrid = () => {
    const images = [];

    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        const imgSrc = clickedFolder
          ? folderImageMap[clickedFolder]
          : columnImages[col];

        images.push(
          <img
            key={`${row}-${col}`}
            src={imgSrc}
            alt={`grid-${row}-${col}`}
            className="h-[10vw] object-cover aspect-video"
          />
        );
      }
    }
    return (
      <div className="grid grid-cols-3 gap-y-[1vw] gap-[0.5vw] mt-[5vh]">
        {images}
      </div>
    );
  };

  return (
    <div
      className="flex flex-col items-center justify-center mt-[15vh] w-[100%]"
      onClick={() => {
        setClickedFolder(null); // 전체 영역 클릭 시 선택 해제
      }}
    >
      {/* folder 이미지 */}
      <div className="flex flex-row items-center justify-between mt-[5vh] ml-[8vw] mr-[8vw]">
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
                className="object-center w-full"
              />

              {/* 텍스트 */}
              <span
                className={`mt-2 text-[2vh] font-[Apple] ${
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
