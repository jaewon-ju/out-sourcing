import { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
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
    setOpinion("");
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center w-full"
      >
        <textarea
          value={opinion}
          onChange={(e) => setOpinion(e.target.value)}
          placeholder={placeholder}
          className="
            w-[80%] aspect-[2138/1007]
            bg-[url('/survey/inputBox.png')] bg-contain bg-center
            mt-[10vh] resize-none
            placeholder:text-[1.2vw] placeholder:p-0 placeholder:text-[#888888]
            font-[Box109] text-[1.2vw] text-black
            p-[2vh]  
            leading-relaxed
            outline-none
          "
          required
        />
        <img
          src="/survey/send.png"
          alt="sendBox"
          className="w-[50%] mt-[4vh] cursor-pointer"
          onClick={handleSubmit}
        />
      </form>

      <div className="w-[40vw] h-[0.1vh] border-b-2 border-[#3a90e5] mt-[5vh]"></div>
    </div>
  );
}
