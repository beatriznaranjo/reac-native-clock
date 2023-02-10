import React, { useState } from "react";
import { View, Text } from "react-native";

export default function Clock() {
    let [time, setTime] = useState(new Date().toLocaleTimeString());

    React.useEffect(() => {
        let interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <View>
            <Text style={{fontWeight: 'bold', fontSize: 32, color: 'white'}}>{time}</Text>
        </View>
    );
}