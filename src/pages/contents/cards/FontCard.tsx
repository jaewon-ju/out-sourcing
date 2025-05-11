import { NCTFont } from "../../../store/slices/nctContentSlice";

interface FontCardProps {
  singerName: string;
  font: NCTFont;
}

const FontCard = ({ singerName, font }: FontCardProps) => {
  return (
    <div id="FontCards" className={`flex flex-col gap-4 w-[80%]`}>
      <div className="border border-black">
        <img src={font.image[0][0]} />
      </div>
    </div>
  );
};

export default FontCard;
