import {
  addDoc,
  collection,
  doc,
  getDoc,
  getFirestore,
  query,
  where,
  getDocs,
  updateDoc
} from "firebase/firestore";
import { app } from "./firebase";

const firestore = getFirestore(app);

function App() {
  const writeData = async () => {
    const result = await addDoc(collection(firestore, "cities"), {
      name: "Dhaka",
      pinCode: 123456,
      lat: 123,
      long: 456,
    });

    console.log("Result", result);
  };
  const makeSubCollection = async () => {
    await addDoc(collection(firestore, "cities/vH1Zl6Oo8lMcVRiH6Vsg/places"), {
      name: "this a place",
      desc: "Awsm Desc",
      data: Date.now(),
    });
  };

  const getDocument = async () => {
    const ref = doc(firestore, "cities", "vH1Zl6Oo8lMcVRiH6Vsg");
    const snap = await getDoc(ref);
    console.log(snap.data());
  };

  const getDocumentByQuery = async () => {
    const collectionRef = collection(firestore, "users");
    const q = query(collectionRef, where("isMail", "==", true));
    const snapshot = await getDocs(q);
    snapshot.forEach((data)=>console.log(data.data()))
  };

  const updata = async () => {
    const docRef = doc(firestore, "cities", "39hfYd71wzdm0ChubUKI");
    await updateDoc(docRef, {
      name:"New Dhaka"
    })
  }

  return (
    <>
      <h1>Shobuj Das</h1>
      <button onClick={writeData}>Put Data</button>
      <button onClick={makeSubCollection}>Put Sub Data </button>
      <button onClick={getDocument}> Get Document Data </button>
      <button onClick={getDocumentByQuery}> Get Document By Query </button>
      <button onClick={updata}> Update </button>
    </>
  );
}

export default App;
