import React from "react";
import { View } from "react-native";
import Icon from "./src/icons/Icon";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Icon name="brakeWarning" size={200} color="#ffffff" strokeWidth={2} />
      <Icon name="chartRadar" size={200} color="#ffffff" strokeWidth={2} />
      <Icon name="chevronRightDouble" size={200} color="#ffffff" strokeWidth={2} />
    </View>
  );
}