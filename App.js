/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';
import QRCode from 'react-native-qrcode-svg'

import {
  View,
  Button,
  TextInput,
  ImageBackground,
  StyleSheet
} from 'react-native';



const App = () => {
 
  const [input,setInput]=useState("");
  const [qrValue,setQrValue]=useState("");

  return (
   <View style={{flex:1}} >
       <ImageBackground 
       source={require('./image/nathan-dumlao-pnmRtTHWqDM-unsplash.jpg')} 
       resizeMode="cover"
        style={{flex:1,justifyContent:"center",alignItems:"center"}}>
     <QRCode  
     style={{borederWith:1,borderColor:"dark"}}
     value={qrValue ? qrValue :'NA'}
     size={200}
     bgcolor="#000"
     fgcolor="#fffr"  
     ></QRCode>
    <TextInput
    placeholder='Generate QrCode'
    placeholderTextColor='white'
    style={{color:'white',padding:10,borderWidth:1,borderColor:'#ddd',width:200,margin:20,borderRadius:5}} 
    onChangeText={(text)=>(setInput(text))}/>
    <Button  color="#fff" style={{}} title='QR Code' onPress={()=>(setQrValue(input))}/>
    </ImageBackground>
   </View>
  );
};

const styles=StyleSheet.create({
  input:{
    padding:10,
    margin:5,
    borederWith:1,
    borderColor:"#ddd",
    
  },
 
})


export default App;
