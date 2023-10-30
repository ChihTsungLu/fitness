import { useStateContext } from "../../ContextProvider/Contexts";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { db } from "../../features/firebase";
import { collection, addDoc } from "firebase/firestore";
import Nav_Trainer from "./Nav_Trainer";
import Body_Trainer from "./Body_Trainer";
interface TrainerProps {}

const Trainer = ({}: TrainerProps) => {
  const { userName, buildStep } = useStateContext();

  return (
    <div className="flex">
      <Nav_Trainer />
      <Body_Trainer />
    </div>
  );
};

export default Trainer;
