import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8SRZAVCwgHkfW5EZgtZvd2pzwnrB4PeU",
  authDomain: "victornillo-ecommerce.firebaseapp.com",
  projectId: "victornillo-ecommerce",
  storageBucket: "victornillo-ecommerce.appspot.com",
  messagingSenderId: "706026806447",
  appId: "1:706026806447:web:0e233354626e1adf1e885a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db;