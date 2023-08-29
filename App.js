import 'react-native-reanimated'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/stack'
import {ContextProvider, Context} from './Global/Context'  

function HomeScreen({navigation}) {
  return (
    <View style={{flex:1,alignItems: 'center',justifyContent: 'center'}}>
      <Text>HomeScreen</Text>
      <Button title="otra pantalla"
      onPress={()=> navigation.navigate('otra Pantalla')}
      >
      </Button>
    </View>
  )
}

function OtraPantalla({navigation}) {
  return (
    <View style={{flex:1,alignItems: 'center',justifyContent: 'center'}}>
      <Text>HomeScreen</Text>
      <Button title="Go back"
      onPress={()=> navigation.goBack()}
      >
      </Button>
    </View>
  )
}

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen
          }/>
          <Stack.Screen name="Otra pantalla" component={OtraPantalla}/>
        </Stack.Navigator>
        </NavigationContainer>   
    </ContextProvider>
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
