//import liraries
import * as React from 'react';
import {ApplicationProvider} from '@ui-kitten/components';
import {NavigationContainer} from '@react-navigation/native';
import * as eva from '@eva-design/eva';
import RootNavigator from './src/router/rootNavigator';

// create a component
const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ApplicationProvider>
  );
};

export default App;
