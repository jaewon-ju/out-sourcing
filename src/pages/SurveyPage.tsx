"use client";

import { useState } from "react";
import { SurveyBox } from "../components/SurveyBox";
import { CommentBox } from "../components/CommentBox";

export default function SurveyPage() {
  const [lang, setLang] = useState<"ko" | "en">("ko");
  const placeholder =
    lang === "ko"
      ? "노스텔지어에 대한 개인적 경험이 있다면 무엇이든 공유해주세요."
      : "Have you ever felt nostalgia in your own way? Tell us your story.";
  const commentTitle =
    lang === "ko"
      ? "타인의 기억 들여다보기"
      : "Peeking into another person's memory";

  return (
    <div
      id="top"
      className="min-h-screen flex flex-col items-center justify-start"
    >
      <div
        id="survey-container"
        className="w-[60vw] bg-cover bg-center"
        style={{ backgroundImage: `url('/survey/background.png')` }}
      >
        {/* 상단 Navigation */}
        <div className="flex flex-col relative w-full h-[17vh] mt-[10vh]">
          <div className="flex items-center w-full">
            {/* home Box*/}
            <img
              src="/survey/homeButton.png"
              className="absolute left-[5vw] cursor-pointer w-[15vw] h-[7vh]"
              onClick={() => (window.location.href = "/")}
            />
            <div className="absolute right-[4vw] flex gap-2 items-center">
              <img
                src="/survey/koreanButton.png"
                className="cursor-pointer w-[12vw] h-[5.5vh]"
                onClick={() => setLang("ko")}
              ></img>
              <img
                src="/survey/englishButton.png"
                className="cursor-pointer w-[12vw] h-[5.5vh]"
                onClick={() => setLang("en")}
              ></img>
            </div>
          </div>

          {/* 상단 메시지 박스 */}
          <img
            src="/survey/nostalgia.png"
            alt="message"
            className="absolute left-[4vw] top-[3vh] w-[52vw]"
          />
        </div>

        <div
          className="w-[52vw] flex flex-col items-center justify-start my-[10vh] ml-[4vw] 
    aspect-[2625/3857] bg-[url('/survey/mainBox.png')] bg-contain bg-center"
        >
          {/* 설문 입력 영역 */}
          <SurveyBox placeholder={placeholder} />

          {/* 댓글 영역 */}
          <CommentBox />
        </div>
      </div>
    </div>
  );
}
