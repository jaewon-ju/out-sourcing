// pages/404.tsx
const Custom404 = () => {
  return (
    <div className="w-full flex items-center justify-center bg-black">
      <video
        src="/videos/404.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="object-contain"
      ></video>
    </div>
  );
};

export default Custom404;
