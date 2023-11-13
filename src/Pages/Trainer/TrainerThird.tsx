import { Button } from "@mui/material";
import { useTrainerContext } from "../../ContextProvider/TrainerContext";
import UploadIcon from "@mui/icons-material/Upload";
import {
  Briefcase,
  CalendarCheck,
  CircleDollarSign,
  LandPlot,
} from "lucide-react";
import { doc, updateDoc, addDoc, collection } from "firebase/firestore";
import { v4 } from "uuid";
import InstagramIcon from "@mui/icons-material/Instagram";
import { IconButton } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import { storage } from "../../features/firebase";
import { db } from "../../features/firebase";
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  deleteObject,
  uploadBytesResumable,
  updateMetadata,
} from "firebase/storage";
interface TrainerThirdProps {
  // image: File | undefined;
  // video: File | undefined;
  handleDataUpload: any;
}

const TrainerThird = () => {
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
    setNavStep,
    userData,
    imgUrl,
    videoUrl,
    certOne,
    certTwo,
    certThree,
    imageUpload,

    secondImgUpload,
    secondImgUrl,
    setImgUrl,
    setSecondImgUrl,
    videoUpload,
    setVideoUrl,
  } = useTrainerContext();

  // const imageListRef = ref(storage, "images");

  const [firstImgUploading, setFirstImgUploading] = useState(false);
  const [secondImgUploading, setSecondImgUploading] = useState(false);
  const [videoUploading, setVideoUploading] = useState(false);

 
  const databaseRef = collection(db, "trainer");

  // console.log(secondImgUrl)
  //第一張照片上傳，改成兩張照片一起上傳，且顯示進度

  const handleDataUpload = async () => {
    // e.preventDefault();

    //若照片及影片沒上傳則 return
    if (
      imgUrl.length === 0 ||
      secondImgUrl.length === 0 ||
      videoUrl.length === 0
    ) {
      alert("照片及影片必須上傳");
      return;
    }

    // 使用者已有資料：更新
    if (userData !== undefined) {
      console.log("data updating");
      const docRef = doc(db, "trainer", userData?.id); //更改資料的ref
      await updateDoc(docRef, {
        name: name,
        title: title,
        expYear: expYear,
        location: location,
        priceRange: priceRange,

        line: line,
        insta: insta,

        firstTime: firstTime,
        secondTime: secondTime,
        thirdTime: thirdTime,

        certOne: certOne,
        certTwo: certTwo,
        certThree: certThree,

        experience: experience,
        goalInTime: goalInTime,
        description: description,
        trainingMethod: trainingMethod,

        imgUrl: imgUrl,
        secondImgUrl: secondImgUrl,
        videoUrl: videoUrl,

        email: localStorage.getItem('email')
      });
      alert("資料上傳成功");
    } else {
      console.log("data creating");
      try {
        await addDoc(databaseRef, {
          name: name,
          title: title,
          expYear: expYear,
          location: location,
          priceRange: priceRange,

          line: line,
          insta: insta,

          firstTime: firstTime,
          secondTime: secondTime,
          thirdTime: thirdTime,

          certOne: certOne,
          certTwo: certTwo,
          certThree: certThree,

          experience: experience,
          goalInTime: goalInTime,
          description: description,
          trainingMethod: trainingMethod,

          imgUrl: imgUrl,
          secondImgUrl: secondImgUrl,
          videoUrl: videoUrl,
        });
      } catch (e) {
        console.error("Error adding data: ", e);
      }
    }
  };

  const handleImageUpload = async () => {
    try {
      // First Image Upload
      if (imageUpload) {
        console.log("照片一上傳");
        if (imgUrl) {
          console.log("照片一刪除");
          const oldImageRef = ref(storage, imgUrl);
          await deleteObject(oldImageRef).catch((e) =>
            console.error("Error deleting old image:", e)
          );
        }

        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        const snapShot = await uploadBytes(imageRef, imageUpload);
        const url = await getDownloadURL(snapShot.ref);
        setImgUrl(url);
        setFirstImgUploading(true);
      } else if (!imgUrl) {
        alert("照片 1 未上傳");
        return;
      }

      // Second Image Upload
      if (secondImgUpload) {
        console.log("第二張照片上傳");
        if (secondImgUrl) {
          console.log("照片二刪除");
          const oldImageRef = ref(storage, secondImgUrl);
          await deleteObject(oldImageRef).catch((e) =>
            console.error("Error deleting old image:", e)
          );
        }
        const imageRef = ref(storage, `images/${secondImgUpload.name + v4()}`);
        const snapShot = await uploadBytes(imageRef, secondImgUpload);
        const url = await getDownloadURL(snapShot.ref);

        setSecondImgUrl(url);
        setSecondImgUploading(true);
      } else if (!secondImgUrl) {
        alert("照片 2 未上傳");
        return;
      }

      // Proceed to handle video upload
      handleVideoUpload();
    } catch (e) {
      console.error(e);
    }
  };

  const handleVideoUpload = async () => {
    console.log("進入到 handleVideo");
    //如果有影片要上傳的話
    if (videoUpload !== undefined) {
      const videoRef = ref(storage, `videos/${videoUpload.name + v4()}`);
      const uploadTask = uploadBytesResumable(videoRef, videoUpload);
      if (videoUrl) {
        console.log("影片刪除");
        const oldVideoRef = ref(storage, videoUrl);
        await deleteObject(oldVideoRef).catch((e) =>
          console.error("Error deleting old video:", e)
        );
      }
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          let progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          console.log("Video upload failed");
        },
        () => {
          console.log("Video uploaded successfuly");

          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setVideoUrl(url);
            setVideoUploading(true);
          });
        }
      );
    } else if (videoUrl.length === 0) {
      alert("影片需上傳");
      return;
    }

    handleDataUpload();
  };
