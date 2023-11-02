import TextField from "@mui/material/TextField";
import { useStateContext } from "../../ContextProvider/Contexts";
import { useTrainerContext } from "../../ContextProvider/TrainerContext";
import { db } from "../../features/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useState, useEffect, useRef } from "react";
import { storage } from "../../features/firebase";
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { v4 } from "uuid";

const Body_Trainer = () => {
  const { userName, buildStep } = useStateContext();
  const { name, setName, experience, setExperience, expertise, setExpertise, location, setLocation } = useTrainerContext();

  const inputRef = useRef<HTMLInputElement>(null);

 
  const [imageUpload, setImageUpload] = useState<any>();
  const [imageList, setImageList] = useState<string>();

  const databaseRef = collection(db, "trainer");
  const imageListRef = ref(storage, "images");
  const imageListDeleteRef = ref(storage, imageList);

  const handleImageUpload = () => {
    console.log(imageUpload)
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

  const handleClick = async (e: any) => {
    e.preventDefault();

    try {
      await addDoc(databaseRef, {
        name: name,
        experience: experience,
        location: location,
        expertise: expertise,
        imgUrl: imageList
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
    if (inputRef.current) {
      inputRef.current.click();
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
console.log(name)
  return (
    <div className="w-4/5 h-screen bg-[#F8FAFB]">
      <div className="w-full p-10 ">
        <p className="text-xl my-2">
          嗨 {userName} 👋🏽，簡單透過三個步驟輕鬆建立個人品牌
        </p>
        {buildStep === 1 && (
          <div className="flex flex-col space-y-4  ">
            <div className="border border-gray-500 p-4 rounded-xl bg-white ">
              <p className="text-lg">讓學生快速認識你</p>
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
                  InputLabelProps={{ shrink: name.length>0 }}
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
                  InputLabelProps={{ shrink: location.length>0 }}
                />
                <TextField
                  id="standard-basic"
                  label="證照"
                  variant="standard"
                  className=" w-[380px]"
                />
              </div>
            </div>
            <div className=" border border-gray-500 p-4 rounded-xl bg-white space-y-4">
              <p className="text-lg">提供學生：</p>
              <div className="flex space-x-10">
                <TextField
                  id="standard-basic"
                  label="我的訓練方式(著重面)"
                  multiline
                  rows={4}
                  variant="outlined"
                  className=" w-[380px]"
                  value={expertise}
                  onChange={(e) => {
                    setExpertise(e.target.value);
                  }}
                  InputLabelProps={{ shrink: expertise.length>0 }}
                />
                <TextField
                  id="standard-basic"
                  label="經歷"
                  className=" w-[380px]"
                  multiline
                  rows={4}
                  variant="outlined"
                  value={experience}
                  onChange={(e) => {
                    setExperience(e.target.value);
                  }}
                  InputLabelProps={{ shrink: experience.length>0 }}
                />
                <TextField
                  id="standard-basic"
                  label="我可以帶給學生什麼"
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

            {/* <TextField
                id="standard-basic"
                label="飲食菜單"
                variant="standard"
                className=" w-[380px]"
              />
              <TextField
                id="standard-basic"
                label="課程設計"
                variant="standard"
                className=" w-[380px]"
              /> */}
            <button
              className="border rounded-full p-2  border-black w-20 "
              onClick={handleClick}
            >
              送出
            </button>
          </div>
        )}
        {buildStep === 2 && (
          <div>
            <div className="flex">
              <div
                className="w-[650px] h-[650px] rounded-xl border-dotted border-2 border-black flexCenter"
                onClick={handleImageClick}
              >
                {/* <p>上傳照片</p> */}
                {imageUpload && (
                  <img
                    src={URL.createObjectURL(imageUpload)}
                    className="w-[600px] h-[600px]"
                  />
                )}
                <input
                  type="file"
                  ref={inputRef}
                  style={{ display: "none" }}
                  onChange={(e) => {
                    setImageUpload(e.target.files![0]);
                  }}
                />
              </div>
              <div className=""></div>
            </div>
            <button onClick={handleImageUpload}>Upload Image</button>
            <button onClick={handleClick}>Upload Data</button>
            {/* {imageList?.map((url, index) => (
              <div>
                <img key={index} src={url} />
                <button onClick={handleDelete}>123</button>
              </div>
            ))} */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Body_Trainer;
