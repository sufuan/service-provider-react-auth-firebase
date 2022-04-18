// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB8kY9Awov1hDw49PVabwhicdvgOTOyJI",
  authDomain: "servie-provider-599b4.firebaseapp.com",
  projectId: "servie-provider-599b4",
  storageBucket: "servie-provider-599b4.appspot.com",
  messagingSenderId: "608719742092",
  appId: "1:608719742092:web:6def80503e5d138f7087a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)

 export default app