console.log(firstImgUploading)

  //在照片及影片上傳完後才呼叫
  useEffect(() => {
    if (firstImgUploading || secondImgUploading || videoUploading) {
      
      if(firstImgUploading) setFirstImgUploading(false)
      if(secondImgUploading) setSecondImgUploading(false)
      if(videoUploading) setVideoUploading(false);

      handleDataUpload();
    }
  }, [firstImgUploading, secondImgUploading, videoUploading]);

  const [renderOption, setRenderOption] = useState(0);
  const Navbar = ["自我介紹", "幫助過學生解決的問題", "我能如何幫助你", "證照"];

  return (
    <div className={`select-none ${renderOption === 0 ? "h-screen" : ""}`}>
      <div className="mb-3 space-x-3 flex">
        <Button
          variant="outlined"
          size="large"
          sx={{
            backgroundColor: renderOption === 0 ? "#007CEF" : "",
            ":hover": {
              bgcolor: "#007CEF",
              color: "white",
            },
          }}
          onClick={() => setRenderOption(0)}
        >
          <p className={`text-lg ${renderOption === 0 ? "text-white" : ""}`}>
            教練牆
          </p>
        </Button>

        <Button
          variant="outlined"
          size="large"
          sx={{
            backgroundColor: renderOption === 1 ? "#007CEF" : "",
            ":hover": {
              bgcolor: "#007CEF",
              color: "white",
            },
          }}
          onClick={() => setRenderOption(1)}
        >
          <p className={`text-lg ${renderOption === 1 ? "text-white" : ""}`}>
            個人頁面
          </p>
        </Button>
        <div
          className={` w-[1px] h-[30px]  pt-10 self-stretch bg-gray-400 opacity-100 dark:opacity-50 `}
        ></div>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#4BD791",
            marginLeft: "60px",

            ":hover": {
              backgroundColor: "#4BD791",
            },
          }}
          startIcon={<UploadIcon />}
          size="large"
          // disabled={!defiModalSaveEnabled}
          onClick={handleImageUpload}
        >
          <p className="text-lg whitespace-nowrap ">資料確認並上傳</p>
        </Button>
      </div>
      {renderOption === 0 && (
        <div className="border border-gray-400 p-4 rounded-xl w-fit h-fit">
          <div>
            <img
              src={
                imageUpload
                  ? URL.createObjectURL(imageUpload)
                  : imgUrl.length > 0
                  ? imgUrl
                  : ""
              }
              className="w-[325px] h-[300px] rounded-xl"
            />
            {/* <button onClick={handleDelete}>123</button> */}
          </div>
          <div className="">
            <p className="text-2xl font-bold mt-2 ml-2"> {name}</p>
            <div className="p-2 space-y-2">
              <div className="flex items-center space-x-2">
                <Briefcase size={20} />
                <p className="text-lg font-semibold">
                  {title} - {expYear} 年
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <LandPlot size={20} color="#007CEF" />
                <p className="text-lg font-semibold">{location}</p>
              </div>

              <div className="flex items-center space-x-2">
                <CircleDollarSign size={20} color="#F4CE14" />
                <p className="text-lg font-semibold">{priceRange} /hr</p>
              </div>
            </div>
            <div className="p-2 b">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <CalendarCheck size={20} color="#4CAF50" />
                  <p className="text-lg font-semibold ">{firstTime}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <CalendarCheck size={20} color="#4CAF50" />
                  <p className="text-lg font-semibold ">{secondTime}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <CalendarCheck size={20} color="#4CAF50" />
                  <p className="text-lg font-semibold ">{thirdTime}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {renderOption === 1 && (
        <div className="p-6 border border-black rounded-xl 2xl:space-y-10">
          {/* 照片及自介 */}
          <div className="flexBetween space-x-6">
            {secondImgUpload || secondImgUrl.length > 0 ? (
              <img
                src={
                  secondImgUpload
                    ? URL.createObjectURL(secondImgUpload)
                    : secondImgUrl
                }
                className="w-1/2 h-auto rounded-lg block"
              />
            ) : (
              <div className="w-1/2 h-[300px] rounded-lg block border ">
                <p className="italic text-xl text-gray-400 text-center mt-10">
                  請上傳教練與學員訓練照片
                </p>
              </div>
            )}

            <div className=" 2xl:space-y-4  ">
              <div className="flexCenter ">
                <p className="text-3xl 2xl:text-5xl 2xl:mr-6">{name}</p>
                <IconButton
                  onClick={() => window.open(insta, "_blank")}
                  className="icon-button "
                >
                  <InstagramIcon color="primary" sx={{ fontSize: "35px" }} />
                </IconButton>
                <div
                  className="cursor-pointer icon-button "
                  onClick={() => window.open(line, "_blank")}
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
              <div className="p-4 space-y-2 ">
                <div className="flex items-center">
                  <p className="text-gray-700 text-lg mt-1">職業：</p>
                  <p className="text-xl ">{title}</p>
                </div>
                <div className="flexCenter">
                  <div className="w-11/12 h-[0.2px] bg-gray-300"></div>
                </div>
                <div className="flex items-center">
                  <p className="text-gray-700 text-lg mt-1">資歷：</p>
                  <p className="text-xl ">{expYear} 年</p>
                </div>
                <div className="flexCenter">
                  <div className="w-11/12 h-[0.2px] bg-gray-300"></div>
                </div>
                <div className="flex items-center">
                  <p className="text-gray-700 text-lg mt-1">地點：</p>
                  <p className="text-xl ">{location}</p>
                </div>
                <div className="flexCenter">
                  <div className="w-11/12 h-[0.2px] bg-gray-300"></div>
                </div>
                <div className="flex items-center">
                  <p className="text-gray-700 text-lg mt-1">價格：</p>
                  <p className="text-xl ">{priceRange} /hr</p>
                </div>
                <div className="flexCenter">
                  <div className="w-11/12 h-[0.2px] bg-gray-300"></div>
                </div>
                <div className="space-y-2 ">
                  <p className="text-gray-700 text-lg">時段</p>
                  <div className="flexBetween space-x-2">
                    <div className="p-2 border border-black rounded-xl  bg-[#00d68f] ">
                      {firstTime}
                    </div>
                    <div className="p-2 border border-black rounded-xl  bg-[#00d68f]">
                      {secondTime}
                    </div>
                    <div className="p-2 border border-black rounded-xl  bg-[#00d68f]">
                      {thirdTime}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className=" h-[300px] mt-10">
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
                  <p className="text-center p-5">{experience}</p>
                )}
                {navStep === 1 && (
                  <p className="text-center p-5">{goalInTime}</p>
                )}
                {navStep === 2 && (
                  <p className="text-center p-5">{trainingMethod}</p>
                )}
                {navStep === 3 && (
                  <div className="flexCenter space-x-4 p-5">
                    <p className="text-center text-xl">{certOne}</p>
                    <p className="text-center text-xl">{certTwo}</p>
                    <p className="text-center text-xl">{certThree}</p>
                  </div>
                )}
              </div>
            </div>
            <video controls src={videoUrl} className="px-10 pb-10" />
          </div>
        </div>
      )}

    </div>
  );
};

export default TrainerThird;
