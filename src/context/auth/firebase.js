// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXAcLj8AaCnO9qAjUcUAfHnHjGjix1Dhc",
  authDomain: "shopp-fake.firebaseapp.com",
  projectId: "shopp-fake",
  storageBucket: "shopp-fake.appspot.com",
  messagingSenderId: "212370093233",
  appId: "1:212370093233:web:5be6009731e8209ff51e90",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
