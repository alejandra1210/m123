import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.text}>Vista 1</Text>
        <Text>Hola dos</Text>
      </View>
      <View style={styles.box2}>
        <Text style={styles.text}>Vista 2</Text>
        <Text>Hola dos</Text>
      </View>
      <View style={styles.box3}>
        <Text style={styles.text}>Vista 3</Text>
        <Text>Hola dos</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { //objecto react dentro de el se agrega como si fuera json con clave valor 
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'column',//column y row
    
  },
  text: {
    color: '#E040FB',

  },
  box1:{
    flex:2,//se adapta al container
    backgroundColor:'#FFEB3B',
    alignItems:"center",
    justifyContent:"center",
  },
  box2:{
    flex:1,//se adapta al container
    backgroundColor:'#0288D1',
    alignItems:"center",
    justifyContent:"center",
  },
  box3:{
    flex:1,//se adapta al container
    backgroundColor:'#FF5252',
    alignItems:"center",
    justifyContent:"center",
  },
});
