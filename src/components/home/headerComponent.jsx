//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, Pressable} from 'react-native';
import AppColors from '../../theme/appColors';
import {
  ChartCircle,
  Clock,
  TaskSquare,
  CloseCircle,
  ArrowCircleRight2,
} from 'iconsax-react-native';

// create a component
const HeaderComponent = () => {
  const tasks = [
    {
      id: 1,
      title: 'Ongoing',
      color: AppColors.ONGOİNG,
      icon: <ChartCircle size="32" color="#d9e3f0" />,
    },
    {
      id: 2,
      title: 'Pending',
      color: AppColors.PENDİNG,
      icon: <Clock size="32" color="#d9e3f0" />,
    },
    {
      id: 3,
      title: 'Completed',
      color: AppColors.COMPLETED,
      icon: <TaskSquare size="32" color="#d9e3f0" />,
    },
    {
      id: 4,
      title: 'Cancel',
      color: AppColors.CANCEL,
      icon: <CloseCircle size="32" color="#d9e3f0" />,
    },
  ];
  const Task = ({item}) => {
    return (
      <View
        style={{
          width: '45%',
          backgroundColor: item.color,
          margin: 10,
          padding: 10,
          borderRadius: 10,
        }}>
        {item.icon}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <View>
            <Text
              style={{color: AppColors.WHITE, fontSize: 14, fontWeight: '600'}}>
              {item.title}
            </Text>
            <Text
              style={{
                color: AppColors.WHITE,
                fontSize: 16,
                fontWeight: '600',
                marginTop: 5,
              }}>
              {10} Task
            </Text>
          </View>
          <View>
            <ArrowCircleRight2 size="20" color="#fff" />
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={tasks}
        renderItem={({item}) => <Task item={item} />}
      />
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
            margin: 10,
            marginHorizontal: 20,
          }}>
          ALL TASK
        </Text>
      </View>
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
export default HeaderComponent;
