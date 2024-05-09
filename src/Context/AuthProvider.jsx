// import {
//   createUserWithEmailAndPassword,
//   getAuth,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   GoogleAuthProvider,
//   GithubAuthProvider,
//   signOut,
// } from "firebase/auth";
// import { createContext, useEffect, useState } from "react";
// import app from "../../firebase.config";
// import PropTypes from "prop-types";

// export const AuthContext = createContext(null);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();
// const providerr = new GithubAuthProvider();

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [name, setName] = useState("");
//   const [photoURL, setPhotoURL] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [loading, setLoading] = useState(true);

//   const createUser = (email, password) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password);
//   };
//   const logIn = (email, password) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, password);
//   };
//   const googleLogIn = () => {
//     setLoading(true);
//     return signInWithPopup(auth, provider);
//   };
//   const gitHubLogIn = () => {
//     setLoading(true);
//     return signInWithPopup(auth, providerr);
//   };

//   const logOut = () => {
//     setLoading(true);
//     return signOut(auth);
//   };

//   useEffect(() => {
//     const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//       setName(currentUser.displayName || "");
//       setPhotoURL(currentUser.photoURL || "");
//       setNewPassword(currentUser.password || "");
//     });
//     return () => {
//       unSubscribe();
//     };
//   }, []);

//   const authInfo = {
//     user,
//     name,
//     setName,
//     photoURL,
//     setPhotoURL,
//     newPassword,
//     setNewPassword,
//     loading,
//     createUser,
//     logIn,
//     googleLogIn,
//     gitHubLogIn,
//     logOut,
//   };

//   return (
//     <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
//   );
// };

// export default AuthProvider;

// AuthProvider.propTypes = {
//   children: PropTypes.node,
// };
