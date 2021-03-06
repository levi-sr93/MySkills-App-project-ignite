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

interface ISkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState<string>('');
  const [skillsList, setSkillsList] = useState<ISkillData[]>([]);
  const [greeting, setGretting] = useState<string>('');

  function handleAddNewSkill() {

    const skillData:ISkillData = {
      id: String(new Date().getTime()),
      name: newSkill,
    }
    
    setSkillsList(prevState => [...prevState, skillData]);
    setNewSkill('');
  }

  function handleRemoveSkill(id: string) {
    setSkillsList((oldState => oldState.filter((skill) => skill.id !== id)))
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

        <Button 
          title="New"
          onPress={handleAddNewSkill}
        
        />


        <Text style={[styles.title, {marginTop: 50, marginVertical: 50}]}>
          My Skills
        </Text>

        <FlatList
          data={skillsList}
          keyExtractor={item => item.id}
          renderItem={({item}) => <SkillCard skill={item.name} onPress={() => handleRemoveSkill(item.id)} />}
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
