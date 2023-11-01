import { Navigate } from "react-router-dom"
import { useStateContext } from "../ContextProvider/Contexts";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  
  const { isAuthed, setIsAuthed, userName, setUserName } = useStateContext();


  const userNAME = localStorage.getItem('name')

  if (userNAME === null || userNAME.length === 0) {
    return <Navigate to={"/auth"} replace />
  } 
  
  return children
}

export default ProtectedRoute