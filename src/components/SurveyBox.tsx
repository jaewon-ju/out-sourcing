import { useEffect, useState } from "react";
import { collection, addDoc, getDocs, Timestamp } from "firebase/firestore";
import { db } from "../firebase";
import { v4 as uuidv4 } from "uuid";

export function SurveyBox({ placeholder }: { placeholder: string }) {
  const [opinion, setOpinion] = useState("");
  const [email, setEmail] = useState("");
  const [entries, setEntries] = useState<any[]>([]);

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
    <div className="flex flex-col items-center justify-center my-[5vh] ml-[4vw] mr-[4vw]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center w-full space-y-4"
      >
        <textarea
          value={opinion}
          onChange={(e) => setOpinion(e.target.value)}
          placeholder={placeholder}
          className="w-full border rounded-md p-2 h-[50vh] placeholder:text-[1.5vw] font-[Bodoni]"
          required
        />
        <button
          type="submit"
          className="w-[20vw] h-[7vh] bg-black text-white py-2 rounded-md hover:opacity-80"
        >
          SEND
        </button>
      </form>
    </div>
  );
}
