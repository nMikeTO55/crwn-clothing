import { initializeApp } from "firebase/app";
import { getAuth, 
         signInWithPopup, 
         GoogleAuthProvider,  
         createUserWithEmailAndPassword
} from "firebase/auth";

import {
        getFirestore,
        doc,
        getDoc,
        setDoc } 
from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBEfPOcaB6nIYoTRuRlG3xPBoQUgSYPFOE",
  authDomain: "crwn-clothing-db-fdff6.firebaseapp.com",
  projectId: "crwn-clothing-db-fdff6",
  storageBucket: "crwn-clothing-db-fdff6.firebasestorage.app",
  messagingSenderId: "808048547082",
  appId: "1:808048547082:web:7a880ee9ce479775c3d6f3"
};


// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);
const provider    = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth                  = getAuth();
export const signInWithGooglePopup = ()=>signInWithPopup(auth, provider);
export const db                    = getFirestore();

export const createUserAuth = async (
  userAuth, 
  additionalInformation = {}
  )=> {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createAt = new Date();
    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additionalInformation,
      });
    } catch (error){
        console.log("Error Creating User", error.message);
    }
  }

  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password)=>{
  if (!email || !password) return;
  
  return await createUserWithEmailAndPassword(auth, email, password);
}