import React from "react";
import { View } from "react-native";
import Icon from "./src/icons/Icon";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Icon name="laptopMedical" size={200} color="#ffffff" strokeWidth={2} />
    </View>
  );
}