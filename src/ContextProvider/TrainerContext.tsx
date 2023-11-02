import { useContext, createContext, useState, useEffect } from "react";


interface StateContextProps {
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    experience: string;
    setExperience: React.Dispatch<React.SetStateAction<string>>;
    expertise: string;
    setExpertise: React.Dispatch<React.SetStateAction<string>>;
    location: string;
    setLocation: React.Dispatch<React.SetStateAction<string>>;

}


const StateContext = createContext<StateContextProps | undefined>(undefined);

export const TrainerProvider = ({ children }: { children: React.ReactNode }) => {

  const [name, setName] = useState<string>("");
  const [experience, setExperience] = useState<string>(""); 
  const [expertise, setExpertise] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  
  return (
    <StateContext.Provider
      value={{
       name,
       setName,
       experience,
       setExperience,
       expertise,
       setExpertise,
       location,
       setLocation
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
