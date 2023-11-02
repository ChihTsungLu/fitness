import { useContext, createContext, useState, useEffect } from "react";

interface StateContextProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const StateContext = createContext<StateContextProps | undefined>(undefined);

export const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <StateContext.Provider
      value={{
        modalOpen,
        setModalOpen,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useClientContext = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error(
      "useStateContext must be used within a StateDataContextProvider"
    );
  }
  return context;
};
