//import liraries
import {TaskSquare} from 'iconsax-react-native';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const TaskCard = ({item}) => {
  return (
    <View style={styles.container}>
      <View>
        <TaskSquare size={25} color="red" />
      </View>
      <View style={{flex: 1, marginLeft: 10}}>
        <Text style={{fontSize: 16, fontWeight: '600', color: 'black'}}>
          {item.title}
        </Text>
        <Text style={{fontSize: 14, fontWeight: '300', color: 'gray'}}>
          {item.description}
        </Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 16, fontWeight: '600', color: 'black'}}>
            Start Date
          </Text>
          <Text style={{fontSize: 14, fontWeight: '300', color: 'gray'}}>
            {item.startDate}
          </Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 16, fontWeight: '600', color: 'black'}}>
            End Date
          </Text>
          <Text style={{fontSize: 14, fontWeight: '300', color: 'gray'}}>
            {item.endDate}
          </Text>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

//make this component available to the app
export default TaskCard;
