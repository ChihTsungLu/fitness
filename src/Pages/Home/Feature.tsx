import { useState } from "react";
import { useStateContext } from "../../ContextProvider/Contexts";
import { Link } from "react-router-dom";
import TrainerFirstPic from "../../assets/firstT.png";
import TrainerSecondPic from "../../assets/secondT.png";
import TrainerThirdPic from "../../assets/third1.png";
import TrainerThirdPic2 from "../../assets/thirdT2.png";
import ClientFirst from "../../assets/firstC.png";
import ClientSecond from "../../assets/secondC.png";
import ClientSecond2 from "../../assets/secondCC.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
interface FeatureProps {}

const Feature = ({}: FeatureProps) => {
  const { isStudent, isTrainer, setIsStudent, setIsTrainer } =
    useStateContext();

  const [trainerExplainStep, setTrainerExplainStep] = useState(1);
  const [clientExplainStep, setClientExplainStep] = useState(1);

  const handleTrainerClick = () => {
    setIsTrainer(true);
    setIsStudent(false);
  };

  const handleStudentClick = () => {
    setIsStudent(true);
    setIsTrainer(false);
  };

  return (
    <div className="w-full h-fit select-none">
      <div className="mt-5 sm:ml-10 sm:space-x-72 flexCenter max-sm:space-x-4">
        <button
          className={`sm:w-[300px] sm:h-[80px] border-black rounded-xl mt-4 font-extrabold ${
            isTrainer
              ? "bg-[#00d68f] text-black border-2"
              : "bg-white hover:bg-[#00d68f] text-black border"
          } `}
          onClick={handleTrainerClick}
        >
          <p className="text-2xl whitespace-nowrap max-sm:p-1">我是教練 💪🏽</p>
        </button>
        <button
          className={`sm:w-[300px] sm:h-[80px] border-black rounded-xl mt-4 font-extrabold ${
            isStudent
              ? "bg-[#149e7a] text-white border-2"
              : "bg-white hover:bg-[#149e7a] hover:text-white text-black border"
          } `}
          onClick={handleStudentClick}
        >
          <p className="text-2xl whitespace-nowrap max-sm:p-1">我是學生 🏋🏽</p>
        </button>
      </div>

      {/* 教練 */}
      {isTrainer && (
        <div className="mt-7 px-3 sm:px-20 pb-4 rounded-xl bg-[#eef5ff] ">
          <div className="sm:space-y-4 xl:max-2xl:ml-4  2xl:ml-20 2xl:pt-24 pt-10 max-sm:mb-10">
            <p className="text-4xl text-black font-bold hidden sm:block ">
              建立教練知識數位足跡，讓顧客親自找上門
            </p>
            <p className="text-3xl text-black font-bold text-center block sm:hidden">
              建立訓練知識數位足跡
            </p>
            <p className="text-3xl text-black font-bold text-center block sm:hidden">
              讓顧客親自找上門
            </p>

            <p className="text-3xl text-black font-bold max-sm:text-center max-sm:mt-5">
              三步驟打造個人品牌
            </p>
          </div>
          <div className="xl:max-2xl:space-x-12 xl:max-2xl:ml-4 sm:ml-20 sx:mb-12 sm:flex sm:justify-between sm:items-center relative flex max-sm:flex-col-reverse ">
            <div className="max-sm:space-x-2 sm:space-y-8 sm:z-20 sm:flex-col flex max-sm:mt-7 mb-14">
              <div
                className={`justify-center home-trainer-feature max-sm:w-[150px] max-sm:h-[80px] ${
                  trainerExplainStep === 1
                    ? " border border-purple-500 bg-white"
                    : "bg-gray-50 border border-gray-300"
                }`}
                onMouseEnter={() => setTrainerExplainStep(1)}
              >
                <div className="flexCenter sm:block">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#ef4444"
                      d="M6 5v14h3v-6h6v6h3V5h-3v6H9V5zM3 15a1 1 0 0 0 1 1h1V8H4a1 1 0 0 0-1 1v2H2v2h1v2zm18-6a1 1 0 0 0-1-1h-1v8h1a1 1 0 0 0 1-1v-2h1v-2h-1V9z"
                    />
                  </svg>
                </div>
                <div className="sm:space-y-1">
                  <p className="font-black text-2xl hidden sm:block">
                    提供個人專業經歷及訓練日常
                  </p>
                  <p className="font-bold text-xl hidden sm:block ">
                    讓學員從線上認識你
                  </p>
                  <p className="sm:hidden block text-center text-lg font-bold">
                    專業
                  </p>
                </div>
              </div>
              <div
                className={`justify-center home-trainer-feature max-sm:w-[150px] max-sm:h-[80px] ${
                  trainerExplainStep === 2
                    ? " border border-purple-500 bg-white "
                    : "bg-gray-50 border border-gray-300"
                }`}
                onMouseEnter={() => setTrainerExplainStep(2)}
              >
                <div className="flexCenter sm:block">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#3b82f6"
                      d="M9 13V5c0-1.1.9-2 2-2h9c1.1 0 2 .9 2 2v6h-3.43l-1.28-1.74a.14.14 0 0 0-.24 0L15.06 12c-.06.06-.18.07-.24 0l-1.43-1.75a.152.152 0 0 0-.23 0l-2.11 2.66c-.08.09-.01.24.11.24h6.34V15H11c-1.11 0-2-.89-2-2m-3 9v-1H4v1H2V2h2v1h2V2h2.39C7.54 2.74 7 3.8 7 5v8c0 2.21 1.79 4 4 4h4.7c-1.03.83-1.7 2.08-1.7 3.5c0 .53.11 1.03.28 1.5H6M4 7h2V5H4v2m0 4h2V9H4v2m0 4h2v-2H4v2m2 4v-2H4v2h2m17-6v2h-2v5.5a2.5 2.5 0 0 1-5 0a2.5 2.5 0 0 1 3.5-2.29V13H23Z"
                    />
                  </svg>
                </div>
                <div className="space-y-1">
                  <p className="font-black text-2xl hidden sm:block">
                    上傳照片及影片
                  </p>
                  <p className="font-bold text-xl hidden sm:block">
                    將日常訓練素材發揮最大效益
                  </p>
                  <p className="sm:hidden block font-bold text-lg text-center">
                    照片及影片
                  </p>
                </div>
              </div>
              <div
                className={`justify-center home-trainer-feature max-sm:w-[150px] max-sm:h-[80px] ${
                  trainerExplainStep === 3
                    ? " border border-purple-500 bg-white"
                    : "bg-gray-50 border border-gray-300"
                }`}
                onMouseEnter={() => setTrainerExplainStep(3)}
              >
                <div className="flexCenter sm:block">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#10b981"
                      d="M459.15 269.75a133.197 133.197 0 0 1-55.862 179.975l-42.782 22.541l-10.52 5.533a71.277 71.277 0 0 1-62.966 1.685l-167.077-71.38l15.733-46.676l99.363 19.194l-51.458-97.78l-82.843-157.411l40.357-21.232l82.844 157.457l19.934-10.485l-36.521-69.445l40.335-21.22l36.52 69.445l19.935-10.485l-28.2-53.598l40.358-21.232l28.2 53.598l19.945-10.576l-19.354-36.886l40.346-21.174l19.354 36.885l54.348 103.301zM73.268 146.674a60.03 60.03 0 0 1 42.361-102.459a60.098 60.098 0 0 1 56.58 80.169l10.588 20.013A78.29 78.29 0 0 0 115.708 26a78.233 78.233 0 0 0-5.635 156.262L99.428 162.02a59.688 59.688 0 0 1-26.16-15.346z"
                    />
                  </svg>
                </div>
                <div className="space-y-1">
                  <p className="font-black hidden text-2xl sm:block">
                    一鍵發佈，打破空間及時間限制
                  </p>
                  <p className="font-bold hidden text-xl sm:block">
                    傳播專業知識，從沒那麼簡單！
                  </p>
                  <p className="sm:hidden block font-bold text-lg max-sm:text-center">
                    一鍵發佈
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-end justify-end xl:max-2xl:pl-10 ">
              {trainerExplainStep === 1 && (
                <div className="max-sm:space-y-7">
                  <img
                    src={TrainerFirstPic}
                    className="rounded-xl LgPicSize sm:w-11/12 sm:h-[600px]"
                  />
                  <div className="block sm:hidden">
                    <p className="text-center block sm:hidden text-lg font-bold">
                      提供個人專業經歷及訓練日常
                    </p>
                    <Link to="/trainer" className="flexCenter">
                      <p className="text-center block sm:hidden text-lg font-bold text-[#007CEF]">
                        讓學員從線上認識你
                      </p>
                      <ArrowForwardIcon sx={{ color: "#007CEF" }} />
                    </Link>
                  </div>
                </div>
              )}
              {trainerExplainStep === 2 && (
                <div className="max-sm:space-y-4">
                  <img
                    src={TrainerSecondPic}
                    className="rounded-xl LgPicSize sm:w-full sm:h-[600px]"
                  />
                  <div className="block sm:hidden">
                    <p className="text-center block sm:hidden text-lg font-bold">
                      將日常訓練素材發揮最大效益
                    </p>
                    <Link to="/trainer" className="flexCenter">
                      <p className="text-center block sm:hidden text-lg font-bold text-[#007CEF]">
                        建立網絡社群
                      </p>
                      <ArrowForwardIcon sx={{ color: "#007CEF" }} />
                    </Link>
                  </div>
                </div>
              )}
              {trainerExplainStep === 3 && (
                <div className="sm:flex max-sm:space-y-4 ">
                  <img
                    src={TrainerThirdPic}
                    alt="First Image"
                    className="rounded-xl w-[900px] sm:h-[600px] absolute right-32 top-32 z-1"
                  />
                  <img
                    src={TrainerThirdPic2}
                    alt="Second Image"
                    className="rounded-xl sm:w-full sm:h-[600px]"
                  />
                  <div className="block sm:hidden">
                    <p className="text-center block sm:hidden text-lg font-bold">
                      傳播專業知識
                    </p>
                    <Link to="/trainer" className="flexCenter">
                      <p className="text-center block sm:hidden text-lg font-bold text-[#007CEF]">
                        從沒那麼簡單
                      </p>
                      <ArrowForwardIcon sx={{ color: "#007CEF" }} />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 學生 */}
      {isStudent && (
        <div className="mt-7 px-3 sm:px-20 pb-4 rounded-xl bg-[#eef5ff]  ">
          <div className="sm:space-y-4 2xl:ml-20 2xl:pt-24 pt-10 max-sm:mb-10">
            <p className="text-4xl text-black font-bold hidden sm:block">
              透明教練及訓練資訊，達成體態的一站式平台
            </p>
            <p className="text-2xl text-black font-bold hidden sm:block">
              輕鬆找到理想健身夥伴，訓練路上不再有疑惑
            </p>
            {/* 手機板 */}
            <p className="text-3xl text-black font-bold text-center block sm:hidden">
              透明教練及訓練資訊
            </p>
            <p className="text-2xl text-black font-bold text-center block sm:hidden">
              符合專業需求、地點、價格
            </p>
            <p className="text-3xl text-black font-bold max-sm:text-center max-sm:mt-5 block sm:hidden">
              輕鬆找到專屬教練
            </p>
          </div>
          <div className="2xl:ml-20 sx:mb-12 sm:flex sm:justify-between sm:items-center relative flex max-sm:flex-col-reverse">
            <div className="max-sm:space-x-2 sm:space-y-8 sm:z-20 sm:flex-col flex max-sm:mt-7 mb-14">
              <div
                className={`justify-center home-trainer-feature max-sm:w-[150px] max-sm:h-[80px] ${
                  clientExplainStep === 1
                    ? " border border-purple-500 bg-white"
                    : "bg-gray-50 border border-gray-300"
                }`}
                onMouseEnter={() => setClientExplainStep(1)}
              >
                <div className="flexCenter sm:block">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#ec4899"
                      d="m23 2l1.593 3L28 5.414l-2.5 2.253L26 11l-3-1.875L20 11l.5-3.333L18 5.414L21.5 5L23 2z"
                    />
                    <path
                      fill="#ec4899"
                      d="m22.717 13.249l-1.938-.498a6.994 6.994 0 1 1-5.028-8.531l.499-1.937A8.99 8.99 0 0 0 8 17.69V30l6-4l6 4V17.708a8.963 8.963 0 0 0 2.717-4.459ZM18 26.263l-4-2.667l-4 2.667V19.05a8.924 8.924 0 0 0 8 .006Z"
                    />
                  </svg>
                </div>
                <div className="space-y-1">
                  <p className="font-black  hidden text-2xl sm:block">
                    一鍵瀏覽教練專業經歷及教學模式
                  </p>
                  <p className="font-bold hidden text-xl sm:block">
                    選擇訓練夥伴，更快更輕鬆
                  </p>
                  <p className="font-bold block sm:hidden text-lg text-center ">專業知識</p>
                </div>
              </div>
              <div
                className={`justify-center home-trainer-feature max-sm:w-[150px] max-sm:h-[80px] ${
                  clientExplainStep === 2
                    ? " border border-purple-500 bg-white"
                    : "bg-gray-50 border border-gray-300"
                }`}
                onMouseEnter={() => setClientExplainStep(2)}
              >
                <div className="flexCenter sm:block">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      stroke="#10b981"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M33.41 19.83a17.61 17.61 0 0 1 1.29-9.13c.18-.36.52-.78.18-1.17s-.81-.12-1.21 0a7.78 7.78 0 0 0-4.79 4c-.27.47-.46.94-1.19.84a33.57 33.57 0 0 0-7.43-.14a13.38 13.38 0 0 0-5.32 1.46A12.88 12.88 0 0 0 9.27 22a2 2 0 0 1-.12-.41c-.28-1.3-1-2-2.13-1.83H7A1.91 1.91 0 0 0 5.36 22A6.86 6.86 0 0 0 8 27.79a1.58 1.58 0 0 1 .64.92a12 12 0 0 0 3.88 6.35a2.76 2.76 0 0 1 1 2.39c-.27 2.72.81 4.1 3.77 4.5a5.88 5.88 0 0 0 .69.12c2 .41 1.78.4 2.15-1.42c.25-1.22.74-1.58 2-1.39a17.62 17.62 0 0 0 3.08.15c2.47 0 2.48 0 3.15 2.31c.12.42.21.88.8.77a15.36 15.36 0 0 0 4-.93a2.55 2.55 0 0 0 1.73-2.31c-.21-2.13.48-3 1.76-4.59c.18-.21.56-.58.77-.88a4.42 4.42 0 0 1 3.52-2.06c1.21-.06 1.75-.43 1.75-1.82v-4.2a1.66 1.66 0 0 0-1.46-1.82a4.24 4.24 0 0 1-3.09-2.54a12.23 12.23 0 0 0-4.72-5m1.63 10.86a1.79 1.79 0 0 1-1.68-1.89v0a1.76 1.76 0 0 1 1.85-1.66h0a1.79 1.79 0 1 1-.2 3.57Z"
                    />
                    <path
                      fill="none"
                      stroke="#10b981"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.94 14.82A4.7 4.7 0 1 1 23 14"
                    />
                  </svg>
                </div>
                <div className="space-y-1">
                  <p className="font-black hidden text-2xl sm:block">
                    符合預算、方便性及訓練目標
                  </p>
                  <p className="font-bold hidden text-xl sm:block">
                    親自聯繫教練，價格透明
                  </p>
                  <p className="font-bold block sm:hidden text-lg text-center ">個人需求</p>
                </div>
              </div>
              <div
                className={`justify-center home-trainer-feature max-sm:w-[150px] max-sm:h-[80px] ${
                  clientExplainStep === 3
                    ? " border border-purple-500 bg-white"
                    : "bg-gray-50 border border-gray-300"
                }`}
                onMouseEnter={() => setClientExplainStep(3)}
              >
                <div className="flexCenter sm:block">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#ff7f09"
                      d="M16.5 5.5a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m-3.6 13.9l1-4.4l2.1 2v6h2v-7.5l-2.1-2l.6-3A7.298 7.298 0 0 0 22 13v-2c-1.76.03-3.4-.89-4.3-2.4l-1-1.6c-.36-.6-1-1-1.7-1c-.3 0-.5.1-.8.1L9 8.3V13h2V9.6l1.8-.7l-1.6 8.1l-4.9-1l-.4 2l7 1.4M4 9a1 1 0 0 1-1-1a1 1 0 0 1 1-1h3v2H4m1-4a1 1 0 0 1-1-1a1 1 0 0 1 1-1h5v2H5m-2 8a1 1 0 0 1-1-1a1 1 0 0 1 1-1h4v2H3Z"
                    />
                  </svg>
                </div>
                <div className="space-y-1">
                  <p className="font-black hidden text-2xl sm:block">
                    降低培養運動習慣阻礙
                  </p>
                  <p className="font-bold hidden sm:block text-xl">建立長期強健體態</p>
                  <p className="font-bold block sm:hidden text-lg text-center ">降低阻礙</p>
                </div>
              </div>
            </div>
            <div className="flex items-end justify-end relative ">
              {clientExplainStep === 1 && (
                <div className="max-sm:space-y-7">
                  <img
                    src={ClientFirst}
                    className="rounded-xl LgPicSize sm:w-4/5 sm:ml-44 sm:h-[600px]"
                  />
                  <div className="block sm:hidden">
                    <p className="text-center block sm:hidden text-lg font-bold">
                      一鍵瀏覽教練專業經歷及教學模式
                    </p>
                    <Link to="/client" className="flexCenter">
                      <p className="text-center block sm:hidden text-lg font-bold text-[#007CEF]">
                        選擇訓練夥伴，更快更輕鬆
                      </p>
                      <ArrowForwardIcon sx={{ color: "#007CEF" }} />
                    </Link>
                  </div>
                </div>
              )}
              {clientExplainStep === 2 && (
                <div className="max-sm:space-y-7">
                  <img
                    src={ClientSecond}
                    className="rounded-xl LgPicSize 2xl:w-full xl:max-2xl:w-[600px] sm:h-[600px]"
                  />
                  <div className="block sm:hidden">
                    <p className="text-center block sm:hidden text-lg font-bold">
                      符合預算、方便性及訓練目標
                    </p>
                    <Link to="/client" className="flexCenter">
                      <p className="text-center block sm:hidden text-lg font-bold text-[#007CEF]">
                        查看教練
                      </p>
                      <ArrowForwardIcon sx={{ color: "#007CEF" }} />
                    </Link>
                  </div>
                </div>
              )}
              {clientExplainStep === 3 && (
                <div className="max-sm:space-y-7">
                  <img
                    src={ClientSecond2}
                    className="rounded-xl LgPicSize 2xl:w-full xl:max-2xl:w-[600px] sm:h-[600px]"
                  />
                  <div className="block sm:hidden">
                    <p className="text-center block sm:hidden text-lg font-bold">
                      降低培養運動習慣阻礙
                    </p>
                    <Link to="/client" className="flexCenter">
                      <p className="text-center block sm:hidden text-lg font-bold text-[#007CEF]">
                        建立長期強健體態
                      </p>
                      <ArrowForwardIcon sx={{ color: "#007CEF" }} />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feature;
