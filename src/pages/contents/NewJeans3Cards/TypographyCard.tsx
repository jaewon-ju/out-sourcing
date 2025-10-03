import { Typography } from "../../../store/slices/newjeans3ContentSlice";

interface TypographyCardProps {
  singerName: string;
  typography: Typography;
}

const TypographyCard = ({ singerName, typography }: TypographyCardProps) => {
  return (
    <div
      id="TypographyCards"
      className="relative w-[80%] aspect-[3212/4813] overflow-hidden bg-gray-200 flex items-center justify-center"
    >
      <p className="text-[2vw] text-gray-500">No typography images available</p>
    </div>
  );
};

export default TypographyCard;
