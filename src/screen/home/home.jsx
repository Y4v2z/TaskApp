//import liraries
import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import FloatActionButton from '../../components/uı/floatActionButton';
import {ADDTASK} from '../../utils/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskCard from '../../components/home/taskCard';
import HeaderComponent from '../../components/home/headerComponent';

// create a component
const Home = ({navigation}) => {
  const [tasks, setTasks] = useState([]);
  getTask = async () => {
    try {
      const task = await AsyncStorage.getItem('task');
      if (task !== null) {
        setTasks([...tasks, JSON.parse(task)]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTask();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<HeaderComponent />}
        data={tasks}
        renderItem={({item}) => <TaskCard item={item} />}
      />
      <FloatActionButton onPress={() => navigation.navigate(ADDTASK)} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default Home;
