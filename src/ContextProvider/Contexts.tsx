import { useContext, createContext, useState, useEffect } from "react";
import { db } from "../features/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

interface StateContextProps {
    isTrainer: boolean;
    setIsTrainer: React.Dispatch<React.SetStateAction<boolean>>;
    isStudent: boolean;
    setIsStudent: React.Dispatch<React.SetStateAction<boolean>>;
    isAuthed: boolean;
    setIsAuthed: React.Dispatch<React.SetStateAction<boolean>>;
    userName: string;
    setUserName: React.Dispatch<React.SetStateAction<string>>;
    buildStep: number;
    setBuildStep: React.Dispatch<React.SetStateAction<number>>;
    userData: any;
}


const StateContext = createContext<StateContextProps | undefined>(undefined);

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [buildStep, setBuildStep] = useState(1);
  const [isTrainer, setIsTrainer] = useState(true);
  const [isStudent, setIsStudent] = useState(false)
  const [isAuthed, setIsAuthed] = useState(false)
  const [userName, setUserName] = useState<string>(localStorage.getItem("name") || "")
  const [userData, setUserData] = useState<any>()

  const databaseRef = collection(db, "trainer");

  const fetchData = async () => {
    const q = query(databaseRef, where("priceRange","==","800"))
    const querySnapshot = await getDocs(q);
    const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

    setUserData(newData[0])
  } 

  useEffect(()=> {
    fetchData()
  }, []);

  console.log('userData: ', userData)
  return (
    <StateContext.Provider
      value={{
        isTrainer,
        setIsTrainer,
        isStudent,
        setIsStudent,
        isAuthed,
        setIsAuthed,
        userName,
        setUserName,
        buildStep,
        setBuildStep,
        userData
    }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error(
      "useStateContext must be used within a StateDataContextProvider"
    );
  }
  return context;
};
