import Button from "@mui/material/Button";
import PeopleIcon from "@mui/icons-material/People";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CampaignIcon from "@mui/icons-material/Campaign";
import { useStateContext } from "../../ContextProvider/Contexts";
import { auth } from "../../features/firebase"; 
import { signOut } from "firebase/auth";
import { TreeDeciduous } from "lucide-react";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import SmsIcon from "@mui/icons-material/Sms";
import { useTrainerContext } from "../../ContextProvider/TrainerContext";
const Nav_Trainer = () => {
  const { buildStep, setBuildStep } = useStateContext();
  const { setImageUpload, setSecondImgUpload, setVideoUpload} = useTrainerContext();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("Name");
        localStorage.removeItem("profilePic");
        localStorage.removeItem("email");
        localStorage.removeItem("name");
        console.log("user sign out");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const handleLink = () => {
    setImageUpload(undefined)
    setSecondImgUpload(undefined)
    setVideoUpload(undefined)
  }

  return (
    <div className="w-1/5  bg-[#051e34] flex-col items-center select-none hidden sm:flex">
      {/* Logo Title */}
      <Link to="/" onClick={handleLink}>
        <div className="flexCenter space-x-3 my-2">
          {/* <TreeDeciduous color="#149e7a" size={40} /> */}
          <p className="text-3xl font-semibold text-white">FitMeet</p>
        </div>
      </Link>

      <div className="border-t border-b border-gray-600 ">
        <p className="text-gray-300 text-1xl pt-6 pl-8">
          簡單三步驟，五分鐘增加客源
        </p>
        <div className="px-7 space-y-10 flex pb-4">
          <div
            className={` w-[1px] self-stretch bg-gray-400 opacity-100 dark:opacity-50 ml-4 mt-4`}
          ></div>
          <div className="pl-5 space-y-10">
            <Button
              variant="contained"
              sx={{
                height: 50,
                backgroundColor: "#F4F5FB",
                borderRadius: "100",
                ":hover": { backgroundColor: "#F4F5FB" },
              }}
              startIcon={
                <PeopleIcon
                  sx={{
                    color: buildStep === 1 ? "#007CEF" : "#000",
                  }}
                />
              }
              onClick={() => setBuildStep(1)}
            >
              <p
                className={`whitespace-nowrap font-bold ${
                  buildStep === 1 ? "text-[#007CEF]" : "text-black"
                }`}
              >
                填寫基本資料
              </p>
            </Button>
            <Button
              variant="contained"
              sx={{
                height: 50,
                backgroundColor: "#F4F5FB",
                borderRadius: "100",
                ":hover": { backgroundColor: "#F4F5FB" },
              }}
              startIcon={
                <AddPhotoAlternateIcon
                  sx={{
                    color: buildStep === 2 ? "#007CEF" : "#000",
                  }}
                />
              }
              onClick={() => setBuildStep(2)}
            >
              <p
                className={`whitespace-nowrap font-bold ${
                  buildStep === 2 ? "text-[#007CEF]" : "text-black"
                }`}
              >
                上傳訓練照片及日常
              </p>
            </Button>
            <Button
              variant="contained"
              sx={{
                height: 50,
                backgroundColor: "#F4F5FB",
                borderRadius: "100",
                ":hover": { backgroundColor: "#F4F5FB" },
              }}
              startIcon={
                <CampaignIcon
                  sx={{
                    color: buildStep === 3 ? "#007CEF" : "#000",
                  }}
                />
              }
              onClick={() => setBuildStep(3)}
            >
              <p
                className={`whitespace-nowrap font-bold ${
                  buildStep === 3 ? "text-[#007CEF]" : "text-black"
                }`}
              >
                瀏覽模版並發佈個人品牌
              </p>
            </Button>
          </div>
        </div>
      </div>

      {/* <p className="text-gray-300 text-1xl pt-6 pl-8">編輯個人檔案</p> */}

      <div className="w-full flexBetween mt-10 px-10 space-x-5">
        <Button
          variant="contained"
          sx={{
            height: 50,
            backgroundColor: "#F4F5FB",
            ":hover": { backgroundColor: "#F4F5FB" },
          }}
          startIcon={
            <SmsIcon
              sx={{
                color: "#1F8A70"
              }}
            />
          }
          onClick={() => (window.location.href = "mailto:lu001224@gmail.com")}
        >
          <p className={`whitespace-nowrap text-black font-bold`}>專人服務</p>
        </Button>
        <Button
          variant="contained"
          sx={{
            height: 50,
            backgroundColor: "#F4F5FB",
            ":hover": { backgroundColor: "#F4F5FB" },
          }}
          startIcon={<LogoutIcon sx={{color:"#000"}}/>}
          onClick={handleSignOut}
        >
          <p className={`whitespace-nowrap text-black font-bold`}>登出</p>
        </Button>
      </div>
    </div>
  );
};

export default Nav_Trainer;
