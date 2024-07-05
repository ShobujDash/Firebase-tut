import { getDatabase,ref,set } from 'firebase/database'
import {app} from "./firebase"
import './App.css'

const db = getDatabase(app);

function App() {
 
  const putData = () => {
    set(ref(db, 'users/shobuj'), {
      id: 1,
      name: "Shobuj Das",
      age:21,
    })
  }

  return (
    <>
      <h1>Wellcome to fire base </h1>
      <button onClick={putData}>Put Dada</button>
    </>
  )
}

export default App
