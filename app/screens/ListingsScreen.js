import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import color from "../config/color";
import listingsApi from "../api/listings";
import routes from "../navigation/routes";
import AppText from "../components/AppText";
import AppButton from "../components/Button";
import ActivityInDiactior from "../assets/animations/ActivityInDiactior";
import useApi from "../hooks/useApi";
import { getPost } from "../components/Firebase/firebase";
import * as firebase from "firebase";
import ListDetailScreen from "./ListDetailScreen";

function ListingsScreen({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    const todoRef = firebase.database().ref("/Post");
    todoRef.on("value", (snapshot) => {
      const todos = snapshot.val();
      const data = [];
      for (let id in todos) {
        data.push(todos[id]);
      }

      // console.log(data);
      setData(data);
    });
  }, []);

  return (
    <>
      {/* <ActivityInDiactior visible={loading} /> */}
      <Screen style={styles.screen}>
        <View style={styles.errorWrapper}>
          {/* <AppText>Couldns't retrieve the listings.</AppText>
          <AppButton
            title="Retry"
            onPress={() => fort(data)}
            colorbutton={"#fc5c65"}
          /> */}
        </View>

        <FlatList
          data={data}
          // keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              key={item.id}
              subTitle={item.price}
              imageUrl="https://firebasestorage.googleapis.com/v0/b/all-shop80.appspot.com/o/images%2FGfgh%2F18a0c34a-e43a-4d80-b8ac-d4cb62559fb8.jpg?alt=media&token=cdb7c70b-a5aa-41a4-acb8-1c9824d5be05"
              onPress={() => navigation.navigate("ListDetailScreen", item)}
              thumbailUrl="https://firebasestorage.googleapis.com/v0/b/all-shop80.appspot.com/o/images%2FGfgh%2F18a0c34a-e43a-4d80-b8ac-d4cb62559fb8.jpg?alt=media&token=cdb7c70b-a5aa-41a4-acb8-1c9824d5be05"
            />
          )}
        />
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 10,
    backgroundColor: color.light,
  },
  errorWrapper: {
    paddingHorizontal: 32,
    paddingTop: 32,
  },
});
export default ListingsScreen;
