import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ListItem from "../components/lists/ListItem";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import Screen from "../components/Screen";

const initalMessages = [
  {
    id: 1,
    title: "Ts22",
    description: "Dl",
    image: require("../assets/chair.jpg"),
  },
  {
    id: 2,
    title: "T12",
    description: "Soft-Shirt",
    image: require("../assets/chair.jpg"),
  },
];
function MessagesScreen(props) {
  const [messages, setMessages] = useState(initalMessages); //state component
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (message) => {
    //-Delete-the-message-from-messages]
    const newMessages = messages.filter((m) => m.id !== message.id); //delete the messages and set to state
    setMessages(newMessages);
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("message", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/chair.jpg"),
            },
            {
              id: 23,
              title: "T22",
              description: "D2",
              image: require("../assets/chair.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

export default MessagesScreen;
