import { Button } from "@mui/material";
import { useTrainerContext } from "../../ContextProvider/TrainerContext";
import { useStateContext } from "../../ContextProvider/Contexts";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import InstagramIcon from "@mui/icons-material/Instagram";
import { IconButton } from "@mui/material";
interface TrainerThirdProps {
  // image: File | undefined;
  // video: File | undefined;
  handleDataUpload: any;
}

const TrainerThird = ({ handleDataUpload }: TrainerThirdProps) => {
  const {
    name,
    location,
    title,
    expYear,
    priceRange,
    line,
    insta,
    firstTime,
    secondTime,
    thirdTime,
    experience,
    goalInTime,
    description,
    trainingMethod,
    navStep,
    setNavStep
  } = useTrainerContext();

  const { userData } = useStateContext();

  const Navbar = ["自我介紹", "我能幫助你", "我的經歷"];

  console.log(userData);

  return (
    <div className="p-4  select-none ">
      {
        userData &&
        <div className="p-6 border border-black rounded-xl 2xl:space-y-10">
          {/* 照片及自介 */}
          <div className="flexBetween space-x-6">
            <img
              src={userData?.imgUrl}
              className="w-1/2 h-auto rounded-lg block"
            />
            <div className=" 2xl:space-y-4 w-full ">
              <div className="flexCenter ">
                <p className="text-3xl 2xl:text-5xl 2xl:mr-6">{userData?.name}</p>
                <IconButton
                  onClick={() => window.open(userData.insta, "_blank")}
                  className="icon-button "

                >
                  <InstagramIcon color="primary" sx={{ fontSize: "35px" }} />
                </IconButton>
                <div
                  className="cursor-pointer icon-button "
                  onClick={() => window.open(userData.line, "_blank")}
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
              <div className="p-4 border border-gray-300 rounded-xl space-y-4">
                <div className="flex items-center">
                  <p className="text-gray-800 text-lg mt-1">職業：</p>
                  <p className="text-xl font-bold">{userData?.title}</p>
                </div>
                <div className="flexCenter">
                  <div className="w-11/12 h-[0.2px] bg-gray-300"></div>
                </div>
                <div className="flex items-center">
                  <p className="text-gray-800 text-lg mt-1">資歷：</p>
                  <p className="text-xl font-bold">{userData?.expYear} 年</p>
                </div>
                <div className="flexCenter">
                  <div className="w-11/12 h-[0.2px] bg-gray-300"></div>
                </div>
                <div className="flex items-center">
                  <p className="text-gray-800 text-lg mt-1">地點：</p>
                  <p className="text-xl font-bold">{userData?.location}</p>
                </div>
                <div className="flexCenter">
                  <div className="w-11/12 h-[0.2px] bg-gray-300"></div>
                </div>
                <div className="flex items-center">
                  <p className="text-gray-800">時段：</p>
                  <div className="flexBetween space-x-2">
                    <div className="p-2 border border-black rounded-xl font-bold bg-[#00d68f] ">
                      {userData?.firstTime}
                    </div>
                    <div className="p-2 border border-black rounded-xl font-bold bg-[#00d68f]">
                      {userData?.secondTime}
                    </div>
                    <div className="p-2 border border-black rounded-xl font-bold bg-[#00d68f]">
                      {userData?.thirdTime}
                    </div>
                  </div>
                </div>
                <div className="flexCenter">
                  <div className="w-11/12 h-[0.2px] bg-gray-300"></div>
                </div>
                <div className="flex items-center">
                  <p className="text-gray-800 text-lg mt-1">價格：</p>
                  <p className="text-xl font-bold">{userData?.priceRange} /hr</p>
                </div>
              </div>
            </div>
          </div>
          {/* 影片及 */}
          <div className="flexBetween">
            <div className="w-full">
              <div className="flexBetween mx-16">
                {Navbar.map((item, index) => (
                  <p className={`text-xl font-bold ${navStep === index ? 'text-[#007CEF] border-b-2' : ''}`} onClick={() => setNavStep(index)}>
                    {item}
                  </p>
                ))}
              </div>

              <div className="h-[350px] mt-10">
                {
                  navStep === 0 &&
                  <p className="text-center p-5">{userData?.experience}</p>
                }
              </div>
            </div>
            <video
              controls
              src={userData?.videoList}
              className="w-1/2 rounded-lg "
            />
          </div>
        </div>
      }
      <Button
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
        onClick={handleDataUpload}
      >
        <p className="text-xl">資料上傳</p>
      </Button>
    </div>
  );
};

export default TrainerThird;
