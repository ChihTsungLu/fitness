import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  



  const userNAME = localStorage.getItem('name')

  if (userNAME === null || userNAME.length === 0) {
    return <Navigate to={"/auth"} replace />
  } 
  
  return children
}

export default ProtectedRoute