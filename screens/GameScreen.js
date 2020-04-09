import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random()* (max-min)) + min;
  if(rndNum === exclude) {
    return generateRandomBetween(min, max, exclude); //recursion
  };
};

const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
    );

  return(
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.button}>
        <Button title="LOWER" />
        <Button title="GREATER" />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: 300,
    maxWidth: '80%'
  }
});

export default GameScreen;