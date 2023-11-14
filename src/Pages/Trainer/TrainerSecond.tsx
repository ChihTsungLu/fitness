

import { useRef } from "react";
import { useTrainerContext } from "../../ContextProvider/TrainerContext";



const TrainerSecond = () => {

    const { imgUrl, secondImgUrl, videoUrl, secondImgUpload, setSecondImgUpload, imageUpload, setImageUpload, videoUpload, setVideoUpload } = useTrainerContext();

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
        <div className="space-y-4">
            {/* 照片上傳 */}
            <div className="flex flex-col space-y-5">
                <div
                    className="w-[550px] h-[550px] rounded-xl border-dotted border-2 border-black p-3 bg-white flex flex-col items-center space-y-4"
                    onClick={handleFirstImageClick}
                >
                    <p className="text-xl">教練牆個人照片</p>
                    {
                        imageUpload ? (
                            <img
                                src={URL.createObjectURL(imageUpload)}
                                className="w-[450px] h-[450px] rounded-lg "
                            />)
                            : imgUrl.length > 0 ?
                                <img
                                    src={imageUpload ? URL.createObjectURL(imageUpload) : imgUrl.length > 0 ? imgUrl : ''}
                                    className="w-[450px] h-[450px] rounded-lg "
                                />
                                :
                                <p className="text-lg italic text-gray-400">上傳教練牆個人照片</p>}
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
                    className="w-[700px] h-[550px] rounded-xl border-dotted border-2 border-black p-3 bg-white flex flex-col items-center space-y-10"
                    onClick={handleSecondImageClick}
                >
                    <p className="text-xl">教練與學員訓練照片</p>
                    {secondImgUpload ? (
                        <img
                            src={URL.createObjectURL(secondImgUpload)}
                            className="w-[550px] h-[450px] rounded-lg "
                        />
                    ) : secondImgUrl.length > 0 ?
                        <img
                            src={secondImgUrl}
                            className="w-[550px] h-[450px] rounded-lg "
                        /> :
                        <p className="text-lg italic text-gray-400">上傳教練與學員訓練照片</p>}
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
                    className="w-[650px] h-[650px] rounded-xl border-dotted border-2 border-black p-3 bg-white flex flex-col items-center space-y-3" onClick={handleVideoClick}
                >
                    <p className="text-xl">學生推薦影片/與學生上課影片</p>
                    {videoUpload ? (
                        <video
                            controls
                            src={URL.createObjectURL(videoUpload)}
                            className="w-[600] h-[500] rounded-lg"
                        />
                    ) :
                        videoUrl?.length > 0 ? (
                            <video
                                controls
                                src={videoUrl}
                                className="w-[600px] h-[500px] rounded-lg"
                            />
                        )
                            :
                            (
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

                            if (selectedFile.type === "video/mp4") {
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
                            } else {
                                alert("上傳檔案必須為 MP4 檔案");
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default TrainerSecond