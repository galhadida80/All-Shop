import * as firebase from "firebase";
import firebaseConfig from "./firebaseConfig";

// Initialize Firebase App

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export const FB = firebase;
export const auth = firebase.auth();
