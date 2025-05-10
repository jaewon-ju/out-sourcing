import MovieImage from "./MovieImage";

const MovieBox = () => {
  const pages = ["nct", "way", "leehi"];

  return (
    <div className="overflow-x-auto bg-opacity-100 p-4 flex flex-row gap-2 shadow-md">
      {pages.map((page) => (
        <MovieImage key={page} page={page} />
      ))}
    </div>
  );
};

export default MovieBox;
