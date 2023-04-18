import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='Enter you event ' />
        <Button title='Add' color={"#0d0d0d"}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginHorizontal: 20
  },
  inputContainer: {
    width:"100%",
    marginTop: 55,
    flexDirection:"row" ,
    alignItems:"center",
    justifyContent:"space-around"
  },
  input:{
    width:"80%",
    borderBottomWidth:1,
    borderBottomColor:"#0d0d0d",
  }
});
