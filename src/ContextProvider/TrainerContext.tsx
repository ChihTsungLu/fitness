import { useContext, createContext, useState, useEffect } from "react";
import { db } from "../features/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

interface userDataType {
  name: string
}

interface StateContextProps {
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    expYear: string;
    setExpYear: React.Dispatch<React.SetStateAction<string>>;
    location: string;
    setLocation: React.Dispatch<React.SetStateAction<string>>;
  
    priceRange: string;
    setPriceRange: React.Dispatch<React.SetStateAction<string>>;

    line: string;
    setLine: React.Dispatch<React.SetStateAction<string>>;
    insta: string;
    setInsta: React.Dispatch<React.SetStateAction<string>>;

    firstTime: string;
    setFirstTime: React.Dispatch<React.SetStateAction<string>>;
    secondTime: string;
    setSecondTime: React.Dispatch<React.SetStateAction<string>>;
    thirdTime: string;
    setThirdTime: React.Dispatch<React.SetStateAction<string>>;

    experience: string;
    setExperience: React.Dispatch<React.SetStateAction<string>>;
    goalInTime: string;
    setGoalInTime: React.Dispatch<React.SetStateAction<string>>;
    description: string;
    setDescription: React.Dispatch<React.SetStateAction<string>>;
    trainingMethod: string;
    setTrainingMethod: React.Dispatch<React.SetStateAction<string>>;
    navStep: number;
    setNavStep: React.Dispatch<React.SetStateAction<number>>;

    userData: any;
    imgUrl: string;
    setImgUrl: React.Dispatch<React.SetStateAction<string>>;
    setSecondImgUrl: React.Dispatch<React.SetStateAction<string>>;
    secondImgUrl:string;
    videoUrl: string;
    setVideoUrl: React.Dispatch<React.SetStateAction<string>>;
    imageUpload: File | undefined;
    setImageUpload: React.Dispatch<React.SetStateAction<File | undefined>>;
    secondImgUpload: File | undefined;
    setSecondImgUpload: React.Dispatch<React.SetStateAction<File | undefined>>;
    videoUpload: File | undefined;
    setVideoUpload: React.Dispatch<React.SetStateAction<File | undefined>>;

    setEmailAuth: React.Dispatch<React.SetStateAction<string>>;

    certOne: string;
    certTwo: string;
    certThree: string;
    setCertOne: React.Dispatch<React.SetStateAction<string>>;
    setCertTwo: React.Dispatch<React.SetStateAction<string>>;
    setCertThree: React.Dispatch<React.SetStateAction<string>>;
}


const StateContext = createContext<StateContextProps | undefined>(undefined);

export const TrainerProvider = ({ children }: { children: React.ReactNode }) => {

  const [userData, setUserData] = useState<any>()

  // 快速導覽
  const [name, setName] = useState<string>("");
  const [title, setTitle] = useState<string>("")
  const [expYear,setExpYear] = useState<string>("")
  const [location, setLocation] = useState<string>("");
  const [priceRange, setPriceRange] = useState<string>("");
  
  // 聯絡資訊
  const [line, setLine] = useState<string>("")
  const [insta,setInsta] = useState<string>("")
  
  // 預約時段
  const [firstTime, setFirstTime] = useState<string>("");
  const [secondTime, setSecondTime] = useState<string>("");
  const [thirdTime, setThirdTime] = useState<string>("");

  // 專業證照
  const [certOne, setCertOne] = useState<string>("");
  const [certTwo, setCertTwo] = useState<string>("");
  const [certThree, setCertThree] = useState<string>("");

  // 深入介紹
  const [experience, setExperience] = useState<string>(""); 
  const [goalInTime, setGoalInTime] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [trainingMethod, setTrainingMethod] = useState<string>("");

  //照片&影片
  const [imageUpload, setImageUpload] = useState<File | undefined>();//第一張上傳的照片
  const [imgUrl, setImgUrl] = useState<string>("");//上傳後下載 URL 儲存
  const [secondImgUpload, setSecondImgUpload] = useState<File | undefined>()
  const [secondImgUrl, setSecondImgUrl] = useState<string>("");

  const [videoUpload, setVideoUpload] = useState<File | undefined>();
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [emailAuth, setEmailAuth] = useState<string>("")

  const [navStep, setNavStep] = useState(0)

  const databaseRef = collection(db, "trainer");
  
  

  const fetchData = async () => {
 
    const q = query(databaseRef, where("email","==",emailAuth))
    const querySnapshot = await getDocs(q);
    const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    // console.log(newData)
    setUserData(newData[0])
   
  } 
console.log(emailAuth,'123')
  useEffect(()=> {
    fetchData()
  }, [emailAuth]);

 

  useEffect(()=>{
    if (userData !== undefined) {
      setName(userData.name );
      setTitle(userData.title );
      setExpYear(userData.expYear );
      setLocation(userData.location );
      setPriceRange(userData.priceRange );

      setLine(userData.line );
      setInsta(userData.insta );

      setFirstTime(userData.firstTime );
      setSecondTime(userData.secondTime );
      setThirdTime(userData.thirdTime );

      setCertOne(userData.certOne);
      setCertTwo(userData.certTwo);
      setCertThree(userData.certThree);

      setExperience(userData.experience );
      setGoalInTime(userData.goalInTime );
      setDescription(userData.description );
      setTrainingMethod(userData.trainingMethod );

      setImgUrl(userData.imgUrl);
      setSecondImgUrl(userData.secondImgUrl);
      setVideoUrl(userData.videoUrl)
    }
  },[userData])

  // console.log('userData: ', userData)

  return (
    <StateContext.Provider
      value={{
       name,
       setName,
       title,
       setTitle,
       expYear,
       setExpYear,
       location,
       setLocation,
       priceRange,
       setPriceRange,
       line,
       setLine,
       insta,
       setInsta,
       firstTime,
       setFirstTime,
       secondTime,
       setSecondTime,
       thirdTime,
       setThirdTime,
       goalInTime,
       setGoalInTime,
       experience,
       setExperience,
       description,
       setDescription,
       trainingMethod,
       setTrainingMethod,
       navStep,
       setNavStep,
       userData,

       imgUrl,
       setImgUrl,
       secondImgUrl,
       setSecondImgUrl,
       imageUpload,
       setImageUpload,
       secondImgUpload,
       setSecondImgUpload,
       videoUpload,
       setVideoUpload,
       videoUrl,
       setVideoUrl,

       certOne,
       certTwo,
       certThree,
       setCertOne,
       setCertTwo,
       setCertThree,
       setEmailAuth
    }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useTrainerContext = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error(
      "useStateContext must be used within a StateDataContextProvider"
    );
  }
  return context;
};
