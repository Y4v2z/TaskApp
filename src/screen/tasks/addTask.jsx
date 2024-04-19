// //import liraries
// import {View, Text, StyleSheet} from 'react-native';
// import {Formik} from 'formik';
// import {Input, Button, Radio, RadioGroup} from '@ui-kitten/components';
// import DatePicker from '../../components/uı/datePicker';
// import {taskSchema} from '../../utils/validation';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {TASKS} from '../../utils/routes';
// import {status} from '../../utils/constants';
// import uuid from 'react-native-uuid';
// // create a component
// const AddTask = ({navigation}) => {
//   const saveTask = async values => {
//     try {
//       await AsyncStorage.setItem('task', JSON.stringify(values));

//       // console.log('başarılı');
//       navigation.navigate(TASKS);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <View style={styles.container}>
//       <Formik
//         initialValues={{
//           id: uuid.v4(),
//           title: 'Yazılım',
//           description: 'Yazılım derslerine calis',
//           startDate: null,
//           endDate: null,
//           category: 0,
//           status: status.ONGOİNG,
//         }}
//         validationSchema={taskSchema}
//         onSubmit={values => saveTask(values)}>
//         {({handleChange, handleSubmit, values, setFieldValue, errors}) => (
//           <View style={{flex: 1, padding: 15}}>
//             <Input
//               size="large"
//               style={{marginVertical: 10}}
//               label={'Title'}
//               placeholder=""
//               value={values.title}
//               onChangeText={handleChange('title')}
//               caption={errors.title}
//               status={errors.title ? 'danger' : 'success'}
//             />
//             <Input
//               multiline
//               size="large"
//               style={{marginVertical: 10}}
//               label={'Description'}
//               placeholder=""
//               value={values.description}
//               onChangeText={handleChange('description')}
//               caption={errors.description}
//               status={errors.description ? 'danger' : 'success'}
//             />
//             <DatePicker
//               size="large"
//               style={{marginVertical: 10}}
//               label={'Start Date'}
//               date={values.startDate}
//               onSelectDate={date => setFieldValue('startDate', date)}
//               caption={errors.startDate}
//               status={errors.startDate ? 'danger' : 'success'}
//             />
//             <DatePicker
//               size="large"
//               style={{marginVertical: 10}}
//               label={'End Date'}
//               date={values.endDate}
//               onSelectDate={date => setFieldValue('endDate', date)}
//               caption={errors.endDate}
//               status={errors.endDate ? 'danger' : 'success'}
//             />
//             <RadioGroup
//               selectedIndex={values.category}
//               onChange={index => setFieldValue('category', index)}>
//               <Radio status="success">Software</Radio>
//               <Radio status="success">Design</Radio>
//               <Radio status="success">Operation</Radio>
//             </RadioGroup>
//             <Button
//               style={{marginTop: 30}}
//               onPress={handleSubmit}
//               status="success">
//               CREATE
//             </Button>
//           </View>
//         )}
//       </Formik>
//     </View>
//   );
// };

// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 15,
//   },
// });

// //make this component available to the app
// export default AddTask;

//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import uuid from 'react-native-uuid';
import {Input, Button, Radio, RadioGroup} from '@ui-kitten/components';
import {Formik} from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {status} from '../../utils/constants';
import CustomDatePicker from '../../components/uı/datePicker';
import {taskSchema} from '../../utils/validation';
const AddTask = () => {
  const saveTask = async values => {
    try {
      const savedTasks = await AsyncStorage.getItem('tasks');
      let myTask = savedTasks ? JSON.parse(savedTasks) : [];
      myTask.push(values);
      await AsyncStorage.setItem('tasks', JSON.stringify(myTask));
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          id: uuid.v4(),
          description: 'Yazılım ile ilgili ders çalışılacak',
          title: 'Yazılım Dersi',
          startDate: null,
          endDate: null,
          category: null,
          status: status.ONGOING,
        }}
        validationSchema={taskSchema}
        onSubmit={values => saveTask(values)}>
        {({handleChange, handleSubmit, values, setFieldValue, errors}) => (
          <View>
            <Input
              size="large"
              style={{marginVertical: 10}}
              value={values.title}
              label={'Title'}
              placeholder=""
              onChangeText={handleChange('title')}
              status={errors.title ? 'danger' : 'basic'}
              caption={errors.title}
            />
            <Input
              multiline
              size="large"
              style={{marginVertical: 10}}
              value={values.description}
              label={'Description'}
              placeholder=""
              onChangeText={handleChange('description')}
              status={errors.description ? 'danger' : 'basic'}
              caption={errors.description}
            />
            <CustomDatePicker
              size="large"
              style={{marginVertical: 10}}
              date={values.startDate}
              label={'Start Date'}
              onSelectDate={date => setFieldValue('startDate', date)}
              status={errors.startDate ? 'danger' : 'basic'}
              caption={errors.startDate}
            />
            <CustomDatePicker
              size="large"
              style={{marginVertical: 10}}
              date={values.endDate}
              label={'End Date'}
              onSelectDate={date => setFieldValue('endDate', date)}
              status={errors.endDate ? 'danger' : 'basic'}
              caption={errors.endDate}
            />
            <RadioGroup
              selectedIndex={values.category}
              onChange={index => setFieldValue('category', index)}>
              <Radio status="success">Software</Radio>
              <Radio status="success">Design</Radio>
              <Radio status="success">Operation</Radio>
            </RadioGroup>
            <Button
              status="success"
              style={{marginTop: 30}}
              onPress={handleSubmit}>
              CREATE
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
});

//make this component available to the app
export default AddTask;
