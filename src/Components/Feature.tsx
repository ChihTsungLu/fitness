import { useStateContext } from "../ContextProvider/Contexts";

interface FeatureProps {}

const Feature = ({}: FeatureProps) => {
  const { isStudent, isTrainer, setIsStudent, setIsTrainer } =
    useStateContext();

  const handleTrainerClick = () => {
    setIsTrainer(true);
    setIsStudent(false);
  };

  const handleStudentClick = () => {
    setIsStudent(true);
    setIsTrainer(false);
  };
  return (
    <div className="w-full h-[600px] ">
      <p className="ml-10 mt-10 text-4xl">
        我們協助<u className="">教練找學生</u>，<u>學生找教練</u>
      </p>
      <div className="mt-5 ml-10 space-x-3">
        <button
          className={`w-[150px] h-[40px] border  rounded-full mt-4 ${
            isTrainer
              ? " bg-[#3d4046] border-black"
              : "  bg-[#babec7] border-gray-300 hover:bg-[#3d4046] hover:border-black"
          }`}
          onClick={handleTrainerClick}
        >
          <p className="text-xl text-white">我是教練💪🏽</p>
        </button>
        <button
          className={`w-[150px] h-[40px] border rounded-full mt-4 ${
            isStudent
              ? "bg-[#108a6b] border-black"
              : "bg-[#90cebd] border-gray-300 hover:bg-[#149e7a] hover:border-black"
          } `}
          onClick={handleStudentClick}
        >
          <p className="text-xl text-white">我是學生🏋🏽</p>
        </button>
      </div>

      {/* 教練 */}
      {isTrainer && (
        <div className="mx-10 mt-7 rounded-xl bg-[#3d4046] ">
          <div className="space-y-2 p-10">
            <p className="text-4xl text-white font-bold">
              建立訓練知識數位足跡，讓顧客親自找上門
            </p>

            <p className="text-2xl text-white font-bold">
              簡單三步驟，迅速使用現成工具打造專屬品牌
            </p>
          </div>
          <div className="mt-10 flexBetween mx-20">
            <div className="w-[500px] h-[500px] bg-[#F4F5FB] rounded-xl"></div>
            <div className="w-[500px] h-[500px] bg-[#F4F5FB] rounded-xl"></div>
            <div className="w-[500px] h-[500px] bg-[#F4F5FB] rounded-xl"></div>
          </div>
          <div className="mt-5">
            <p className="text-4xl text-white font-bold p-10">
              XX 能夠幫你達成
            </p>
          </div>
          <div className="mt-2 flexBetween mx-20 pb-10">
            <div className="w-[500px] h-[500px] bg-[#F4F5FB] rounded-xl"></div>
            <div className="w-[500px] h-[500px] bg-[#F4F5FB] rounded-xl"></div>
            <div className="w-[500px] h-[500px] bg-[#F4F5FB] rounded-xl"></div>
          </div>
        </div>
      )}

      {/* 學生 */}
      {isStudent && (
        <div className="mx-10 mt-7 rounded-xl bg-[#FFF3E2] h-[800px] ">
          <div className="space-y-2 p-10">
            <p className="text-4xl text-black font-bold">
              建立訓練知識數位足跡，讓顧客親自找上門
            </p>
            <p className="text-2xl text-black font-bold">
              簡單三步驟，迅速使用現成工具打造專屬品牌
            </p>
          </div>
          <div className="mt-10 flexBetween mx-20">
            <div className="w-[500px] h-[500px] bg-white rounded-xl"></div>
            <div className="w-[500px] h-[500px] bg-white rounded-xl"></div>
            <div className="w-[500px] h-[500px] bg-white rounded-xl"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feature;
