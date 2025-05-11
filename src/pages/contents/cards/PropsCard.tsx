import { useState } from "react";
import { NCTProps } from "../../../store/slices/nctContentSlice";

interface PropsCardProps {
  singerName: string;
  props: NCTProps;
}

const PropsCard = ({ singerName, props }: PropsCardProps) => {
  const [popupData, setPopupData] = useState<{
    image: string;
    title: string;
    description: string;
  } | null>(null);

  const handleClick = (image: string, title: string, description: string) => {
    setPopupData({ image, title, description });
  };

  const closePopup = () => setPopupData(null);

  return (
    <div id="PropsCards" className={`grid grid-cols-2 gap-4 w-[80%] `}>
      {/* 첫번째 카드 */}
      <div className="relative bg-gray-200 flex justify-center items-center aspect-square">
        <h1 className="text-xl font-semibold absolute top-[1rem] left-[1rem]">
          No.1
        </h1>
        <img
          src={props.image[0].src}
          className="w-[45%] hover:w-[60%] transition-all duration-300"
          onClick={() =>
            handleClick(
              props.image[0].detailImage,
              props.image[0].detailTitle,
              props.image[0].detailDescription
            )
          }
        />
      </div>

      {/* 두번째 카드 */}
      <div className="relative bg-gray-200 flex justify-center items-center aspect-square">
        <h1 className="text-xl font-semibold absolute top-[1rem] left-[1rem]">
          No.1
        </h1>
        <img
          src={props.image[1].src}
          className="w-[45%] hover:w-[60%] transition-all duration-300"
          onClick={() =>
            handleClick(
              props.image[1].detailImage,
              props.image[1].detailTitle,
              props.image[1].detailDescription
            )
          }
        />
      </div>

      {/* 세번째 카드 */}
      <div className="relative bg-gray-200 flex justify-center items-center aspect-square">
        <h1 className="text-xl font-semibold absolute top-[1rem] left-[1rem]">
          No.1
        </h1>
        <img
          src={props.image[2].src}
          className="w-[60%] hover:w-[70%] transition-all duration-300"
          onClick={() =>
            handleClick(
              props.image[2].detailImage,
              props.image[2].detailTitle,
              props.image[2].detailDescription
            )
          }
        />
      </div>

      {/* 네번째 카드 */}
      <div className="relative bg-gray-200 flex justify-center items-center aspect-square">
        <h1 className="text-xl font-semibold absolute top-[1rem] left-[1rem]">
          No.1
        </h1>
        <img
          src={props.image[3].src}
          className="w-[60%] hover:w-[70%] transition-all duration-300"
          onClick={() =>
            handleClick(
              props.image[3].detailImage,
              props.image[3].detailTitle,
              props.image[3].detailDescription
            )
          }
        />
      </div>

      {/* 팝업 */}
      {popupData && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-[40%] border border-black">
            <div className="bg-[#A2C7E9] m-[0.5rem] border border-black p-4">
              <button
                onClick={closePopup}
                className=" w-[1.5rem] h-[1.5rem] mb-[1rem] text-black text-xl border border-black bg-gray-200 flex justify-center items-center"
              >
                X
              </button>
              <img
                src={popupData.image}
                alt={popupData.title}
                className="w-full h-auto rounded mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{popupData.title}</h2>
              <p className="text-sm">{popupData.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropsCard;
