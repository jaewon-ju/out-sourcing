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
        className="w-[60vw]"
        style={{ backgroundImage: `url('/example.png')` }}
      >
        {/* 상단 Navigation */}
        <div className="flex relative items-center w-full">
          {/* home Box*/}
          <div
            className="absolute left-[4vw] flex justify-between items-center gap-2 cursor-pointer border-2 border-black mt-[5vh]"
            onClick={() => (window.location.href = "/")}
          >
            <div className="text-[1.5vw] font-[Bodoni] tracking-tighter leading-tight">
              home
            </div>
            <img
              src="/images/main/home.png"
              alt="home"
              className="w-[1.5vw] object-contain ml-[1vw]"
            />
          </div>
          <div className="absolute right-[4vw] flex gap-2 items-center mt-[5vh]">
            <div
              className="text-[1.5vw] font-[Bodoni] tracking-tighter leading-tight cursor-pointer border-2 border-black px-4"
              onClick={() => setLang("ko")}
            >
              Korean
            </div>
            <div
              className="text-[1.5vw] font-[Bodoni] tracking-tighter leading-tight cursor-pointer border-2 border-black px-4"
              onClick={() => setLang("en")}
            >
              English
            </div>
          </div>
        </div>

        {/* 상단 메시지 박스 */}
        <div className="bg-white bg-opacity-70 p-6 mt-6 rounded-xl shadow-md text-center ml-[4vw] mr-[4vw] mt-[5vh]">
          <h1 className="text-[1.5vw] font-[Bodoni] tracking-tighter leading-tight">
            What brings you Nostalgia?
          </h1>
        </div>

        {/* 설문 입력 영역 */}
        <SurveyBox placeholder={placeholder} />

        {/* 댓글 영역 */}
        <CommentBox title={commentTitle} />
      </div>
    </div>
  );
}
