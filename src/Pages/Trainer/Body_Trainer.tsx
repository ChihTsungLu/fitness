
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
  const { buildStep } = useStateContext();

  return (
    <div className="w-4/5  bg-[#F8FAFB] trainerLgScreen">
      <div className="p-10">
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
