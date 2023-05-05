import React from 'react'
import { useState } from 'react'
import { auth } from '../config/firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import "./MainPage.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const [isSignup,setIsSignup] = useState(true)
  const [username , setUsername] = useState("")
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const navigate = useNavigate();
  const db = getDatabase();
  const handleSignup = () =>{
    console.log(email,username,password)
    createUserWithEmailAndPassword(auth, email, password)
  .then((success) => {
    console.log("user created")
    
    set(ref(db, `users/${success.user.uid}`), {
          username:username,
          email:email,
          id:success.user.uid    
      });
     
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }
  const handleLogin = ()=>{
    console.log(email,password)
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      let log ={
        uids : user.uid
      }
      // console.log(log.uids)
      alert("user login")
    navigate('/homesc' , {
      state:log
    })
    // navigate("/homesc",{
    //   state:arr
    // })
    // ...
  })

  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  }
    return (
        <div className='login'>
          <div className='text-center'>
      <form>
      <h1>{isSignup?"REGISTER":"LOGIN"}</h1>
      <br />
        {isSignup && (
          <div>
            <label htmlFor="username" className=''>Username</label>
            <br />
            <input type="text" id="username" className='' value={username} onChange={(e)=>setUsername(e.target.value)}/>
          </div>
        )}
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input type="text" name="" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" name="" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        {isSignup?(
          <button onClick={handleSignup}>Signup</button>
        ):(
          <button onClick={handleLogin}>Login</button>
        )}
        <Link type='button' style={{textDecoration:"none"}} onClick={()=>setIsSignup(!isSignup)}>{isSignup? "Already have an account? Login here":"Don't have an account ? Register here"}</Link>
      </form>
      
        </div>
      </div>
    )
}

export default MainPage