import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import app from "../../firebase.cofig";

export const AuthContext = createContext();
const auth = getAuth(app);
const google = new GoogleAuthProvider();
const github = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, google);
  };
  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, github);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      setName(currentUser.displayName || "");
      setPhotoURL(currentUser.photoURL || "");
      setNewPassword(currentUser.password || "");
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    auth,
    user,
    name,
    photoURL,
    newPassword,
    loading,
    setName,
    setPhotoURL,
    setNewPassword,
    createUser,
    logIn,
    googleLogin,
    githubLogin,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
