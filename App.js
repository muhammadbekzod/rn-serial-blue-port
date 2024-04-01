import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ScanDevicesScreen from './components/ble/ScanDevicesScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PeripheralDetailsScreen from './components/ble/PeripheralDetailsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ScanDevices" component={ScanDevicesScreen} />
        <Stack.Screen
          name="PeripheralDetails"
          component={PeripheralDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
