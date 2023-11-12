
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
  uploadBytesResumable,
  updateMetadata,
} from "firebase/storage";
 

import TrainerFirst from "./TrainerFirst";
import TrainerThird from "./TrainerThird";
import TrainerSecond from "./TrainerSecond";

const Body_Trainer = () => {
  const { userName, buildStep } = useStateContext();
  const {
    name,
    title,
    expYear,
    location,
    priceRange,
    line,
    insta,
    firstTime,
    secondTime,
    thirdTime,
    experience,
    goalInTime,
    description,
    trainingMethod
  } = useTrainerContext();



  const databaseRef = collection(db, "trainer");




  // const handleDelete = () => {
  //   deleteObject(imageListDeleteRef)
  //     .then(() => {
  //       console.log("Delete successfully");
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // };

 

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
    <div className="w-4/5 trainerLgScreen bg-[#F8FAFB]">
      <div className="   p-10 ">
        {buildStep === 1 && (
          <TrainerFirst />
        )}
        {buildStep === 2 && (
          <TrainerSecond/>
        )}
        {buildStep === 3 &&
          <TrainerThird />
        }
      </div>
    </div>
  );
};

export default Body_Trainer;
