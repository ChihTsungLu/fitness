import { useContext, createContext, useState, useEffect } from "react";


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

}


const StateContext = createContext<StateContextProps | undefined>(undefined);

export const TrainerProvider = ({ children }: { children: React.ReactNode }) => {

  // 第一段
  const [name, setName] = useState<string>("");
  const [title, setTitle] = useState<string>("")
  const [expYear,setExpYear] = useState<string>("")
  const [location, setLocation] = useState<string>("");
  const [priceRange, setPriceRange] = useState<string>("");
  
  // 第二段
  const [line, setLine] = useState<string>("")
  const [insta,setInsta] = useState<string>("")
  
  // 第三段
  const [firstTime, setFirstTime] = useState<string>("");
  const [secondTime, setSecondTime] = useState<string>("");
  const [thirdTime, setThirdTime] = useState<string>("");

  // 第四段
  const [experience, setExperience] = useState<string>(""); 
  const [goalInTime, setGoalInTime] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [trainingMethod, setTrainingMethod] = useState<string>("");


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
       setTrainingMethod
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
