import { useState, useEffect } from "react";
import { db } from "../../features/firebase";
import { collection, getDocs } from "firebase/firestore";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import Button from "@mui/material/Button";
import { useClientContext } from "../../ContextProvider/ClientContext";
import TrainerModal from "./TrainerModal";
import {
  Briefcase,
  CalendarCheck,
  CircleDollarSign,
  LandPlot,
} from "lucide-react";

const Body_Client = () => {
  const { setModalOpen } = useClientContext();
  const [data, setData] = useState<any[]>([]);
  const [selectedItem, setSelectedItem] = useState<string>("");

  const databaseRef = collection(db, "trainer");

  const fetchData = async () => {
    const snapShot = await getDocs(databaseRef);
    const newData = snapShot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setData(newData);
  };

  const handleOpenModal = (item: string) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-4/5 flex space-x-5 mt-10 p-20 select-none cursor-pointer">
      {data.map((item, index) => (
        <div
          key={index}
          className="border border-gray-400 p-4 rounded-xl w-fit h-fit"
          onClick={() => handleOpenModal(item.name)}
        >
          <div>
            <img
              key={index}
              src={item.imgUrl}
              className="w-[325px] h-[300px] rounded-xl"
            />
            {/* <button onClick={handleDelete}>123</button> */}
          </div>
          <div className="">
            <p className="text-2xl font-bold mt-2"> {item.name}</p>
            <div className="p-2 space-y-2">
              <div className="flex items-center space-x-2">
                <Briefcase size={20} />
                <p className="text-lg font-semibold">
                  {item.title} - {item.expYear} 年
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <LandPlot size={20} color="#007CEF" />
                <p className="text-lg font-semibold">{item.location}</p>
              </div>

              <div className="flex items-center space-x-2">
                <CircleDollarSign size={20} color="#F4CE14" />
                <p className="text-lg font-semibold">{item.priceRange} /hr</p>
              </div>
            </div>
            <div className="p-2 border border-gray-400 rounded-xl h-fit w-fit bg-[#4CAF50]">
              <div className="space-y-1">
               
                <div className="flex items-center space-x-2">
                  <CalendarCheck size={20} color="#fff" />
                  <p className="text-lg font-semibold text-white">{item.firstTime}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <CalendarCheck size={20} color="#fff" />
                  <p className="text-lg font-semibold text-white">{item.secondTime}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <CalendarCheck size={20} color="#fff" />
                  <p className="text-lg font-semibold text-white">{item.thirdTime}</p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flexCenter">
            <Button
              variant="outlined"
              startIcon={<LocalFireDepartmentIcon sx={{ color: "#D80032" }} />}
              sx={{ color: "#004225" }}
              color="success"
              onClick={() => handleOpenModal(item.name)}
            >
              <p className="text-lg">查看資料</p>
            </Button>
          </div> */}
        </div>
      ))}
      <TrainerModal name={selectedItem} />
    </div>
  );
};

export default Body_Client;
