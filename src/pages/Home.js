import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  ScrollView,
} from 'react-native';

import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [skillsList, setSkillsList] = useState([]);

  function handleAddNewSkill() {
    setSkillsList(prevState => [...prevState, newSkill]);
    setNewSkill('');
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Hello Universe !</Text>

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

        <ScrollView>
          {skillsList.map(skill => (
            <SkillCard key={skill} skill={skill} />
          ))}
        </ScrollView>
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
});
