import React, { Component } from "react";
import { View, Image, StyleSheet,TextInput,Button, ScrollView, TouchableHighlight, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';


class Login extends Component {
  render() {
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
            source={require("../assets/images/logo192.png")}
          />
          <View style={{ flexDirection:"row", alignItems: "center"}}> 
           <Feather 
            name="user"
            color="rgb(200,200,200)"
            size={20}/>
            <TextInput
        style={styles.textbox}
        placeholder={'Username'}
      />
      </View>
      <View style={{ flexDirection:"row", alignItems: "center"}}>
      <Feather 
                        name="lock"
                        color="rgb(200,200,200)"
                        size={20}/>
      <TextInput
        style={styles.textbox}
        placeholder={'Password'}
        secureTextEntry={true}
      />
      </View>
        <View >
        <Button
          title={'Login'}
          color="rgb(25,50,254)"
          
          />
          </View>
          <TouchableHighlight onPress={this.onPress}  >
          <View style={styles.button} >
            <Text style={{color:"rgb(200,200,200)"}}>Forget Password?</Text>
          </View>
        </TouchableHighlight>
          </ScrollView>
        </View>
      </View>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  scr:{
  display: "flex",
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
    textAlign: "center",
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

export default Login;