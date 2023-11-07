import Modal from "@mui/material/Modal";
import { useClientContext } from "../../ContextProvider/ClientContext";
import { storage } from "../../features/firebase";
import { ref, getDownloadURL, listAll, getMetadata, updateMetadata, } from "firebase/storage";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useStateContext } from "../../ContextProvider/Contexts";
import { useEffect, useState } from "react";
import { db } from "../../features/firebase";

interface TrainerModalProps {
  name: string;
}

const TrainerModal = ({ name }: TrainerModalProps) => {
  const { modalOpen, setModalOpen } = useClientContext();
  const [videoURL, setVideoURL] = useState<string>("");
  const [userData, setUserData] = useState<any>();
  const videoRef = ref(storage, "videos/");


  const databaseRef = collection(db, "trainer");

  

  const { userName } = useStateContext();
 
  const fetchData = async () => {
    const q = query(databaseRef, where("name","==",name))
    const querySnapshot = await getDocs(q);
    const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setUserData(newData)
  } 

  const getUserVideos = async () => {
    const videosList = await listAll(videoRef);

    getDownloadURL(videoRef).then((url) => {
      setVideoURL(url);
    });
  };
 

   useEffect(() => {
    fetchData()
    listAll(videoRef)
      .then((res) => {
        res.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            setVideoURL(url);
          });
        });
      })
      .catch((e) => console.error(e));
  }, [name]);

  console.log(userData)

  return (
    <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
      <div className="TrainerModal">
        
        <video
          controls
          src={videoURL}
          className="w-[400px] h-[400px]"
        />
      </div>
    </Modal>
  );
};

export default TrainerModal;
