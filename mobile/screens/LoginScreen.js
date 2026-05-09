import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function LoginScreen({ navigation }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {

    if(username === 'admin' && password === '1234'){

      navigation.navigate('Students');

    } else {

      alert('Invalid Login');
    }
  };

  return (

    <View style={styles.container}>

      <View style={styles.card}>

        <Text style={styles.title}>
          Attendance App
        </Text>

        <Text style={styles.subtitle}>
          Teacher Login
        </Text>

        <TextInput
          placeholder="Username"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={login}
        >

          <Text style={styles.buttonText}>
            Login
          </Text>

        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#f2f2f2',
    padding:20
  },

  card:{
    width:'100%',
    backgroundColor:'white',
    padding:25,
    borderRadius:20,
    elevation:8
  },

  title:{
    fontSize:32,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:10,
    color:'#007bff'
  },

  subtitle:{
    textAlign:'center',
    marginBottom:25,
    color:'gray',
    fontSize:16
  },

  input:{
    borderWidth:1,
    borderColor:'#ddd',
    marginBottom:15,
    padding:15,
    borderRadius:12,
    backgroundColor:'#fafafa'
  },

  button:{
    backgroundColor:'#007bff',
    padding:16,
    borderRadius:12,
    alignItems:'center'
  },

  buttonText:{
    color:'white',
    fontSize:18,
    fontWeight:'bold'
  }
});