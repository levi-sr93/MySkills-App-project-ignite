import React from 'react';
import {Text, StyleSheet} from 'react-native';

export function SkillCard({skill}) {
  return <Text style={styles.skill}>{skill}</Text>;
}

const styles = StyleSheet.create({
  skill: {
    color: '#fff',
    backgroundColor: '#1f1e25',
    padding: 20,
    marginVertical: 10,
    textAlign: 'center',
  },
});
