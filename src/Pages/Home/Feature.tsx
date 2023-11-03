import { useEffect } from "react";
import { useStateContext } from "../../ContextProvider/Contexts";
import { useNavigate } from "react-router-dom";
interface FeatureProps {}

const Feature = ({}: FeatureProps) => {
  const navigate = useNavigate();

  const {
    isStudent,
    isTrainer,
    setIsStudent,
    setIsTrainer,
    userName,
    setUserName,
  } = useStateContext();

  const handleTrainerClick = () => {
    setIsTrainer(true);
    setIsStudent(false);
  };

  const handleStudentClick = () => {
    setIsStudent(true);
    setIsTrainer(false);
  };

  useEffect(() => {
    const localName = localStorage.getItem("name");
    setUserName(localName!);
  }, []);

  return (
    <div className="w-full h-fit ">
      <div className="mt-5 ml-10 flexCenter space-x-72">
        <button
          className={`w-[300px] h-[80px] border border-black rounded-xl mt-4 ${isTrainer ? 'bg-[#149e7a] text-white' : 'bg-white hover:bg-[#149e7a] hover:text-white text-black'} `}
          onClick={handleTrainerClick}
        >
          <p className="text-2xl ">建立教練個人品牌 💪🏽</p>
        </button>
        <button
              className={`w-[300px] h-[80px] border border-black rounded-xl mt-4 ${isStudent ? 'bg-[#5adbb5] text-white' : 'bg-white hover:bg-[#5adbb5] hover:text-white text-black'} `}
          onClick={handleStudentClick}
        >
          <p className="text-2xl ">尋找教練/夥伴 🏋🏽</p>
        </button>
      </div>

      {/* 教練 */}
      {isTrainer && (
        <div className="mt-7 rounded-xl bg-[#eef5ff] ">
          <div className="space-y-4 pt-6 px-10">
            <p className="text-4xl text-black font-bold">
              建立訓練知識數位足跡，讓顧客親自找上門
            </p>

            <p className="text-2xl text-black font-bold">
              簡單三步驟，迅速使用現成工具打造個人品牌
            </p>
          </div>
          <div className="m-10 pb-10 flexBetween">
            <div className="space-y-4">
              <div className="home-trainer-feature ">提供個人經歷</div>
              <div className="home-trainer-feature ">上傳照片</div>
              <div className="home-trainer-feature ">
                確認資訊，一鍵建立個人品牌
              </div>
            </div>
            <div>pic</div>
          </div>
        </div>
      )}

      {/* 學生 */}
      {isStudent && (
        <div className="mt-7 rounded-xl bg-[#eef5ff] ">
          <div className="space-y-4 pt-6 px-10">
            <p className="text-4xl text-black font-bold">
              透明教練及訓練資訊，達成體態的一站式平台
            </p>
            <p className="text-2xl text-black font-bold">
              輕鬆取得健身教練資訊，健身路上不再有疑惑
            </p>
          </div>
          <div className="m-10 pb-10 flexBetween">
            <div className="space-y-4">
              <div className="home-trainer-feature flex flex-col justify-between">
                <div className="mt-5 ml-10">1</div>
                <div className="pl-10 pb-6 space-y-1">
                  <p className="font-black text-lg">提供清晰教練資訊</p>
                  <p className="font-bold">選擇合適教練</p>
                </div>
              </div>
              <div className="home-trainer-feature flex flex-col justify-between">
                <div className="mt-5 ml-10">2</div>
                <div className="pl-10 pb-6 space-y-1">
                  <p className="font-black text-lg">
                    符合預算、方便性及訓練目標
                  </p>
                  <p className="font-bold">選擇合適教練</p>
                </div>
              </div>
              <div className="home-trainer-feature flex flex-col justify-between">
                <div className="mt-5 ml-10">3</div>
                <div className="pl-10 pb-6 space-y-1">
                  <p className="font-black text-lg">降低培養運動習慣阻礙</p>
                  <p className="font-bold">建立長期強健體態</p>
                </div>
              </div>
            </div>
            <div>pic</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feature;
