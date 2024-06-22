// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCH_SZ48eySpzxhH4q9G1Kjh5D7Z_QoRtM",
  authDomain: "netflixgpt-ff27f.firebaseapp.com",
  projectId: "netflixgpt-ff27f",
  storageBucket: "netflixgpt-ff27f.appspot.com",
  messagingSenderId: "982714045106",
  appId: "1:982714045106:web:43ceb1eece7f77f33c2fab",
  measurementId: "G-7ZZ1F8JMEN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);