import React from "react";

import LottieView from "lottie-react-native";
import { StyleSheet, View } from "react-native";

function ActivityInDiactior({ visible = false }) {
  if (!visible) return null;
  return (
    <View>
      <LottieView source={require("./loading.json")} autoPlay loop />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // backgroundColor: palette.overlayBg,
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
});

export default ActivityInDiactior;
