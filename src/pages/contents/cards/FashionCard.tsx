interface FashionCardProps {
  title: string;
  imageSrc: string;
  description: string;
}

const FashionCard = ({ title, imageSrc, description }: FashionCardProps) => {
  return (
    <div className="flex flex-col gap-4 w-[80%]">
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

export default FashionCard;
