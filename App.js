import 'react-native-gesture-handler';

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { ContextProvider } from './Global/Context'  

import Home from './components/Home'
import OtraPantalla from './components/OtraPantalla'
import Galeria from './components/Galeria'

/* const images = [
  require('./assets/favicon.png'), // Reemplaza con las rutas reales de tus imágenes
  require('./assets/image2.jpg'),
  require('./assets/image3.jpg'),
]; */

const Stack = createStackNavigator()

export default function App() {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <View style={styles.container}>
            {/* <Galeria images={images}></Galeria> */}
          </View >
          <Stack.Screen name="HomeScreen" component={Home}
          options={{ headerShown: false }}
          />
          <Stack.Screen name="OtraPantalla" component={OtraPantalla}/>
        </Stack.Navigator>
        </NavigationContainer>   
    </ContextProvider>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
