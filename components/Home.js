
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import {ContextProvider, Context} from '../Global/Context'
import { useContext } from 'react';

function Home({navigation}) {
    const {val,setVal,val1,setVal1} = useContext(Context)
  
    return (
      <View style={styles.container}>
        <View style={{flex:2,alignItems: 'center', 
              justifyContent: 'center', }} >
          <Text style={styles.containerText}>
            HomeScreen
          </Text>
        </View>
        <View style={{flex:2,alignItems: 'center', 
              justifyContent: 'center', }}>
          <Text style={styles.containerText}>{val}</Text>
          <Text style={styles.containerText}>{val1}</Text>
        </View>
        <View style={{flex:2,alignItems: 'center', 
      justifyContent: 'center', }}>
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
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
       flexDirection: 'column',
     /*  justifyContent: 'space-between', */
    },
    container2: {
      
      alignItems: 'center', 
      justifyContent: 'center', 
    },
    containerText:{
      fontSize: 22,
      margin:20,
      /* paddingTop:170, */
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
   

  export default Home;