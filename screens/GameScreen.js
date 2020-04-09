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

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.ceil(max);
  const rndNum = Math.floor(Math.random()* (max-min)) + min;
  if(rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);s
  }
};
const GameScreen = (props) => {
  return(
    <View>

    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default GameScreen;
