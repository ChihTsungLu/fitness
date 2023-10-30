import Navbar from "../Components/Navbar";
import { db } from "../features/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

interface ClientProps {}

const Client = ({}: ClientProps) => {
  const [data, setData] = useState<any[]>([]);
  const databaseRef = collection(db, "trainer");

  const fetchData = async () => {
    const snapShot = await getDocs(databaseRef);
    const newData = snapShot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setData(newData);
  };

  console.log(data);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      {data &&
        data.map((item, index) => (
          <div key={index} className="mt-20">
            <p>Name: {item.name}</p>
            <p>ID: {item.id}</p>
            {item.experience && <p>Experience: {item.experience}</p>}
          </div>
        ))}
    </div>
  );
};

export default Client;
