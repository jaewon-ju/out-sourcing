"use client";

import { useEffect, useState } from "react";
import { collection, addDoc, getDocs, Timestamp } from "firebase/firestore";
import { db } from "../firebase";
import { v4 as uuidv4 } from "uuid";

type SurveyEntry = {
  id: string;
  email: string;
  opinion: string;
  createdAt: Timestamp;
};

export default function Survey() {
  const [email, setEmail] = useState("");
  const [opinion, setOpinion] = useState("");
  const [entries, setEntries] = useState<SurveyEntry[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchSurveys = async () => {
    setLoading(true);
    const snapshot = await getDocs(collection(db, "surveys"));
    const data = snapshot.docs.map((doc) => doc.data() as SurveyEntry);
    setEntries(data.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds));
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !opinion) return;

    await addDoc(collection(db, "surveys"), {
      id: uuidv4(),
      email,
      opinion,
      createdAt: Timestamp.now(),
    });
    setEmail("");
    setOpinion("");
    await fetchSurveys();
  };

  useEffect(() => {
    fetchSurveys();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold text-center">사용자 의견 설문조사</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="이메일 주소"
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="어플리케이션에 대한 의견을 남겨주세요."
          className="w-full border border-gray-300 rounded-lg p-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={opinion}
          onChange={(e) => setOpinion(e.target.value)}
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          제출하기
        </button>
      </form>

      <hr />

      <div>
        <h2 className="text-xl font-semibold mb-2">의견 목록</h2>
        {loading ? (
          <p>불러오는 중...</p>
        ) : entries.length === 0 ? (
          <p className="text-gray-500">아직 의견이 없습니다.</p>
        ) : (
          <ul className="space-y-4">
            {entries.map((entry) => (
              <li
                key={entry.id}
                className="border border-gray-200 rounded-lg p-4 shadow-sm"
              >
                <p className="text-sm text-gray-600">{entry.email}</p>
                <p className="mt-1">{entry.opinion}</p>
                <p className="text-xs text-gray-400 mt-2">
                  {entry.createdAt.toDate().toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
