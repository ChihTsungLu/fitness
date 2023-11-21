import { useState, useEffect } from "react";
import { db } from "../../features/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useClientContext } from "../../ContextProvider/ClientContext";
import TrainerModal from "./TrainerModal";
import {
  Briefcase,
  CalendarCheck,
  CircleDollarSign,
  LandPlot,
} from "lucide-react";
import MockImg from "../../assets/mocktrainer.avif";
import MockImg2 from "../../assets/mock2.avif";
import MockImg3 from "../../assets/mock3.jpg";


const Body_Client = () => {
  const { setModalOpen } = useClientContext();
  const [data, setData] = useState<any[]>([]);
  const [selectedItem, setSelectedItem] = useState<string>("");
  // const mockData = [
  //   {
  //     name: "示範教練1",
  //     title: "自由教練",
  //     expYear: 6,
  //     location: "台北 / 新北 / 桃園 ",
  //     priceRange: " 800 ~ 1200",
  //     firstTime: "週一 15:00 ~ 19:00",
  //     secondTime: "週三 15:00 ~ 19:00",
  //     thirdTime: "週五 15:00 ~ 19:00",
  //     imgUrl: MockImg,
  //   },
  //   {
  //     name: "示範教練2",
  //     title: "台中俱樂部教練",
  //     expYear: 8,
  //     location: "台中 / 線上 ",
  //     priceRange: " 900 ~ 1400",
  //     firstTime: "平日 15:00 ~ 19:00",
  //     secondTime: "平日 09:00 ~ 12:00",
  //     thirdTime: "假日 13:00 ~ 15:00",
  //     imgUrl: MockImg2,
  //   },
  //   {
  //     name: "示範教練3",
  //     title: "線上教練",
  //     expYear: 8,
  //     location: "高雄 / 線上 ",
  //     priceRange: " 900 ~ 1400",
  //     firstTime: "平日 15:00 ~ 19:00",
  //     secondTime: "平日 09:00 ~ 12:00",
  //     thirdTime: "假日 13:00 ~ 15:00",
  //     imgUrl: MockImg3,
  //   }
  // ];
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
    <div className="w-fit flex px-10 select-none flex-wrap gap-5">
      {data.map((item, index) => (
        <div
          key={index}
          className="border border-gray-400 p-4 rounded-xl w-fit h-fit cursor-pointer"
          onClick={() => handleOpenModal(item.name)}
        >
          <div>
            <img
              key={index}
              src={item.imgUrl}
              className="w-[325px] h-[300px] rounded-xl"
            />
          </div>
          <div className="">
            <p className="text-2xl font-bold mt-2 ml-2"> {item.name}</p>
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
            <div className="p-2 b">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <CalendarCheck size={20} color="#4CAF50" />
                  <p className="text-lg font-semibold ">{item.firstTime}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <CalendarCheck size={20} color="#4CAF50" />
                  <p className="text-lg font-semibold ">{item.secondTime}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <CalendarCheck size={20} color="#4CAF50" />
                  <p className="text-lg font-semibold ">{item.thirdTime}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <TrainerModal name={selectedItem} />
    </div>
  );
};

export default Body_Client;
