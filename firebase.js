// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyDmkCXaOW46tAjvCGIUe9ZkfBm-QTTfsss",
    authDomain: "body-plan-bc2da.firebaseapp.com",
    projectId: "body-plan-bc2da",
    storageBucket: "body-plan-bc2da.appspot.com",
    messagingSenderId: "186959923303",
    appId: "1:186959923303:web:3cb0517b6de8dc04fd6cc2",
    measurementId: "G-D69GBNMX1L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
// const analytics = getAnalytics(app); //TODO figure out analytics later