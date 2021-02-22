import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View, StyleSheet, Image, TextInput,Button, ScrollView, TouchableHighlight, } from "react-native";
import AnimatedProgressWheel from 'react-native-progress-wheel';
import EditScreenInfo from '../components/EditScreenInfo';

function Otp() {
  return (
    <View style={styles.container}>
       <LinearGradient
        // Background Linear Gradient
        colors={['rgba(108,36,170,.75)', 'rgb(21,0,43)']}
        style={styles.background}
      />
      <View >
        <Text style={{fontSize:25, fontWeight:"bold",  color:'rgb(200,200,200)', textAlign:"center",marginBottom:20,}}>OTP Verfication</Text>
        <View style={{flex: 0.6, flexDirection: 'row', justifyContent: "space-evenly",}} >
        <TextInput maxLength={1} style={styles.Otp} />
        <TextInput maxLength={1} style={styles.Otp} />
        <TextInput maxLength={1} style={styles.Otp} />
        <TextInput maxLength={1} style={styles.Otp} />
        </View>
       
      </View>
        <TouchableHighlight   >
          <View style={styles.button}  >
            
            <View style={{ flexDirection:"row", alignItems: "center",marginTop:25 }}>
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
    Otp: {
      fontSize: 20,
      fontWeight:'600',
      alignContent: 'center',
      alignSelf: 'center',
      height:55,
      width:'20%',
      borderRadius:10,
      borderBottomWidth:2,
      borderBottomStartRadius:0,
      borderBottomEndRadius:0,
      borderColor:"rgb(200,200,200)",
      justifyContent: "center",
      textAlign: 'center',
      color:"rgb(200,200,200)",
      
    },
  
});

export default Otp;