import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgnU7VY0cy98eC5hHwSLTKqk8IPvLxysA",
  authDomain: "disney-clone-b3f5d.firebaseapp.com",
  projectId: "disney-clone-b3f5d",
  storageBucket: "disney-clone-b3f5d.appspot.com",
  messagingSenderId: "74206181578",
  appId: "1:74206181578:web:b3a70745f35d0e6debdc33",
  measurementId: "G-J47YFEZBRC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
