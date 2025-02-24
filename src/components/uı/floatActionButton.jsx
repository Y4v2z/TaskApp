//import liraries
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Add} from 'iconsax-react-native';
import {ADDTASK} from '../../utils/routes';

// create a component
const FloatActionButton = props => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Add size="32" color="#fff" />
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
    width: 70,
    height: 70,
    borderRadius: 100,
    position: 'absolute',
    bottom: 40,
    right: 20,
    backgroundColor: '#2ccce4',
  },
});

//make this component available to the app
export default FloatActionButton;
