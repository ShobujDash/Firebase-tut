import { getToken } from "firebase/messaging";
import { useEffect } from "react";
import { messaging } from "./firebase";

function App() {
  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      // Generate Token
      const token = await getToken(messaging, {
        vapidKey:
          "BN68YirgagFXezcFKOYqhi0asCaOkV-PYJBctDiBraLciJFyHY2XHbNhj4l4GCgLDJxb1Hr3u6I1kRmf-HtUARw",
      });
      console.log("Token Genarate", token);
    } else if (permission === "denied") {
      alert("you denied for the notification");
    }
  }

  useEffect(() => {
    // Req user for notification permission
    requestPermission();
  }, []);

  return (
    <>
      <h1>Hi</h1>
    </>
  );
}

export default App;
