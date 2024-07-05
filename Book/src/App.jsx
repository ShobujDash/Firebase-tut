import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import "./App.css";
import { app } from "./firebase";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

const auth = getAuth(app);


function App() {
  const signupUser = () => {
    createUserWithEmailAndPassword(auth, "shobujd6@gmail.com", "shobuj@123").then((value)=>console.log(value));
  };

  return (
    <div className="App">
      <Signup />
      <Signin/>
    </div>
  );
}

export default App;
