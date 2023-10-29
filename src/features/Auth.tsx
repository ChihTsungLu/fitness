
import { auth } from "./firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from "firebase/auth"
import { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { useStateContext } from "../ContextProvider/Contexts";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Auth = () => {
  const { setIsAuthed, isAuthed, setUserName} = useStateContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        //after successful login
        const name = result.user.displayName
        const email = result.user.email
        const profilePic = result.user.photoURL
        setIsAuthed(true)
        localStorage.setItem("name", name!)
        localStorage.setItem("email", email!)
        localStorage.setItem("profilePic", profilePic!)
        setUserName(name!)
        navigate("/trainer")
      })
      .catch((error) => {
        console.log(error)
      })
  }
// console.log(isAuthed)
  const handleSignUp = () => {

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('user created:', userCredential.user)
        const user = userCredential.user;
        // Send email verification
        sendEmailVerification(user)
          .then(() => {
            console.log('Verification email sent');
          })
          .catch((error) => {
            console.error('Error sending verification email:', error);
          });

      })
      .catch((err) => {
        console.log(err.message)
      })
  }
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('user sign out')
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  const handleSignInWith = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('user login:', userCredential.user)
        console.log('ev:', userCredential.user.emailVerified)
        if(userCredential.user.emailVerified){
          navigate("/trainer")
        }
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  onAuthStateChanged(auth, (user) => {
    console.log(user)
    if (user) {
      console.log('ev:', user.emailVerified)
    }
  })

  return (
    <div className="flexCenter flex-col  bg-[#f8f8f8] h-screen">
      <div className="bg-white m-20 rounded-xl p-8 flex flex-col items-center">
        <p className="text-4xl font-bold text-[#112458] mt-4">登入教練頁面</p>
        <button onClick={signInWithGoogle} className="login-with-google-btn mt-7 w-[400px]">Sign in with Google</button>
        <div className="flexCenter mt-6">

          <div className={`h-[1px] w-[100px] self-stretch bg-gray-400 opacity-100 dark:opacity-50 mr-6 mt-3`}></div>
          <p className="text-gray-400"> 或是使用 Email 登入</p>
          <div className={`h-[1px] w-[100px] self-stretch bg-gray-400 opacity-100 dark:opacity-50 ml-6 mt-3 `}></div>
        </div>


        <div className="flex flex-col mt-1 space-y-4">
          <TextField id="standard-basic" label="Email" variant="standard" className=" w-[380px]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField id="standard-basic" label="Password" variant="standard" className=" w-[380px]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mt-8">
          <Button
            variant="contained"
            onClick={handleSignInWith}
            className="w-[300px] h-[40px]"
          >
            <p className="text-xl">登入</p>
          </Button>
          <div className="mt-4 flexCenter">
            <p className="text-gray-400 mr-1">尚未註冊 ?</p>
            <button className="text-b" onClick={handleSignUp}>
              <p className="text-blue-400">註冊</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth