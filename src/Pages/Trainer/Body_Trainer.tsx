import TextField from "@mui/material/TextField";
import { useStateContext } from "../../ContextProvider/Contexts";
import { db } from "../../features/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { storage } from "../../features/firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const Body_Trainer = () => {
  const { userName, buildStep } = useStateContext();

  const [name, setName] = useState<string>("");
  const [experience, setExperience] = useState<string>("");
  const [imageUpload, setImageUpload] = useState<any>();
  const [imageList, setImageList] = useState<string[]>([]);

  const databaseRef = collection(db, "trainer");
  const imageListRef = ref(storage, "images");

  const handleImageUpload = () => {
    if (imageUpload === null) return;
    const imageRef = ref(storage, `images/${imageUpload?.name + v4()}`);
    uploadBytes(imageRef, imageUpload)
      .then((snapShot) => {
        getDownloadURL(snapShot.ref)
         .then((url)=>{
            setImageList((prev)=>[...prev,url])
         })
      })
      .catch((e) => console.error(e));
  };

  const handleClick = async (e: any) => {
    e.preventDefault();

    try {
      await addDoc(databaseRef, {
        name: name,
        experience: experience,
      });
    } catch (e) {
      console.error("Error adding data: ", e);
    }
  };

  useEffect(() => {
    listAll(imageListRef)
      .then((res) => {
        res.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            setImageList((prev) => [...prev, url]);
          });
        });
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <div className="w-4/5 h-screen bg-white">
      <div className="w-full p-10 ">
        <p className="text-xl my-2">
          {" "}
          嗨 {userName} 👋🏽，簡單透過三個步驟輕鬆建立個人品牌
        </p>
        {buildStep === 1 && (
          <div className="flex flex-col space-y-4">
            <TextField
              id="standard-basic"
              label="名字/暱稱"
              variant="standard"
              className=" w-[380px]"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <TextField
              id="standard-basic"
              label="經歷"
              variant="standard"
              className=" w-[380px]"
              onChange={(e) => {
                setExperience(e.target.value);
              }}
            />
            <TextField
              id="standard-basic"
              label="證照"
              variant="standard"
              className=" w-[380px]"
            />
            <TextField
              id="standard-basic"
              label="教學地點(可線上諮詢)"
              variant="standard"
              className=" w-[380px]"
            />
            <TextField
              id="standard-basic"
              label="學生推薦"
              variant="standard"
              className=" w-[380px]"
            />
            <button className="bg-red-400 w-10" onClick={handleClick}>
              送出
            </button>
          </div>
        )}
        {buildStep === 2 && (
          <div className="space-y-4">
            <input
              type="file"
              onChange={(e) => {
                setImageUpload(e.target.files![0]);
              }}
            />
            <button onClick={(handleImageUpload)}>Upload Image</button>
            {
                imageList?.map((url, index) => {
                    return <img key={index} src={url}/>
                })
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default Body_Trainer;
