// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABUdQrx6sDQQUdiT2aTBa4oALLwoRBS-4",
  authDomain: "netfixgpt-28fd1.firebaseapp.com",
  projectId: "netfixgpt-28fd1",
  storageBucket: "netfixgpt-28fd1.appspot.com",
  messagingSenderId: "721601576009",
  appId: "1:721601576009:web:07c08db9dab9c202735398",
  measurementId: "G-RFB7Z4QL55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();