import React from 'react'
import { TextInput, Button, View } from 'react-native'
import { styles } from "./styles"

const Input = ({placeholder, value, onChangeText, onHandlerButton, color}) => {
  return (
    <View style={styles.inputContainer}>
        <TextInput 
          placeholder={placeholder}
          style={styles.input}
          value={value}
          onChangeText={(text) => onChangeText(text)}
        />
        <Button title='Add' color={color} onPress={onHandlerButton}/>
    </View>
  )
}

export default Input