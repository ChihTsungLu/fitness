import Navbar from "../../Components/Navbar";

import { useState, useEffect } from "react";
import { storage } from "../../features/firebase";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import Nav_Client from "./Nav_Client";
import Body_Client from "./Body_Client";
interface ClientProps {}

const Client = ({}: ClientProps) => {

 
  const [imageList, setImageList] = useState<string[]>([]);
  const imageListRef = ref(storage, "images");

 

  // useEffect(() => {
  //   listAll(imageListRef)
  //     .then((res) => {
  //       res.items.forEach((item) => {
  //         getDownloadURL(item).then((url) => {
  //           setImageList((prev) => {
  //             if (!prev.includes(url)) {
  //               return [...prev, url]; // Add URL to the list
  //             }
  //             return prev; // If URL exists, return the previous state without changes
  //           });
  //         });
  //       });
  //     })
  //     .catch((e) => console.error(e));
  // }, []);

  return (
    <div>
      <Navbar />
      <div className="flex mt-[65px]">
        {/* <Nav_Client/> */}
        <Body_Client/>
      </div>
    </div>
  );
};

export default Client;
