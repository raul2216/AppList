import { StatusBar } from 'expo-status-bar';
import { Button, Modal } from 'react-native';
import { StyleSheet, Text, View, YellowBox } from 'react-native';

export default function App() {
  return (
    <View  style={styles.container}>
    
      <Text>Lista de Tareas</Text>
      <Button title="Click in me" 
      onPress={() =>{ alert("click hecho");
    }}
      
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
