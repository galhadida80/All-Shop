import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import color from "../config/color";
import AppText from "../components/AppText";
import ListItem from "../components/lists/ListItem";
import { Image } from "react-native-expo-image-cache";
import ContactForm from "../components/forms/ContactForm";
import * as firebase from "firebase";

function ListDetailScreen({ route }) {
  const listing = route.params;
  const [imageUrl, setImageUrl] = useState(null);

  // useEffect(() => {
  //   const ref = firebase
  //     .storage()
  //     .ref(
  //       "images/" +
  //         listing.title +
  //         "/" +
  //         "18a0c34a-e43a-4d80-b8ac-d4cb62559fb8.jpg"
  //     )
  //     .getDownloadURL()
  //     .then((url) => {
  //       setImageUrl(url);
  //     }); //name in storage in firebase console

  //   console.log(imageUrl);
  // }, []);

  return (
    <View>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
      >
        <TouchableOpacity onPress={() => console.log(listing.imageUrl)}>
          <Image
            style={styles.image}
            tint="light"
            preview={listing.imageUrl}
            uri="https://firebasestorage.googleapis.com/v0/b/all-shop80.appspot.com/o/images%2FGfgh%2F18a0c34a-e43a-4d80-b8ac-d4cb62559fb8.jpg?alt=media&token=cdb7c70b-a5aa-41a4-acb8-1c9824d5be05"
          ></Image>
        </TouchableOpacity>
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{listing.title}</AppText>
          <AppText style={styles.price}>${listing.price}</AppText>
        </View>

        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/chair.jpg")}
            title="gal hadida"
            subtitle="1 list"
          />
        </View>
        <ContactForm listing={listing} />
      </KeyboardAvoidingView>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },

  price: {
    color: color.primary,
    fontWeight: "bold",
    fontSize: 22,
    marginVertical: 10,
  },

  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  detailsContainer: {
    padding: 10,
  },
  userContainer: {
    marginVertical: 30,
  },
});
export default ListDetailScreen;
