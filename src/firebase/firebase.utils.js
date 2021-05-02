import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDa1J6wWKUHUuZMC_nx5FZRRpHp94NsHiU",
  authDomain: "crwn-db-7e3fa.firebaseapp.com",
  projectId: "crwn-db-7e3fa",
  storageBucket: "crwn-db-7e3fa.appspot.com",
  messagingSenderId: "371567924211",
  appId: "1:371567924211:web:658c16da420a64732e7886",
  measurementId: "G-VSDTR4FGPG",
};

firebase.initializeApp(config);
//api request is async call
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // const collectionRef = firestore.collection("users");
  // .get() on docReference to return docSnapshot
  const snapShot = await userRef.get();
  // const collectionSnapshot = await collectionRef.get();
  // console.log({ collectionSnapshot });
  //console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log({ collectionRef });
  console.log(123123123);
  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc(); //new reference and id
    // console.log({ newDocRef });
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};
///shop component
export const convertCollectionsSnapshotToMap = (collections) => {
  //.docs returns alll the doc in the collection
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    ///.data() is the JSON object
    return {
      //encodeURI, to URL conversion
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  // console.log(transformedCollection);
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
