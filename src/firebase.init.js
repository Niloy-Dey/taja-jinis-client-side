// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBz6BFH8AaQh7YxWdbnyeTqnjmsHkSOCoo",
  authDomain: "taja-jinis.firebaseapp.com",
  projectId: "taja-jinis",
  storageBucket: "taja-jinis.appspot.com",
  messagingSenderId: "255112458460",
  appId: "1:255112458460:web:47d3c058089eea29090419",
  measurementId: "G-F3S66D6NS2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;