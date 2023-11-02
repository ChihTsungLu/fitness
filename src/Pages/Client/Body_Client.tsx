import { useState, useEffect } from "react";
import { db } from "../../features/firebase";
import { collection, getDocs } from "firebase/firestore";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import Button from "@mui/material/Button";
import { useClientContext } from "../../ContextProvider/ClientContext";
import TrainerModal from "./TrainerModal";

const Body_Client = () => {
  const { setModalOpen } = useClientContext();
  const [data, setData] = useState<any[]>([]);
  const databaseRef = collection(db, "trainer");
  const fetchData = async () => {
    const snapShot = await getDocs(databaseRef);
    const newData = snapShot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setData(newData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-4/5 flex space-x-5 mt-10">
      {data.map((item, index) => (
        <div
          key={index}
          className="border border-black p-4 rounded-xl w-fit h-fit"
        >
          <div>
            <img
              key={index}
              src={item.imgUrl}
              className="w-[300px] h-[300px]"
            />
            {/* <button onClick={handleDelete}>123</button> */}
          </div>
          <div className="p-4">
            <p>Name: {item.name}</p>
            <p>Experience: {item.experience}</p>
            <p>location: {item.location}</p>
            <p>expertise: {item.expertise}</p>
          </div>
          <div className="flexCenter">
            <Button
              variant="outlined"
              startIcon={<LocalFireDepartmentIcon sx={{ color: "#D80032" }} />}
              sx={{color:"#004225"}}
              color="success"
              onClick={()=>setModalOpen(true)}
            >
              <p className="text-lg">查看資料</p>
            </Button>
          </div>
        </div>
      ))}
      <TrainerModal/>
    </div>
  );
};

export default Body_Client;
