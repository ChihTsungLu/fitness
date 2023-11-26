import { Navigate } from "react-router-dom"
import { useTrainerContext } from "../ContextProvider/TrainerContext"
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  
  const { emailAuth } = useTrainerContext();

  const userNAME = localStorage.getItem('name')

  
  if (userNAME === null || userNAME.length === 0) {
    return <Navigate to={"/auth"} replace />
  } 
  
  return children
}

export default ProtectedRoute