import { useState } from "react";
import { useFirebase } from "./context/Firebase";

function App() {
  const firebase = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <h1>Firebase</h1>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="Enter Email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Enter password"
      />
      <button
        onClick={() => {
          firebase.signupUserWithEmailAndPassword(email, password);
          firebase.putData("users/" + "shobujdas", { email, password });
        }}
      >
        Signup
      </button>
    </>
  );
}

export default App;
