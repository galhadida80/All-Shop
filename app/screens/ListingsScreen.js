import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import color from "../config/color";
import routes from "../navigation/routes";
import AppText from "../components/AppText";
import AppButton from "../components/Button";
import ActivityInDiactior from "../assets/animations/ActivityInDiactior";
import { getPost, getData } from "../Firebase/upload";

function ListingsScreen({ navigation, route }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(false);

  useEffect(() => {
    // console.log("data" + data);

    loadLoading(), 1000;
  }, []);
  function loadLoading() {
    const { listprivate } = route.params;

    setData(getData(listprivate));
    setLoading(false);
  }

  return (
    <>
      {/* <ActivityInDiactior visible={loading} /> */}
      <Screen style={styles.screen}>
        {data == false ? (
          <View style={styles.errorWrapper}>
            <AppText>Couldns't retrieve the listings.</AppText>
            <AppButton
              title="Retry"
              onPress={() => loadLoading()}
              colorbutton={"#fc5c65"}
            />
          </View>
        ) : null}

        <FlatList
          data={data}
          // keyExtractor={(listing) => listing.newPostKey.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              key={item.id}
              subTitle={item.price}
              imageUrl={item.url}
              onPress={() => navigation.navigate("ListDetailScreen", item)}
            />
          )}
        />
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 20,
    backgroundColor: color.light,
  },
  errorWrapper: {
    paddingHorizontal: 32,
    paddingTop: 32,
  },
});
export default ListingsScreen;
