import React from "react";
import { View } from "react-native";
import Icon from "./src/icons/Icon";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Icon name="ArrowRotateRight24" size={200} color="red" />
      <Icon name="sensorOn" size={200} color="blue" strokeWidth={2} />
    </View>
  );
}