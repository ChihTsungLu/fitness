import { useRef } from "react";
import { useTrainerContext } from "../../ContextProvider/TrainerContext";

const TrainerSecond = () => {
  const {
    imgUrl,
    secondImgUrl,
    videoUrl,
    secondImgUpload,
    setSecondImgUpload,
    imageUpload,
    setImageUpload,
    videoUpload,
    setVideoUpload,
  } = useTrainerContext();

  const imageInputFirstRef = useRef<HTMLInputElement>(null);
  const imageInputSecondRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  // const imageListRef = ref(storage, "images");
  // const imageListDeleteRef = ref(storage, imageList);

  const handleFirstImageClick = () => {
    if (imageInputFirstRef.current) {
      imageInputFirstRef.current.click();
    }
  };
  const handleSecondImageClick = () => {
    if (imageInputSecondRef.current) {
      imageInputSecondRef.current.click();
    }
  };

  const handleVideoClick = () => {
    if (videoInputRef.current) {
      videoInputRef.current.click();
    }
  };

  // console.log(secondImgUpload,'123123')
  return (
    <div className="space-y-4 max-sm:w-screen">
      {/* 照片上傳 */}
      <div className="sm:flex sm:space-x-2 max-sm:space-y-4">
        <div
          className="max-sm:h-[550px] sm:w-1/2 rounded-xl border-dotted border-2 border-black p-3 bg-white flex flex-col items-center space-y-4"
          onClick={handleFirstImageClick}
        >
          <p className="text-xl">教練牆照片</p>
          {imageUpload ? (
            <img
              src={URL.createObjectURL(imageUpload)}
              className="w-fit h-[320px] sm:w-[450px] sm:h-[450px] rounded-lg "
            />
          ) : imgUrl.length > 0 ? (
            <img
              src={
                imageUpload
                  ? URL.createObjectURL(imageUpload)
                  : imgUrl.length > 0
                  ? imgUrl
                  : ""
              }
              className="w-fit h-fit sm:w-[450px] sm:h-[450px] rounded-lg "
            />
          ) : (
            <p className="text-lg italic text-gray-400">上傳教練牆個人照片</p>
          )}
          <input
            type="file"
            ref={imageInputFirstRef}
            style={{ display: "none" }}
            onChange={(e) => {
              setImageUpload(e.target.files![0]);
            }}
          />
        </div>
        <div
          className="max-sm:h-[550px] sm:w-1/2  h-[550px] rounded-xl border-dotted border-2 border-black p-3 bg-white flex flex-col items-center space-y-4"
          onClick={handleSecondImageClick}
        >
          <p className="text-xl">教練個人頁面照片</p>
          {secondImgUpload ? (
            <img
              src={URL.createObjectURL(secondImgUpload)}
              className="w-[550px] h-[450px] rounded-lg "
            />
          ) : secondImgUrl.length > 0 ? (
            <img
              src={secondImgUrl}
              className="w-[550px] h-[450px] rounded-lg "
            />
          ) : (
            <p className="text-lg italic text-gray-400">上傳教練個人頁面照片</p>
          )}
          <input
            type="file"
            ref={imageInputSecondRef}
            style={{ display: "none" }}
            onChange={(e) => {
              setSecondImgUpload(e.target.files![0]);
            }}
          />
        </div>
      </div>

      {/* 影片上傳 */}
      <div className="flex">
        <div
          className="w-full h-[550px] rounded-xl border-dotted border-2 border-black p-3 bg-white flex flex-col items-center space-y-3"
          onClick={handleVideoClick}
        >
          <p className="text-xl">一部影片(最長一分鐘)</p>
          {videoUpload ? (
            <video
              controls
              src={URL.createObjectURL(videoUpload)}
              className="w-[600] h-[500px] rounded-lg"
            />
          ) : videoUrl?.length > 0 ? (
            <video
              controls
              src={videoUrl}
              className="w-[600px] h-[500px] rounded-lg"
            />
          ) : (
            <p className="text-lg italic text-gray-400">上傳影片</p>
          )}
          <input
            type="file"
            accept=".mp4"
            ref={videoInputRef}
            style={{ display: "none" }}
            onChange={async (e) => {
              const selectedFile = e.target.files![0];
              const video = document.createElement("video");
              video.src = URL.createObjectURL(selectedFile);

              video.onloadedmetadata = function () {
                if (video.duration > 60) {
                  alert("影片最長一分鐘");
                  if (videoInputRef.current) {
                    videoInputRef.current.value = ""; // Clear the file input
                  } // Clear the file input
                } else {
                  setVideoUpload(selectedFile);
                }
              };
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TrainerSecond;
