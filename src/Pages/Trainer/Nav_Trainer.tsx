import Button from "@mui/material/Button";
import PeopleIcon from "@mui/icons-material/People";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CampaignIcon from "@mui/icons-material/Campaign";
import { useStateContext } from "../../ContextProvider/Contexts";
import { useState } from "react";
const Nav_Trainer = () => {
  
  const { buildStep, setBuildStep} = useStateContext();

  return (
    <div className="w-1/5 h-screen bg-[#051e34] flex flex-col items-center">
      {/* Logo Title */}
      <div className=" ">
        <p className="text-white text-lg p-4">FitCenter</p>
      </div>

      <div className="border-t border-b border-gray-600  w-full h-fit">
        <p className="text-gray-300 text-1xl pt-6 pl-8">
          簡單三步驟，五分鐘增加客源
        </p>
        <div className="px-7 space-y-10 flex pb-4">
          <div
            className={`h-[300px] w-[1px] self-stretch bg-gray-400 opacity-100 dark:opacity-50 ml-4 mt-4`}
          ></div>
          <div className="pl-7 w-full space-y-10">
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
                className={`whitespace-nowrap ${
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
                className={`whitespace-nowrap ${
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
                className={`whitespace-nowrap ${
                  buildStep === 3 ? "text-[#007CEF]" : "text-black"
                }`}
              >
                發佈建立個人品牌
              </p>
            </Button>
          </div>
        </div>
      </div>
      <div className="border-t border-b border-gray-600  w-full h-fit">
        <p className="text-gray-300 text-1xl pt-6 pl-8">編輯個人檔案</p>
        <div className="px-7 space-y-10 flex pb-4">
          <div
            className={`h-[100px] w-[1px] self-stretch bg-gray-400 opacity-100 dark:opacity-50 ml-4 mt-4`}
          ></div>
          <div className="pl-7 w-full space-y-10">
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
                    color: buildStep === 1 ? "#000" : "#000",
                  }}
                />
              }
            >
              <p className={`whitespace-nowrap text-black font-bold`}>編輯個人檔案</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav_Trainer;
