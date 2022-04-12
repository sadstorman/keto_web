// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9OUgGs9mlcuvN-GO1kv7tyGiOLtOiB8Y",
  authDomain: "ketofoodsearch.firebaseapp.com",
  projectId: "ketofoodsearch",
  storageBucket: "ketofoodsearch.appspot.com",
  messagingSenderId: "741224492041",
  appId: "1:741224492041:web:683f1e6f9c4b8bc801dcd8",
  measurementId: "G-9DGMEHNS9R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {
    analytics
  }