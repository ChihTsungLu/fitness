
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
  updateMetadata,
} from "firebase/storage";
import { v4 } from "uuid";
import TrainerFirst from "./TrainerFirst";

const Body_Trainer = () => {
  const { userName, buildStep } = useStateContext();
  const {
    name,
    setName,
    experience,
    setExperience,
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
    console.log(videoUpload);
    if (videoUpload === undefined) return;

    const metadata = {
      customMetadata: {
        userName: userName,
      },
    };

    const videoRef = ref(storage, `videos/${videoUpload.name + v4()}`);
    const uploadTask = uploadBytesResumable(videoRef, videoUpload, metadata);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
          setVideoList(url);
        });
      }
    );
  };

  // console.log(videoList)

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
      <div className="w-full h-screen p-10 ">
        {buildStep === 1 && (
          <TrainerFirst/>
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
                {videoUpload ? (
                  <video
                    controls
                    src={URL.createObjectURL(videoUpload)}
                    className="w-[400px] h-[400px]"
                  />
                ) : (
                  <p>上傳影片</p>
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
