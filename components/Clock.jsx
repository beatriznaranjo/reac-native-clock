import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

export default function Clock() {
  let [time, setTime] = useState("00:00");
  //In useEffect>
  //[]: First time only
  //[a, b]: Watch for changes
  //null: On every render
  //return: On unmount (lo ultimo que se ejecuta cuando el componente se va a desmontar)
  useEffect(() => {
    let tick = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      console.log("tick");
    }, 1000);
    return () => clearInterval(tick);
  }, []);

  return (
    <View>
      <Text style={{ fontWeight: "bold", fontSize: 32, color: "white" }}>
        {time}
      </Text>
    </View>
  );
}
