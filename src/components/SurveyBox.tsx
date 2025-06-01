import { useEffect, useState } from "react";
import { collection, addDoc, getDocs, Timestamp } from "firebase/firestore";
import { db } from "../firebase";
import { v4 as uuidv4 } from "uuid";

export function SurveyBox({
  placeholder,
  setAddedComment,
}: {
  placeholder: string;
  setAddedComment: (isCommentAdded: any) => void;
}) {
  const [opinion, setOpinion] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addDoc(collection(db, "surveys"), {
      id: uuidv4(),
      opinion,
      createdAt: Timestamp.now(),
    });
    setAddedComment(opinion);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-start w-full"
      >
        <textarea
          value={opinion}
          onChange={(e) => setOpinion(e.target.value)}
          placeholder={placeholder}
          className="
            w-[80%] placeholder:text-[1.2vw] font-[Box109] placeholder:p-[2vh]
            bg-[url('/survey/inputBox.png')] aspect-[2138/1007] bg-contain bg-center
            mt-[10vh]
            resize-none
            "
          required
        />
        <img
          src="/survey/send.png"
          alt="sendBox"
          className="w-[35%] mt-[2vh] cursor-pointer"
          onClick={handleSubmit}
        />
      </form>

      <div className="w-[40vw] h-[0.1vh] border-b-2 border-[#3a90e5] mt-[5vh]"></div>
    </>
  );
}
