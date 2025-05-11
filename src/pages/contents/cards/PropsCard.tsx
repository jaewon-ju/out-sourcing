import { useSelector } from "react-redux";
import { RootState } from "../../../store";

interface PropsCardProps {
  singerName: string;
  title: string;
  imageSrc: string;
  description: string;
}

const PropsCard = ({
  singerName,
  title,
  imageSrc,
  description,
}: PropsCardProps) => {
  const height = useSelector((state: RootState) => state.height[singerName]);

  return (
    <div
      id="PropsCards"
      className={`flex flex-col gap-4 w-[80%]`}
      style={{ height: height ? `${height}px` : "auto" }}
    >
      <div className="border border-gray-400 rounded">
        {/* Header */}
        <div className="bg-blue-400 text-black text-left font-bold px-4 py-2 rounded-t">
          {title}
        </div>

        <div className="flex flex-row gap-4 p-4">
          {/* Image Row */}
          <div className="flex flex-col gap-4 p-4 w-1/2">
            <div className="flex flex-col items-center justify-center border border-gray-300 p-4 w-1/2 rounded">
              <img
                src={imageSrc}
                alt={description}
                className="w-full h-auto object-cover mb-2"
              />
              <p className="text-sm text-center">{description}</p>
            </div>
          </div>

          {/* Image Row */}
          <div className="flex flex-col gap-4 p-4 w-1/2">
            <div className="flex flex-col items-center justify-center border border-gray-300 p-4 w-1/2 rounded">
              <img
                src={imageSrc}
                alt={description}
                className="w-full h-auto object-cover mb-2"
              />
              <p className="text-sm text-center">{description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-gray-400 rounded">
        {/* Header */}
        <div className="bg-blue-400 text-black text-left font-bold px-4 py-2 rounded-t">
          {title}
        </div>

        <div className="flex flex-row gap-4 p-4">
          {/* Image Row */}
          <div className="flex flex-col gap-4 p-4 w-1/2">
            <div className="flex flex-col items-center justify-center border border-gray-300 p-4 w-1/2 rounded">
              <img
                src={imageSrc}
                alt={description}
                className="w-full h-auto object-cover mb-2"
              />
              <p className="text-sm text-center">{description}</p>
            </div>
          </div>

          {/* Image Row */}
          <div className="flex flex-col gap-4 p-4 w-1/2">
            <div className="flex flex-col items-center justify-center border border-gray-300 p-4 w-1/2 rounded">
              <img
                src={imageSrc}
                alt={description}
                className="w-full h-auto object-cover mb-2"
              />
              <p className="text-sm text-center">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropsCard;
