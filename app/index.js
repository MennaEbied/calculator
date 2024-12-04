import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Calculator from "../utils/Calculator";

export default function App() {
  return (
    <View style={styles.container}>
      <Calculator />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "center",
  },
});
