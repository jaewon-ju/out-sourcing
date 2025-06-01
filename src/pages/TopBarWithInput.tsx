import { useState } from "react";

const TopBarWithInput = () => {
  const [url, setUrl] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && url.trim() !== "") {
      // http(s) 없는 경우 자동 추가
      const finalUrl = url.startsWith("http") ? url : `https://${url}`;
      window.location.href = finalUrl;
    }
  };

  return (
    <div className="relative w-full">
      {/* 배경 이미지 */}
      <img
        src="/images/top_bar.png"
        alt="topbar"
        className="w-full object-contain"
      />

      {/* 입력 필드: 이미지 위에 겹침 */}
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder=""
        className="
          absolute
          left-[8vw]   /* 위치 조정 필요 */
          top-[58%]    /* 위치 조정 필요 */
          w-[60%]
          h-[4vh]
          px-4
          py-2
          border
          border-gray-300
          shadow-md
          text-sm
          bg-white
            outline-none
        focus:outline-none
        "
      />
    </div>
  );
};

export default TopBarWithInput;
