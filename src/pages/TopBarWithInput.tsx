import { useState } from "react";

const TopBarWithInput = () => {
  const [url, setUrl] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && url.trim() !== "") {
      // 무조건 /404로 이동
      window.location.href = "/404";
    }
  };

  return (
    <div className="relative w-full z-5">
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
          top-[60%]    /* 위치 조정 필요 */
          w-[60%]
          h-[4vh]
          px-4
          py-2
          border-4
          border-black
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
