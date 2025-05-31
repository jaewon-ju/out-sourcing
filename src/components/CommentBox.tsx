import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const nicknames = ["고양이", "노스텔", "감성인", "무지개", "기억상자"];
const profileImages = [
  "/survey/face/face1.png",
  "/survey/face/face2.png",
  "/survey/face/face3.png",
  "/survey/face/face4.png",
  "/survey/face/face5.png",
  "/survey/face/face6.png",
  "/survey/face/face7.png",
  "/survey/face/face8.png",
  "/survey/face/face9.png",
  "/survey/face/face10.png",
  "/survey/face/face11.png",
  "/survey/face/face12.png",
  "/survey/face/face13.png",
  "/survey/face/face14.png",
  "/survey/face/face15.png",
  "/survey/face/face16.png",
];

function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function CommentBox() {
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
    <div className="flex flex-col items-center justify-center w-[40vw] mt-[10vh]">
      {/* 타인의 기억 들여다보기*/}
      <div className="flex items-center justify-start w-full text-[1.2vw] font-[Bodoni]">
        <img
          src="/survey/person.png"
          alt="person"
          className="w-[7vw] h-[7vw]"
        />
        타인의 기억 들여다보기
      </div>
      <div className="space-y-[1vh] max-h-[50vh] overflow-y-scroll w-full bg-white p-[2vh]">
        {entries.map((entry, idx) => {
          const nickname =
            getRandomItem(nicknames) + Math.floor(Math.random() * 1000);
          const profile = getRandomItem(profileImages);
          return (
            <div
              key={idx}
              className="flex flex-col items-start gap-4 border p-4 rounded-md bg-white bg-opacity-80"
            >
              <div
                className="flex flex-row items-center justify-between px-[1vw] w-[90%]
              bg-[url('/survey/bar.png')] aspect-[1829/160] bg-cover bg-center"
              >
                <div className="text-[1.2vw] font-[Bodoni]">{`no.${
                  idx + 1
                } ${nickname}`}</div>
                <div className="text-[1.2vw] font-[Bodoni]">
                  {`<${entry.createdAt.toDate().toLocaleString()}>`}
                </div>
              </div>

              {/* 표정 + 댓글*/}
              <div className="flex flex-row items-start gap-4 w-[90%]">
                <img src={profile} alt={profile} className="w-[5vw] h-[5vw]" />
                <div className="text-[1.2vw] font-[Bodoni]">
                  {entry.opinion}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
