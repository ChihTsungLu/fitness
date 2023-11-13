import { useContext, createContext, useState, useEffect } from "react";


interface StateContextProps {
    isTrainer: boolean;
    setIsTrainer: React.Dispatch<React.SetStateAction<boolean>>;
    isStudent: boolean;
    setIsStudent: React.Dispatch<React.SetStateAction<boolean>>;
 
    buildStep: number;
    setBuildStep: React.Dispatch<React.SetStateAction<number>>;

}


const StateContext = createContext<StateContextProps | undefined>(undefined);

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [buildStep, setBuildStep] = useState(1);
  const [isTrainer, setIsTrainer] = useState(true);
  const [isStudent, setIsStudent] = useState(false)
  
 
  return (
    <StateContext.Provider
      value={{
        isTrainer,
        setIsTrainer,
        isStudent,
        setIsStudent,
        buildStep,
        setBuildStep,
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
