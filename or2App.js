import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { authentication } from './screens/firebase';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import Py1Screen from './screens/Py1Screen';
import Py2Screen from './screens/Py2Screen';
import Py1SaleScreen, { totalSale, setTotal6 } from './screens/Py1SaleScreen';
import Py1StockScreen from './screens/Py1StockScreen';

const Stack = createNativeStackNavigator();

/*export default function App();  /*{
 /* useEffect(() => {
    // Set the value of totalSale to 100 when the app starts
    setTotal6(100);
  }, []); */

return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Py1" component={Py1Screen} />
            <Stack.Screen name="Py2" component={Py2Screen} />
            <Stack.Screen name="Py1Sale" component={Py1SaleScreen} />
            <Stack.Screen name="Py1Stock" component={Py1StockScreen} />
        </Stack.Navigator>
    </NavigationContainer>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
