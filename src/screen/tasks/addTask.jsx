//import liraries
import {View, Text, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import {Input, Button, Radio, RadioGroup} from '@ui-kitten/components';
import DatePicker from '../../components/uı/datePicker';
import {taskSchema} from '../../utils/validation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TASKS} from '../../utils/routes';
import {status} from '../../utils/constants';
import uuid from 'react-native-uuid';
// create a component
const AddTask = ({navigation}) => {
  const saveTask = async values => {
    try {
      await AsyncStorage.setItem('task', JSON.stringify(values));

      // console.log('başarılı');
      navigation.navigate(TASKS);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          id: uuid.v4(),
          title: 'Yazılım',
          description: 'Yazılım derslerine calis',
          startDate: null,
          endDate: null,
          category: 0,
          status: status.ONGOİNG,
        }}
        validationSchema={taskSchema}
        onSubmit={values => saveTask(values)}>
        {({handleChange, handleSubmit, values, setFieldValue, errors}) => (
          <View style={{flex: 1, padding: 15}}>
            <Input
              size="large"
              style={{marginVertical: 10}}
              label={'Title'}
              placeholder=""
              value={values.title}
              onChangeText={handleChange('title')}
              caption={errors.title}
              status={errors.title ? 'danger' : 'success'}
            />
            <Input
              multiline
              size="large"
              style={{marginVertical: 10}}
              label={'Description'}
              placeholder=""
              value={values.description}
              onChangeText={handleChange('description')}
              caption={errors.description}
              status={errors.description ? 'danger' : 'success'}
            />
            <DatePicker
              size="large"
              style={{marginVertical: 10}}
              label={'Start Date'}
              date={values.startDate}
              onSelectDate={date => setFieldValue('startDate', date)}
              caption={errors.startDate}
              status={errors.startDate ? 'danger' : 'success'}
            />
            <DatePicker
              size="large"
              style={{marginVertical: 10}}
              label={'End Date'}
              date={values.endDate}
              onSelectDate={date => setFieldValue('endDate', date)}
              caption={errors.endDate}
              status={errors.endDate ? 'danger' : 'success'}
            />
            <RadioGroup
              selectedIndex={values.category}
              onChange={index => setFieldValue('category', index)}>
              <Radio status="success">Software</Radio>
              <Radio status="success">Design</Radio>
              <Radio status="success">Operation</Radio>
            </RadioGroup>
            <Button
              style={{marginTop: 30}}
              onPress={handleSubmit}
              status="success">
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
