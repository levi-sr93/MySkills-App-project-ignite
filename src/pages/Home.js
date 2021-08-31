import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from 'react-native';

import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [skillsList, setSkillsList] = useState([]);
  const [greeting, setGretting] = useState('');

  function handleAddNewSkill() {
    setSkillsList(prevState => [...prevState, newSkill]);
    setNewSkill('');
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGretting('Good Morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGretting('Good Afternoon');
    } else {
      setGretting('Good Evening');
    }
  }, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={[styles.title, styles.greetings]}>{greeting}, Levi</Text>

        <TextInput
          placeholder="new skill"
          placeholderTextColor="#555"
          style={styles.input}
          value={newSkill}
          onChangeText={setNewSkill}
        />

        <Button handleAddNewSkill={handleAddNewSkill} />

        <Text style={[styles.title, {marginTop: 50, marginVertical: 50}]}>
          My Skills
        </Text>

        <FlatList
          data={skillsList}
          keyExtractor={item => item}
          renderItem={({item}) => <SkillCard skill={item} />}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 5,
    marginBottom: 20,
  },
  greetings: {
    color: '#fff',
  },
});
