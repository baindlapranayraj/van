import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDLSDiVjfQCUi9AO3pcepkJyi7bWpFORrE",
  authDomain: "vanauthen-97f07.firebaseapp.com",
  projectId: "vanauthen-97f07",
  storageBucket: "vanauthen-97f07.appspot.com",
  messagingSenderId: "648875240724",
  appId: "1:648875240724:web:99d9a62bec83b7b5e4e601"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

