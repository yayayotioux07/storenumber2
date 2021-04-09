import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyDuJSbgp9Uqk6xb5CXReQF42_b5ngwyZow",
    authDomain: "crwn-clothing-db-7a59f.firebaseapp.com",
    projectId: "crwn-clothing-db-7a59f",
    storageBucket: "crwn-clothing-db-7a59f.appspot.com",
    messagingSenderId: "327910579580",
    appId: "1:327910579580:web:1ef51db6c16627ef8318f9",
    measurementId: "G-RSC3Z1PXDV"
  };

  export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
          await userRef.set ({
            displayName,
            email,
            createdAt,
            ...additionalData
          })
      } catch (error) {
        console.log('error creating user', error.message);
      }

    }
    return userRef;
  };

  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


