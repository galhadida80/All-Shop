import React, { useState } from "react";
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
  const [image, setimage] = useState(listing.url);
  return (
    <View>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
      >
        <TouchableOpacity onPress={() => console.log(image)}>
          <Image
            style={styles.image}
            tint="light"
            // preview={{ uri: listing.url }}
            uri={listing.url}
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
