import { useEffect, useState } from "react";
import { collection, addDoc, getDocs, Timestamp } from "firebase/firestore";
import { db } from "../firebase";
import { v4 as uuidv4 } from "uuid";

export function SurveyBox({ placeholder }: { placeholder: string }) {
  const [opinion, setOpinion] = useState("");
  const [email, setEmail] = useState("");
  const [entries, setEntries] = useState<any[]>([]);

  console.log(entries);
  const fetchEntries = async () => {
    const snapshot = await getDocs(collection(db, "surveys"));
    const data = snapshot.docs.map((doc) => doc.data());
    setEntries(data.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addDoc(collection(db, "surveys"), {
      id: uuidv4(),
      email,
      opinion,
      createdAt: Timestamp.now(),
    });
    setOpinion("");
    setEmail("");
    fetchEntries();
  };

  useEffect(() => {
    fetchEntries();
  }, []);

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
            w-[80%] placeholder:text-[1.2vw] font-[Bodoni] placeholder:p-[2vh]
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
