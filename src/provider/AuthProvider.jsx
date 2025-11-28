import React, { createContext, useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Email/Password register function
  const registerWithEmailPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Google sign-in
  const handleGoogleSignin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // update user state automatically
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // ✅ Add auth to context so Profile update can use it
  const authData = {
    registerWithEmailPassword,
    handleGoogleSignin,
    setUser,
    user,
    loading,
    auth, // auth export করা হলো
  };

  return (
    <AuthContext.Provider value={authData}>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
