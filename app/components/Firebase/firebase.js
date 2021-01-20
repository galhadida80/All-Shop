import * as firebase from "firebase";
import { useEffect, useState } from "react";
import firebaseConfig from "./firebaseConfig";

// Initialize Firebase App

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const getPost = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    firebase
      .database()
      .ref(`Post/`)
      .on("value", function (snapshot) {
        setData(snapshot.val());
        // console.log(data);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 1000);
  }, []);
};

export const pushPost = ({
  title,
  price,
  description,
  images,
  location,
  category,
}) => {
  // const pa = uploadImage(images, title);

  const newPostKey = firebase.database().ref().child("posts").push().key;
  const g = firebase
    .database()
    .ref("Post/" + newPostKey)
    .update({
      title,
      price,
      description,
      images,
      location,
      category: category.label,
    })
    ? true
    : false;
  console.log(g);
  return g;
};

export const uploadImage = (images, imageName) => {
  images.forEach(async (uri) => {
    const filename = uri.substring(uri.lastIndexOf("/") + 1);

    const response = await fetch(uri);
    const blob = await response.blob();
    firebase
      .storage()
      .ref()
      .child("images/")
      .child(imageName)
      .child(filename)
      .put(blob);
  });
};

// const getAllImages = () => {
//   const ref = firebase.storage().ref("images/").child("Gggy");

//   ref.list().then((result) => {
//     result.items.forEach((itemsRef) => {
//       itemsRef.getDownloadURL().then((downloadURL) => {
//         console.log(itemsRef.location.path);
//       });
//     });
//   });
// };
export const auth = firebase.auth();

export const loginWithEmail = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

export const registerWithEmail = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

export const logout = () => auth.signOut();

export const passwordReset = (email) => auth.sendPasswordResetEmail(email);
