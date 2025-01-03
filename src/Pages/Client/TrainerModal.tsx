import Modal from "@mui/material/Modal";
import { useClientContext } from "../../ContextProvider/ClientContext";
import { storage } from "../../features/firebase";

import {
  ref,
  getDownloadURL,
  listAll,
  getMetadata,
  updateMetadata,
} from "firebase/storage";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useStateContext } from "../../ContextProvider/Contexts";
import { useEffect, useState } from "react";
import { db } from "../../features/firebase";
import { IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import playIcon from "../../assets/play.png";
import mockImg from "../../assets/modalPic.avif";
import videoMig from "../../assets/modalMock.avif";
interface TrainerModalProps {
  name: string;
}

const TrainerModal = ({ name }: TrainerModalProps) => {
  const { modalOpen, setModalOpen } = useClientContext();
  const [videoURL, setVideoURL] = useState<string>("");
  const [userData, setUserData] = useState<any>();

  const videoRef = ref(storage, "videos/");

  const [navStep, setNavStep] = useState(0);
  const databaseRef = collection(db, "trainer");

  // const { userName } = useStateContext();

  const fetchData = async () => {
    const q = query(databaseRef, where("name", "==", name));
    const querySnapshot = await getDocs(q);
    const newData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setUserData(newData[0]);
  };
  const Navbar = [
    "自我介紹",
    "幫助過學生解決的問題",
    "我能如何幫助你",
    "證照",
  ];

  const getUserVideos = async () => {
    const videosList = await listAll(videoRef);

    getDownloadURL(videoRef).then((url) => {
      setVideoURL(url);
    });
  };

  // console.log(userData);

  useEffect(() => {
    fetchData();
  }, [name]);

  const mockData = [
    {
      name: "示範教練",
      title: "自由教練",
      expYear: 6,
      location: "台北 / 新北 / 桃園 ",
      priceRange: " 800 ~ 1200",
      firstTime: "週一 15:00 ~ 19:00",
      secondTime: "週三 15:00 ~ 19:00",
      thirdTime: "週五 15:00 ~ 19:00",
      experience:
        "大家好，我是一位經驗豐富的專業健身教練，擁有超過6年的個人訓練和團體健身指導經驗。我專注於量身定制的健身計劃，幫助學生實現目標，無論是減重、增肌還是提高整體健康。我注重科學訓練方法，結合營養知識，確保學生以安全有效的方式達成目標。來加入我，一起邁向更健康、更強壯的生活吧！",
      goalInTime:
        "作為專業健身教練，我幫助過眾多學生達成各種目標，從減脂塑形、增加肌肉質量到改善整體體態。例如，我指導一位學生成功減掉20公斤，並增強體能；另一位學生在我的輔導下，從完全的健身新手變成了馬拉松運動員。我的訓練計劃著重個人化和長期可持續性，確保學生能安全有效地達成他們的健身目標。",
      trainingMethod:
        "作為專業健身教練，我不僅幫助學生達成健身目標，更重要的是改善他們的整體生活質量。通過定制的訓練計劃和營養建議，我幫助學生提升體能、增加自信，並培養持之以恆的運動習慣。我相信，透過鍛煉，人們不僅能改善體形和健康，還能學會自我管理、耐力和紀律，這些都是寶貴的生活技能。讓我們一起創造一個更健康、更活力的生活方式！",
      certOne: "拿過的證照 1",
      certTwo: "拿過的證照 2",
      certThree: "拿過的證照 3",
      secondImgUrl: mockImg,
      videoUrl: "",
      videoMock: playIcon,
    },
  ];

  const handleModalClose = () => {
    setModalOpen(false);
    setUserData("");
  };

  return (
    <Modal open={modalOpen} onClose={handleModalClose}>
      {
        <div className="TrainerModal overflow-y-auto select-none">
          <div className="2xl:space-y-10">
            {/* 照片及自介 */}

            <div className="flexBetween space-x-6">
              <img
                src={userData?.secondImgUrl}
                className="w-1/2 h-auto rounded-lg block"
              />
              <div className=" 2xl:space-y-4 w-full ">
                <div className="flexCenter ">
                  <p className="text-3xl 2xl:text-5xl 2xl:mr-6 font-bold">
                    {userData?.name}
                  </p>
                  <IconButton
                    // onClick={() => window.open(userDatainsta, "_blank")}
                    className="icon-button "
                  >
                    <InstagramIcon color="primary" sx={{ fontSize: "35px" }} />
                  </IconButton>
                  <div
                    className="cursor-pointer icon-button "
                    // onClick={() => window.open(userDataline, "_blank")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="40"
                      height="40"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#00c300"
                        d="M12.5,42h23c3.59,0,6.5-2.91,6.5-6.5v-23C42,8.91,39.09,6,35.5,6h-23C8.91,6,6,8.91,6,12.5v23C6,39.09,8.91,42,12.5,42z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M37.113,22.417c0-5.865-5.88-10.637-13.107-10.637s-13.108,4.772-13.108,10.637c0,5.258,4.663,9.662,10.962,10.495c0.427,0.092,1.008,0.282,1.155,0.646c0.132,0.331,0.086,0.85,0.042,1.185c0,0-0.153,0.925-0.187,1.122c-0.057,0.331-0.263,1.296,1.135,0.707c1.399-0.589,7.548-4.445,10.298-7.611h-0.001C36.203,26.879,37.113,24.764,37.113,22.417z M18.875,25.907h-2.604c-0.379,0-0.687-0.308-0.687-0.688V20.01c0-0.379,0.308-0.687,0.687-0.687c0.379,0,0.687,0.308,0.687,0.687v4.521h1.917c0.379,0,0.687,0.308,0.687,0.687C19.562,25.598,19.254,25.907,18.875,25.907z M21.568,25.219c0,0.379-0.308,0.688-0.687,0.688s-0.687-0.308-0.687-0.688V20.01c0-0.379,0.308-0.687,0.687-0.687s0.687,0.308,0.687,0.687V25.219z M27.838,25.219c0,0.297-0.188,0.559-0.47,0.652c-0.071,0.024-0.145,0.036-0.218,0.036c-0.215,0-0.42-0.103-0.549-0.275l-2.669-3.635v3.222c0,0.379-0.308,0.688-0.688,0.688c-0.379,0-0.688-0.308-0.688-0.688V20.01c0-0.296,0.189-0.558,0.47-0.652c0.071-0.024,0.144-0.035,0.218-0.035c0.214,0,0.42,0.103,0.549,0.275l2.67,3.635V20.01c0-0.379,0.309-0.687,0.688-0.687c0.379,0,0.687,0.308,0.687,0.687V25.219z M32.052,21.927c0.379,0,0.688,0.308,0.688,0.688c0,0.379-0.308,0.687-0.688,0.687h-1.917v1.23h1.917c0.379,0,0.688,0.308,0.688,0.687c0,0.379-0.309,0.688-0.688,0.688h-2.604c-0.378,0-0.687-0.308-0.687-0.688v-2.603c0-0.001,0-0.001,0-0.001c0,0,0-0.001,0-0.001v-2.601c0-0.001,0-0.001,0-0.002c0-0.379,0.308-0.687,0.687-0.687h2.604c0.379,0,0.688,0.308,0.688,0.687s-0.308,0.687-0.688,0.687h-1.917v1.23H32.052z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="p-4 rounded-xl space-y-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <p className="text-gray-400 text-lg mt-1">職業：</p>
                    <p className="text-xl">{userData?.title}</p>
                  </div>
                  <div className="flexCenter">
                    <div className="w-11/12 h-[0.2px] bg-gray-300"></div>
                  </div>
                  <div className="flex items-center">
                    <p className="text-gray-400 text-lg mt-1">資歷：</p>
                    <p className="text-xl ">{userData?.expYear} 年</p>
                  </div>
                  <div className="flexCenter">
                    <div className="w-11/12 h-[0.2px] bg-gray-300"></div>
                  </div>
                  <div className="flex items-center">
                    <p className="text-gray-400 text-lg mt-1">地點：</p>
                    <p className="text-xl ">{userData?.location}</p>
                  </div>
                  <div className="flexCenter">
                    <div className="w-11/12 h-[0.2px] bg-gray-300"></div>
                  </div>

                  <div className="flex items-center">
                    <p className="text-gray-400 text-lg mt-1">價格範圍：</p>
                    <p className="text-xl ">{userData?.priceRange} /hr</p>
                  </div>
                  <div className="flexCenter">
                    <div className="w-11/12 h-[0.2px] bg-gray-300"></div>
                  </div>
                  <div className="items-center">
                    <p className="text-gray-400 text-lg mb-2">時段</p>
                    <div className="flexBetween ">
                      <div className="p-2 font-semibold border border-black rounded-xl  bg-[#00d68f] ">
                        {userData?.firstTime}
                      </div>
                      <div className="p-2 font-semibold border border-black rounded-xl  bg-[#00d68f]">
                        {userData?.secondTime}
                      </div>
                      <div className="p-2 font-semibold border border-black rounded-xl  bg-[#00d68f]">
                        {userData?.thirdTime}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 影片及 */}
            <div className="">
              <div className=" h-[220px] mt-10">
                <div className="flexCenter space-x-6  ">
                  {Navbar.map((item, index) => (
                    <p
                      className={`text-xl font-bold ${
                        navStep === index ? "text-[#007CEF] border-b-2" : ""
                      }`}
                      onClick={() => setNavStep(index)}
                    >
                      {item}
                    </p>
                  ))}
                </div>

                <div className=" mt-10">
                  {navStep === 0 && (
                    <p className="text-center p-5 text-xl">
                      {userData?.experience}
                    </p>
                  )}
                  {navStep === 1 && (
                    <p className="text-center p-5 text-xl">
                      {userData?.goalInTime}
                    </p>
                  )}
                  {navStep === 2 && (
                    <p className="text-center p-5 text-xl">
                      {userData?.trainingMethod}
                    </p>
                  )}
                  {navStep === 3 && (
                    <div className="flexCenter">
                      <p className="text-center p-5 text-xl">
                        {userData?.certOne}
                      </p>
                      <p className="text-center p-5 text-xl">
                        {userData?.certTwo}
                      </p>
                      <p className="text-center p-5 text-xl">
                        {userData?.certThree}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="px-10 pb-10 w-full h-full">
                <video
                  controls
                  controlsList="nodownload" 
                  src={userData?.videoUrl}
                  className="px-10 pb-10 w-full h-[500px]"
                  poster={userData?.videoMock}
                />
              </div>
            </div>
          </div>
        </div>
      }
    </Modal>
  );
};

export default TrainerModal;
