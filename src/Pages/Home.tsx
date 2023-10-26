import Feature from "../Components/Feature";
import Hero from "../Components/Hero";
import Service from "./Service";

import { collection, getDocs, onSnapshot, query, where, orderBy } from "firebase/firestore";
import { db } from "../firbase";
import { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState<any[]>([]);
  const colRef = collection(db, "trainer");

  const fetchPost = async () => {

     const q = query(colRef,where("age","==","25"), orderBy('name','asc'))

      onSnapshot(q, (snapshot) => {
        const newData = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setData(newData);
      });
  };


  useEffect(()=>{
    fetchPost()
  },[])

  console.log(data)
  return (
    <div>
      <Hero />
      <Feature />
    </div>
  );
};

export default Home;
