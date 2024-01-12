// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3Xw8h7iIhMyRTg7FErtORYRTeWA5KhNg",
  authDomain: "severless-app.firebaseapp.com",
  projectId: "severless-app",
  storageBucket: "severless-app.appspot.com",
  messagingSenderId: "753724454344",
  appId: "1:753724454344:web:b6aa08dae93e49b6433cfd",
  measurementId: "G-CFYBRW3YHS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getFirestore(app)

export {auth, db}