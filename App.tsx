import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDhTGx9dL0AMkoRO4FxyuR52yfHOXtDTr0",
  authDomain: "firebasics-f12b2.firebaseapp.com",
  projectId: "firebasics-f12b2",
  storageBucket: "firebasics-f12b2.appspot.com",
  messagingSenderId: "700695226634",
  appId: "1:700695226634:web:8f3c83a24f1a2459a2b2f3",
  measurementId: "G-TCDPQDXBKY",
};
firebase.initializeApp(firebaseConfig);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>What ama i doiong with ym leif</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
