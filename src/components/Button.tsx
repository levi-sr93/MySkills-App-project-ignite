import React from 'react';
import {TouchableOpacity, TouchableOpacityProps, StyleSheet, Text} from 'react-native';

type ButtonProps = TouchableOpacityProps

export function Button({ ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      {...rest}
      >
      <Text style={styles.buttonText}>
        Add
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#a370f7',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
