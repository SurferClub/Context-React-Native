import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { ContextProvider } from './Global/Context'  

import Home from './components/Home'
import OtraPantalla from './components/OtraPantalla'

const Stack = createStackNavigator()

export default function App() {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={Home}
          options={{ headerShown: false }}
          />
          <Stack.Screen name="OtraPantalla" component={OtraPantalla}/>
        </Stack.Navigator>
        </NavigationContainer>   
    </ContextProvider>
      );
}

