import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button } from "react-native";
import Clock from "./components/Clock";

const App = () => {
  const [on, setOn] = useState(false);

  const toggleClock = () => {
    setOn(!on);
  };

  return (
    <View style={styles.container}>
      {on && <Clock />}
      <Button title={`Turn clock ${on ? "OFF" : "ON"}`} onPress={toggleClock} />
      <StatusBar style="dark" />
    </View>
  );
};

styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#052A38",
    alignItems: "center",
    justifyContent: "center",
  },
  baseText: {
    color: "#FFF",
  },
});

export default App;
