// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxLI-oCk-ie_oKO4_NYKdQvPXPpcj_L0k",
  authDomain: "admin-final-project.firebaseapp.com",
  projectId: "admin-final-project",
  storageBucket: "admin-final-project.appspot.com",
  messagingSenderId: "636285178075",
  appId: "1:636285178075:web:4d73d77ed9f459f87dbcfe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
