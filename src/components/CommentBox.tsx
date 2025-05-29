import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const nicknames = ["고양이", "노스텔", "감성인", "무지개", "기억상자"];
const profileImages = ["/profile1.png", "/profile2.png", "/profile3.png"];

function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function CommentBox({ title }: { title: string }) {
  const [entries, setEntries] = useState<any[]>([]);

  const fetchEntries = async () => {
    const snapshot = await getDocs(collection(db, "surveys"));
    const data = snapshot.docs.map((doc) => doc.data());
    setEntries(data.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds));
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center my-[5vh] ml-[4vw] mr-[4vw]">
      <h2 className="text-[1.5vw] font-[Bodoni] tracking-tighter leading-tight">
        {title}
      </h2>
      <div className="space-y-4 max-h-[50vh] overflow-y-scroll w-full">
        {entries.map((entry, idx) => {
          const nickname =
            getRandomItem(nicknames) + Math.floor(Math.random() * 1000);
          const profile = getRandomItem(profileImages);
          return (
            <div
              key={idx}
              className="flex items-start gap-4 border p-4 rounded-md bg-white bg-opacity-80"
            >
              <img
                src={profile}
                alt="profile"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="text-sm font-bold">{nickname}</div>
                <div className="text-sm text-gray-700">{entry.opinion}</div>
                <div className="text-xs text-gray-500">
                  {entry.createdAt.toDate().toLocaleString()}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
