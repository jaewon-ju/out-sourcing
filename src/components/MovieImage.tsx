import { useDispatch } from "react-redux";
import { setHoveredPage } from "../store/slices/uiSlice";
import { useNavigate } from "react-router-dom";

interface Props {
  page: string;
}

const MovieImage = ({ page }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleImageClick = (singer: string) => {
    navigate(`/sub/${singer}`);
  };

  const handleImageHover = () => {
    dispatch(setHoveredPage(page));
  };

  const handleImageLeave = () => {
    dispatch(setHoveredPage("default"));
  };

  return (
    <div className="flex-1 flex items-center justify-center">
      <img
        src={`/images/${page}.jpg`} // public/images/enter.png 위치
        alt={`${page} Subpage`}
        className={`cursor-pointer hover:opacity-80`}
        style={{
          width: "200px",
          height: "auto",
        }}
        onClick={() => handleImageClick(page)}
        onMouseOver={handleImageHover}
        onMouseLeave={handleImageLeave}
      />
    </div>
  );
};

export default MovieImage;
