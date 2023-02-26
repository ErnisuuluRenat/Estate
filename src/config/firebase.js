import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyADk4boLIOrt8zdY39K1XxqwY-SPocygA8",

  authDomain: "ruby-f138b.firebaseapp.com",

  projectId: "ruby-f138b",

  storageBucket: "ruby-f138b.appspot.com",

  messagingSenderId: "574069113166",

  appId: "1:574069113166:web:a90d34ce7022f26507de1f",

  measurementId: "G-JD6WXSWCG9",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

const analytics = getAnalytics(app);
