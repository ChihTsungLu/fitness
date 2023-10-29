import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  getDoc,
  query,
  orderBy,
  serverTimestamp,
  updateDoc
} from "firebase/firestore";
import { db } from "../../features/firebase";
import BezierCurve from "./BezierCurve";
import { useState, useEffect } from "react";
import { getAuth } from 'firebase/auth'

interface HeroProps {}

const Hero = ({}: HeroProps) => {


  

  return (
    <div className="w-full md:w-fit h-[600px] mt-[65px]">
      <BezierCurve />\
    </div>
  );
};

export default Hero;
