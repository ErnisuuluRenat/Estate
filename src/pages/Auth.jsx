import React from "react";
import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const Auth = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="auth">
      <div className="auth__container">
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input
          type={"password"}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {email ? (
          <button onClick={logout}>Log out</button>
        ) : (
          <>
            <button className="auth__button-1" onClick={signIn}>
              Sign in
            </button>
            <button className="auth__button-2" onClick={signInWithGoogle}>
              Sign in with google
            </button>
          </>
        )}
      </div>
    </div>
  );
};
