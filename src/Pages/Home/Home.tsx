import Feature from "./Feature";
import Hero from "./Hero";
import Service from "../Service";

import { collection, getDocs, onSnapshot, query, where, orderBy } from "firebase/firestore";
import { db } from "../../features/firebase";
import { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import WhyUs from "./WhyUs";

const Home = () => {
  const [data, setData] = useState<any[]>([]);
  const colRef = collection(db, "trainer");
  
  // const fetchPost = async () => {

  //    const q = query(colRef,where("age","==","25"), orderBy('name','asc'))

  //     onSnapshot(q, (snapshot) => {
  //       const newData = snapshot.docs.map((doc) => ({
  //         ...doc.data(),
  //         id: doc.id,
  //       }));
  //       setData(newData);
  //     });
  // };


  // useEffect(()=>{
  //   fetchPost()
  // },[])


  return (
    <div>
      <Navbar/>
      <Hero />
      <Feature />
      <WhyUs/>
    </div>
  );
};

export default Home;
