// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo6yRLphIBHUY3AM065DtvvZB11Q7G5cU",
  authDomain: "magic-shop-bbe7c.firebaseapp.com",
  projectId: "magic-shop-bbe7c",
  storageBucket: "magic-shop-bbe7c.appspot.com",
  messagingSenderId: "890723624079",
  appId: "1:890723624079:web:caee7177facda0b149bcfa"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

// this exports the CONFIGURED version of firebase
export default firebase;