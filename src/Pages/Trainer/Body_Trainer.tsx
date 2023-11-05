import TextField from "@mui/material/TextField";
import { useStateContext } from "../../ContextProvider/Contexts";
import { useTrainerContext } from "../../ContextProvider/TrainerContext";
import { db } from "../../features/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useState, useEffect, useRef } from "react";
import { storage } from "../../features/firebase";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  deleteObject,
  uploadBytesResumable,
  updateMetadata
} from "firebase/storage";
import { v4 } from "uuid";

const Body_Trainer = () => {

  const { userName, buildStep } = useStateContext();
  const {
    name,
    setName,
    experience,
    setExperience,
    expertise,
    setExpertise,
    location,
    setLocation,
  } = useTrainerContext();

  const imageInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  const [imageUpload, setImageUpload] = useState<any>();
  const [imageList, setImageList] = useState<string>();

  const [videoUpload, setVideoUpload] = useState<any>();
  const [videoList, setVideoList] = useState<string>();

  const databaseRef = collection(db, "trainer");
  const imageListRef = ref(storage, "images");
  const imageListDeleteRef = ref(storage, imageList);

  const handleImageUpload = () => {
    console.log(imageUpload);
    if (imageUpload === undefined) return;

    const imageRef = ref(storage, `images/${imageUpload?.name + v4()}`);

    uploadBytes(imageRef, imageUpload)
      .then((snapShot) => {
        getDownloadURL(snapShot.ref).then((url) => {
          setImageList(url);
        });
      })
      .catch((e) => console.error(e));
  };

  const handleVideoUpload = () => {
    console.log(videoUpload)
    if (videoUpload === undefined) return;

    const metadata = {
      customMetadata: {
        userName: userName,
      }
    }

    const videoRef = ref(storage, `videos/${videoUpload.name + v4()}`);
    const uploadTask = uploadBytesResumable(videoRef, videoUpload, metadata)

    uploadTask.on('state_changed', (snapshot) => {
      let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
    }, (error) => {
      console.log('Video upload failed')
    }, () => {
      console.log('Video uploaded successfuly')

      getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        setVideoList(url)
      })
    }
    )
  }


  const handleDataUpload = async (e: any) => {
    e.preventDefault();

    try {

      await addDoc(databaseRef, {
        name: name,
        experience: experience,
        location: location,
        expertise: expertise,
        imgUrl: imageList,
      });
    } catch (e) {
      console.error("Error adding data: ", e);
    }
  };

  const handleDelete = () => {
    deleteObject(imageListDeleteRef)
      .then(() => {
        console.log("Delete successfully");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleImageClick = () => {
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  };

  const handleVideoClick = () => {
    if (videoInputRef.current) {
      videoInputRef.current.click();
    }
  };



  // useEffect(() => {
  //   listAll(imageListRef)
  //     .then((res) => {
  //       res.items.forEach((item) => {
  //         getDownloadURL(item).then((url) => {
  //           setImageList((prev) => {
  //             if (!prev.includes(url)) {
  //               return [...prev, url]; // Add URL to the list
  //             }
  //             return prev; // If URL exists, return the previous state without changes
  //           });
  //         });
  //       });
  //     })
  //     .catch((e) => console.error(e));
  // }, []);

  return (
    <div className="w-4/5  bg-[#F8FAFB]">
      <div className="w-full p-10 ">

        {buildStep === 1 && (
          <div className="flex flex-col space-y-4">
            <p className="text-xl ">
              第一步：建立個人資訊
            </p>
            <div className="border border-gray-500 p-4 rounded-xl bg-white space-y-3 ">
              <p className="text-lg ">讓學生一目了然您的專業、地點、時間</p>
              <div className="flex space-x-10">
                <TextField
                  id="standard-basic"
                  label="名字/暱稱"
                  variant="standard"
                  className=" w-[380px]"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  InputLabelProps={{ shrink: name.length > 0 }}
                />

                <TextField
                  id="standard-basic"
                  label="教學地點(可線上諮詢)"
                  variant="standard"
                  className=" w-[380px]"
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                  InputLabelProps={{ shrink: location.length > 0 }}
                />
                <TextField
                  id="standard-basic"
                  label="15個字說明專長及經歷年數"
                  variant="standard"
                  className=" w-[380px]"
                  value={experience}
                  onChange={(e) => {
                    const inputText = e.target.value;
                    if (inputText.length <= 15) {
                      setExperience(inputText);
                    } else {
                      setExperience(inputText.slice(0, 10)); // Truncate input to 10 characters
                    }
                  }}
                  InputLabelProps={{ shrink: experience.length > 0 }}
                />
                <TextField
                  id="standard-basic"
                  label="價錢範圍"
                  variant="standard"
                  className=" w-[380px]"
                />
              </div>
            </div>

            <div className=" border border-gray-500 p-4 rounded-xl bg-white space-y-4">
              <p className="text-lg">每週可預約時段 (例：週二 15:00 - 18:00)</p>
              <div className="flex space-x-10">
                <TextField
                  id="standard-basic"
                  label="第一個時段"
                  variant="standard"
                  className=" w-[380px]"
                />
                <TextField
                  id="standard-basic"
                  label="第二個時段"
                  variant="standard"
                  className=" w-[380px]"
                />
                <TextField
                  id="standard-basic"
                  label="第三個時段"
                  variant="standard"
                  className=" w-[380px]"
                />
              </div>
            </div>

            <div className=" border border-gray-500 p-4 rounded-xl bg-white space-y-4">
              <p className="text-lg">深入瞭解</p>
              <div className="flex space-x-10">
                <TextField
                  id="standard-basic"
                  label="給學生的訓練方式"
                  multiline
                  rows={4}
                  variant="outlined"
                  className=" w-[380px]"
                  value={expertise}
                  onChange={(e) => {
                    setExpertise(e.target.value);
                  }}
                  InputLabelProps={{ shrink: expertise.length > 0 }}
                />

                <TextField
                  id="standard-basic"
                  label="幫助過學生達成過什麼目標或解決什麼樣的問題"
                  multiline
                  rows={4}
                  variant="outlined"
                  className=" w-[380px]"
                />
              </div>
              <div>
                <TextField
                  id="standard-basic"
                  label="學生都怎麼形容我"
                  className=" w-[380px]"
                  multiline
                  rows={4}
                  variant="outlined"
                />
              </div>
            </div>

            {/* <button
              className="border rounded-full p-2  border-black w-20 "
              onClick={handleDataUpload}
            >
              送出
            </button> */}
          </div>
        )}
        {buildStep === 2 && (
          <div className="space-y-4">
            {/* 照片上傳 */}
            <div className="flex">
              <div
                className="w-[450px] h-[450px] rounded-xl border-dotted border-2 border-black flexCenter"
                onClick={handleImageClick}
              >
                <p>上傳照片</p>
                {imageUpload && (
                  <img
                    src={URL.createObjectURL(imageUpload)}
                    className="w-[400px] h-[400px]"
                  />
                )}
                <input
                  type="file"
                  ref={imageInputRef}
                  style={{ display: "none" }}
                  onChange={(e) => {
                    setImageUpload(e.target.files![0]);
                  }}
                />
              </div>
            </div>

            {/* 影片上傳 */}
            <div className="flex">
              <div
                className="w-[450px] h-[450px] rounded-xl border-dotted border-2 border-black flexCenter"
                onClick={handleVideoClick}
              >

                {videoUpload
                  ?
                  (<video
                    controls
                    src={URL.createObjectURL(videoUpload)}
                    className="w-[400px] h-[400px]"
                  />)
                  : <p>上傳影片</p>
                }
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
                        if (video.duration > 30) {
                          alert("影片長度須要小於 30 秒");
                          if (videoInputRef.current) {
                            videoInputRef.current.value = ''; // Clear the file input
                          }// Clear the file input
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
            <div className="mt-20">
              <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
                onClick={handleVideoUpload}
              >
                <p className="text-xl">video upload</p>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Body_Trainer;
