import { StatusBar } from 'expo-status-bar';
import { Button, Modal } from 'react-native';
import { StyleSheet, Text, View, YellowBox, SafeAreaView, Platform, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Link, NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import Header from './src/components/Header';
import Timer from './src/components/Timer';
import { Audio } from "expo-av"
const Stack = createStackNavigator();

export default function App() {

  const [isWorking, setIsWorking] = useState(false)
  const [time, SetTime] = useState(25 * 60)
  const [currentTime, SetCurrentTime] = useState("POMO" | "SHORT" | "LONG")
  const [isActive, SetIsActive] = useState("STOP" | "START")

  useEffect(() => {

    let interval = null;

    if(isActive){
     interval = setInterval(() =>{
       SetTime(time - 1)
     }, 1000)
    } else{
      clearInterval(interval)
    }
    
    if(time === 0){
      SetIsActive(false);
      setIsWorking((prev) => !prev);
      SetTime(isWorking ? 300 : 1500);
    }
 

    return () => clearInterval(interval)
  },[isActive, time])

  function handlerStarStop(event) {
   playSound();
    SetIsActive(!isActive);
  }

 async function playSound(){
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/click.wav")
    )
    await sound.playAsync()
  }
  const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"]
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors[currentTime] }]}>

      <View style={{ flex: 1, borderWidth: 3, paddingHorizontal: 15, paddingTop: Platform.OS === "android" && 30 }}>
        <Text style={styles.text}>Pomodoro</Text>
        <Header SetCurrentTime={SetCurrentTime} SetTime={SetTime} currentTime={currentTime} />
        <Timer time={time} />
        <TouchableOpacity style={styles.button} onPress={() => { handlerStarStop() }}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            {isActive ? "STOP" : "START"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  text: {
    fontSize: 32,
    fontWeight: "bold"
  },
  button: {
    backgroundColor: "#333333",
    padding: 15,
    marginTop: 15,
    borderRadius: 15,
    alignItems: "center",
  }
});


// const Home = ( navigation) => {
//   console.log(navigation)
//   return (
//     <Button onPress={() => {navigation.navigation.navigate("vista")}} title='Ir a Vista'/>
//     // <View> TEXTO DEL HOME</View>
//   )
// }


// const Vista = (navigation) => {
//   console.log(navigation)

//   return (
//     <Button onPress={() => {navigation.navigation.goBack()}} title='Volver al Home'/>
//   )
// }



{/* <NavigationContainer>

<Text>Hola</Text>
<Stack.Navigator
>
  <Stack.Screen
    name="home"
    component={Home}
  />

  <Stack.Screen
    name="vista"
    component={Vista}
    />
    </Stack.Navigator>
  {/* <View  style={styles.container}>

<Text>Lista de Tareas</Text>
<Button title="Click in me" 
onPress={() =>{ alert("click hecho");
}}

/>
<StatusBar style="auto" />
</View> */}
// </NavigationContainer> */}