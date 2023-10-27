
import { auth } from "../firbase";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { redirect, useNavigate  } from "react-router-dom";

const Auth = () => {
  
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth,provider)
      .then((result)=>{
        //after successful login
        const name = result.user.displayName
        const email = result.user.email
        const profilePic = result.user.photoURL
  
        localStorage.setItem("name",  name!)
        localStorage.setItem("email",  email!)
        localStorage.setItem("profilePic",  profilePic!)
        navigate("/trainer")
        
      })
      .catch((error)=>{
        console.log(error)
      })
  }

  return (
    <div>
      <button onClick={signInWithGoogle} className="login-with-google-btn">Sign in with Google</button>
      <p>{localStorage.getItem("name")}</p>
    </div>
  )
}

export default Auth