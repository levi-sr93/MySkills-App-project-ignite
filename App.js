import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 22, fontWeight: 'bold'}}>Hello Universe !</Text>
      </View>

      <TouchableOpacity
        style={{
          alignSelf: 'center',
          marginBottom: 30,
          backgroundColor: 'teal',
          borderRadius: 8,
          padding: 20,
        }}>
        <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
          Start...
        </Text>
      </TouchableOpacity>
    </>
  );
}
