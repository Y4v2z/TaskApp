// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screen/home/home';
import {ADDTASK, TASKS} from '../utils/routes';
import AddTasks from '../screen/tasks/addTask';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={TASKS} component={Home} />
      <Stack.Screen name={ADDTASK} component={AddTasks} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
