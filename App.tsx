import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "firebase";
import { firebaseConfig } from "./config/firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

function SomeRandomThing() {
  return <Text>This is random text!</Text>;
}

export default function App() {
  return <View style={styles.container}>{}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
