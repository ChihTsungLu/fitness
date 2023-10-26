import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firbase";
import BezierCurve from "./BezierCurve";

interface HeroProps {}

const Hero = ({}: HeroProps) => {
  const colRef = collection(db, "trainer");

  const handleClick = async () => {
    try {
      await addDoc(colRef, {
        name: "Angel",
        age: "25",
      }).then(() => {
        console.log("Data added");
      });
    } catch (e) {
      console.error("Error adding doc: ", e);
    }
  };

  const handleDelete = () => {
    const docRef = doc(db, "trainer", "KCipxg5VvUxoBG7amu4n");

    deleteDoc(docRef).then(() => {
      console.log("Data deleted");
    });
  };

  return (
    <div className="w-full h-[700px] mt-[65px]   ">
      
        <BezierCurve/>
     
    </div>
  );
};

export default Hero;
