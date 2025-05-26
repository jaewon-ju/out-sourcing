import { useNavigate } from "react-router-dom";

interface Props {
  page: string;
}

const MovieImage = ({ page }: Props) => {
  const navigate = useNavigate();

  const handleImageClick = (singer: string) => {
    navigate(`/sub/${singer}`);
  };

  return (
    <img
      src={`/images/${page}.jpg`} // public/images/enter.png 위치
      alt={`${page} Subpage`}
      className={`cursor-pointer hover:opacity-80 w-[100%] aspect-[16/9] rounded-tl-3xl rounded-tr-3xl`}
      onClick={() => handleImageClick(page)}
    />
  );
};

export default MovieImage;
