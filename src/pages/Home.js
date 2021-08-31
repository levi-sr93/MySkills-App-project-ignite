import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

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

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleAddNewSkill}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>

        <Text style={[styles.title, {marginTop: 50, marginVertical: 50}]}>
          My Skills
        </Text>

        <ScrollView>
          {skillsList.map(skill => (
            <Text key={skill} style={styles.skill}>
              {skill}
            </Text>
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
  skill: {
    color: '#fff',
    backgroundColor: '#1f1e25',
    padding: 20,
    marginVertical: 10,
    textAlign: 'center',
  },
});
