// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLV6DpEeblGRBFdk2MSg5GvsR_OLO3RdE",
  authDomain: "keto-web-app.firebaseapp.com",
  projectId: "keto-web-app",
  storageBucket: "keto-web-app.appspot.com",
  messagingSenderId: "151101236704",
  appId: "1:151101236704:web:f3bf769285029a4627b785",
  measurementId: "G-7QJRFT0EK5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export{
    analytics
}