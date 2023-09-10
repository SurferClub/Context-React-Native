import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { Context } from '../Global/Context'
import { useContext } from 'react';

function OtraPantalla({navigation}) {
    const {val,setVal,val1,setVal1} = useContext(Context)
    return (
      <View style={{flex:1,alignItems: 'center',justifyContent: 'center',backgroundColor:"#fff"}}>
        <View style={styles.container}>
            <Text>OtraPantalla</Text>
        </View>
        <View style={styles.container}>
            <Text>{val}</Text>
            <Text>{val1}</Text>
        </View>
        <View style={styles.container}>
             <Button title="Go back"
            onPress={()=> navigation.goBack()}
            >
            </Button>
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
      flex: 2,
      backgroundColor: '#fff',
      alignItems: 'center',
      
     justifyContent: 'center'
    },
})
  export default OtraPantalla;