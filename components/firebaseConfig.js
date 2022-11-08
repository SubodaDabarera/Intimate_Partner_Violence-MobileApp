// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3MgZW8CZyLlb5P1u5Dh_1jT_weqvhbwc",
  authDomain: "ipv-chat.firebaseapp.com",
  projectId: "ipv-chat",
  storageBucket: "ipv-chat.appspot.com",
  messagingSenderId: "555329946642",
  appId: "1:555329946642:web:67479c7bd10fdaaddb04cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const FirebaseDB = getFirestore(app);

export default FirebaseDB;