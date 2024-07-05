import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../firebase';

const auth = getAuth(app);


function Signin() {
   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
   const singinUser = () => {
    signInWithEmailAndPassword(auth, email, password).then((value) =>
      console.log("Sign success")
    ).catch(err =>console.log(err))
  };
  
  return (
    <div className="singin-page">
      <h1>Signin Page</h1>
      <label>Enter your Email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        required
        placeholder="Enter your Email here"
      />
      <label>Password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        required
        placeholder="Enter your password here"
      />
      <button onClick={singinUser} >Signin me in</button>
    </div>
  );
}

export default Signin
