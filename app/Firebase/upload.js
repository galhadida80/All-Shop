import { auth, FB } from "./firebase";

function User() {
  const email = FB.auth().currentUser.email;
  const usert = email.substring(0, email.lastIndexOf("@"));
  return usert;
}
export const getData = (listprivate) => {
  const data = [];

  const refernce = listprivate
    ? "PrivateList/" + User() + "/" + "Posts/"
    : "Post/";
  FB.database()
    .ref(refernce)
    .on("value", function (snapshot) {
      const todos = snapshot.val();
      for (let id in todos) {
        data.push(todos[id]);
      }
    });
  return data;
};

export const pushPost = async ({
  title,
  price,
  description,
  images,
  location,
  category,
}) => {
  const filename = images[0].substring(images[0].lastIndexOf("/") + 1);
  console.log(filename);
  const imageRef = FB.storage()
    .ref()
    .child("images/")
    .child(title + "/")
    .child(filename);
  const response = await fetch(images);
  const blob = await response.blob();
  await imageRef.put(blob);
  const url = await imageRef.getDownloadURL();

  const newPostKey = FB.database().ref().child("posts").push().getKey();
  FB.database()
    .ref("Post/" + newPostKey)
    .update({
      title,
      price,
      description,
      url,
      location,
      category: category.label,
    });
  const newPrivateListKey = FB.database()
    .ref()
    .child("PrivateList")
    .push()
    .getKey();

  FB.database()
    .ref("PrivateList/" + User() + "/" + "Posts/" + newPrivateListKey)
    .update({
      title,
      price,
      description,
      url,
      location,
      category: category.label,
    });
};

export const uploadFileToFireBase = (data) => {
  return pushPost(data);
};
