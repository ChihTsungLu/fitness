import { useNavigate, Outlet, Navigate } from "react-router-dom"
import { useStateContext } from "../ContextProvider/Contexts";
import Auth from "../features/Auth";
const ProtectedRoute = ({ children, ...rest }: { children: React.ReactNode }) => {
  
  const { isAuthed, setIsAuthed, userName, setUserName } = useStateContext();

  const navigate = useNavigate();


  if (userName === null ) {
    return <Navigate to={"/auth"} replace />
  } 
  
  return children
}

export default ProtectedRoute