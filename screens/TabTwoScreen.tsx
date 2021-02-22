import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View, StyleSheet, Image, TextInput,Button, ScrollView, TouchableHighlight, } from "react-native";
import AnimatedProgressWheel from 'react-native-progress-wheel';
import EditScreenInfo from '../components/EditScreenInfo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Otp from './Otp';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TwoScreen" component={TwoScreen} options={{headerShown: false}}/>
      <Stack.Screen name="OtpScreen" component={Otp} options={{headerShown: false}} />
     </Stack.Navigator>
  );
}

export default function TabTwoScreen() {
  return (
    <NavigationContainer independent={true}>
      <MyStack />
    </NavigationContainer>
  );
}


 function TwoScreen({ navigation }) {
  return (
    <View style={styles.container}>
       <LinearGradient
        // Background Linear Gradient
        colors={['rgba(108,36,170,.75)', 'rgb(21,0,43)']}
        style={styles.background}
      />
      <View style={styles.box}>
        <View style={{flex: 1, flexDirection: 'column', justifyContent: "space-around",}} >
        <ScrollView style={styles.scr} showsVerticalScrollIndicator={false} >
          <Image
            style={{ 
              resizeMode: "contain",
              height: 250,
              width: 250,
              
            }}
            source={require("../assets/images/reg.png")}
          />
          <View style={{ flexDirection:"row", alignItems: "center"}}> 
          <Ionicons
                        name="person-circle-outline"
                        color="rgb(200,200,200)"
                        size={20}/>
            <TextInput
        style={styles.textbox}
        placeholder={'Username'}
      />
      </View>
      <View style={{ flexDirection:"row", alignItems: "center"}}>
      <Ionicons
                        name="lock-closed-outline"
                        color="rgb(200,200,200)"
                        size={20}/>
      <TextInput
        style={styles.textbox}
        placeholder={'Password'}
        secureTextEntry={true}
      />
      </View>
      <View style={{ flexDirection:"row", alignItems: "center"}}>
      <Ionicons
                        name="lock-closed-outline"
                        color="rgb(200,200,200)"
                        size={20}/>
      <TextInput
        style={styles.textbox}
        placeholder={'Re-enter Password'}
        secureTextEntry={true}
      />
      </View>
      <View style={{ flexDirection:"row", alignItems: "center"}}>
      <Ionicons
                        name="phone-portrait-outline"
                        color="rgb(200,200,200)"
                        size={20}/>
      <TextInput
        style={styles.textbox}
        placeholder={'Phone Number'}
              
      />
      </View>
      <View style={{ flexDirection:"row", alignItems: "center"}}>
      <Ionicons
                        name="mail-outline"
                        color="rgb(200,200,200)"
                        size={20}/>
      <TextInput
        style={styles.textbox}
        placeholder={'Email_ID'}
        
      />
      </View>
        <TouchableHighlight  onPress={() => navigation.navigate('OtpScreen') } >
          <View style={styles.button}  >
            
            <View style={{ flexDirection:"row", alignItems: "center" }}>
          <AnimatedProgressWheel

    progress={100}
    animateFromValue={0}
    duration={5000}
    color={'rgb(108,36,170)'}
    fullColor={'rgb(25,50,254)'}
    size={75}
    width={10}
    backgroundColor={'rgb(21,0,43)'}/>
      <Ionicons style={{position: "absolute", justifyContent: "center",}}
                        name="arrow-forward-outline"
                        color="rgb(25,50,254)"
                        size={65}/>
         </View></View>
        </TouchableHighlight>
          </ScrollView>
        </View>
      </View>
       </View>
        
        
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  scr:{
    display: "flex",
    },
   
    
    box:{
      backgroundColor: "rgba(21,0,43,.2)", 
      borderRadius:25, 
      padding:25,
      marginTop:60,
      marginBottom: 10,
      
    },
    textbox: {
      marginBottom: 10,
      padding: 10,
      justifyContent: "space-around",
      alignItems: "center",
      textAlign: "left",
      borderBottomWidth:1,
      borderBottomColor: "rgb(200,200,200)",
      color:"rgb(200,200,200)",
      fontSize:20,
      fontWeight: "bold",
      width: 250,
      
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: "100%",
      color: "rgb(21,0,43)"
    },
    button: {
      alignItems: "center",
      margin:10, 
    },
  
});
