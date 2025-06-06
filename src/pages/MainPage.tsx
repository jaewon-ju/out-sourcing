import { useEffect, useState } from "react";
import MainLayout from "../MainLayout";

export default function MainPage() {
  const [domReady, setDomReady] = useState(false);

  useEffect(() => {
    const handle = requestAnimationFrame(() => {
      setDomReady(true); // 첫 페인트 이후 감지
    });
    return () => cancelAnimationFrame(handle);
  }, []);

  if (!domReady) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="animate-spin h-12 w-12 rounded-full border-4 border-blue-500 border-t-transparent" />
      </div>
    );
  }

  return <MainLayout />;
}
