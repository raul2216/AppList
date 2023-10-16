import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  YellowBox,
  TouchableOpacity,
} from "react-native";
// import { TouchableOpacity } from 'react-native-gesture-handler';

const options = ["Pomodoro", "Short Break", "long Break"];

export default function Header({ SetCurrentTime, SetTime, currentTime }) {
  function handlePress(index) {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
    SetCurrentTime(index);
    SetTime(newTime * 60);
  }

  return (
    <View style={{ flexDirection: "row" }}>
      {options.map((ele, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.itemStyle, currentTime !== index && {borderColor: "transparent"}]}
          onPress={() => {
            handlePress(index);
          }}
        >
          <Text style={{fontWeight: "bold"}}>{ele}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  itemStyle: {
    width: "33%",
    borderWidth: 3,
    padding: 5,
    borderColor: "white",
    marginVertical: 20,
    borderRadius: 10,
    alignItems: "center",
  },
});
