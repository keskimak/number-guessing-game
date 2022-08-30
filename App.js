import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Button } from 'react-native';

export default function App() {

  const [number, setNumber] = React.useState(null);
  const [bodyText, setBodyText] = React.useState('Guess a number between 1-100');
  const [secretNumber, setSecretNumber] =React.useState(Math.floor(Math.random() * 100) + 1);
  const [counter, setCounter] = React.useState(0);
  const buttonPressed = () => {

    if (number > 100 || number<1) {

      Alert.alert('The number must be between 1-100')

    }
    
    else if (number === secretNumber) {

      Alert.alert('You guessed the number in '+counter+ ' guesses')
      setSecretNumber(Math.floor(Math.random() * 100) + 1)
      setBodyText('Guess a number between 1-100');
    
    } else if (number > secretNumber){

      setBodyText('Your guess ' + number + ' is too high')
      setCounter(counter+1)
      
      
    }

    else if (number < secretNumber){

      setBodyText('Your guess ' + number + ' is too low')
      setCounter(counter+1)
      
    }

    setNumber('');

  };

  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>{bodyText}</Text>
      <TextInput style={styles.input} value={number} onChangeText={number =>setNumber(parseInt(number))} keyboardType='number-pad'></TextInput>
      <Button title="make guess" onPress={buttonPressed}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },
  input: {
    width: 200,
    borderColor: 'black',
    borderWidth: 1

  },
  boldText: {
    fontWeight:"bold"
  }


});
