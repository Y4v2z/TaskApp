//import liraries
import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// create a component
const StorageExample = () => {
  const [token, setToken] = useState('');
  const setMyToken = async value => {
    try {
      await AsyncStorage.setItem('token', value);
    } catch (e) {
      // saving error
    }
  };
  const getMyToken = async value => {
    try {
      const token = await AsyncStorage.getItem('token');
      setToken(token);
    } catch (e) {
      // saving error
    }
  };
  const removeMyToken = async value => {
    try {
      const token = await AsyncStorage.removeItem('token');
      setToken(token);
    } catch (e) {
      // saving error
    }
  };
  useEffect(() => {
    getMyToken();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{flex: 1, padding: 15}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{token}</Text>
      </View>
      <TouchableOpacity
        onPress={() => setMyToken('zpfFOMsQVd4YCiA9GunhNj8ITlDADdZv')}
        style={{
          backgroundColor: 'blue',
          padding: 15,
          justifyContent: 'center',
          alignItems: 'center',
          margin: 20,
          borderRadius: 50,
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          Save
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => removeMyToken()}
        style={{
          backgroundColor: 'orange',
          padding: 15,
          justifyContent: 'center',
          alignItems: 'center',
          margin: 20,
          borderRadius: 50,
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          Remove
        </Text>
      </TouchableOpacity>
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
export default StorageExample;
