import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDCyVeN20IfTDcopBixPezFWa_cdo0VrUw",
  authDomain: "fir-firebase-111c2.firebaseapp.com",
  databaseURL: "https://fir-firebase-111c2-default-rtdb.firebaseio.com",
  projectId: "fir-firebase-111c2",
  storageBucket: "fir-firebase-111c2.appspot.com",
  messagingSenderId: "909774758150",
  appId: "1:909774758150:web:b12873dbb1e503d178be87",
  measurementId: "G-HE684EZYDR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);