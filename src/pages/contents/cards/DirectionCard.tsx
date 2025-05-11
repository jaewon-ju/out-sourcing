import { NCTDirection } from "../../../store/slices/nctContentSlice";

interface DirectionCardProps {
  singerName: string;
  direction: NCTDirection;
}

const DirectionCard = ({ singerName, direction }: DirectionCardProps) => {
  return (
    <div id="DirectionCards" className={`flex flex-col gap-4 w-[80%]`}>
      <div className="border border-black">
        <img src={direction.image[0][0]} />
      </div>
    </div>
  );
};

export default DirectionCard;
