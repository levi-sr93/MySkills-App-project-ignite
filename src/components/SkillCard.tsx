import React from 'react';
import {Text, StyleSheet, TouchableOpacityProps, TouchableOpacity} from 'react-native';

interface ISkillCardProps extends TouchableOpacityProps{
  skill: string
}

export function SkillCard({skill, ...rest}:ISkillCardProps) {
  return (
    <TouchableOpacity
      {...rest}
    >
      <Text style={styles.skill}>{skill}</Text>
    </TouchableOpacity>
  );
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
