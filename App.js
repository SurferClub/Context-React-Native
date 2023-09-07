import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {ContextProvider, Context} from './Global/Context'  
import { useContext } from 'react';

function HomeScreen({navigation}) {
  const {val,setVal,val1,setVal1} = useContext(Context)

  return (
    <View style={styles.container}>
      
      <Text style={styles.containerText}>
        HomeScreen</Text>
      
      <Text>{val}</Text>
      <Text>{val1}</Text>
      <View style={{flexDirection: 'row'}}>
      <Button title="otra pantalla"
      onPress={()=> navigation.navigate('OtraPantalla')}
      />
      <Button 
         color="#f194ff" 
        title='Incremento' 
        onPress={()=>{
          setVal(val + 1)
          setVal1(val1 + 1)
        }}/>
      </View>
    </View>
  )
}

function OtraPantalla({navigation}) {
  const {val,setVal,val1,setVal1} = useContext(Context)
  return (
    <View style={{flex:1,alignItems: 'center',justifyContent: 'center'}}>
      <Text>HomeScreen</Text>
      <Text>{val}</Text>
      <Text>{val1}</Text>
      <Button title="Go back"
      onPress={()=> navigation.goBack()}
      >
      </Button>
    </View>
  )
}

const Stack = createStackNavigator()

export default function App() {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}
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
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  containerText:{
    fontSize: 22,
    margin:20,
    paddingTop:170,
  }
  ,
  button:{
    paddingVertical: 22,
    borderRadius: 4,
    backgroundColor: 'black',
    alignItems: 'space-between',
    backgroundColor: 'black',
  }
});
