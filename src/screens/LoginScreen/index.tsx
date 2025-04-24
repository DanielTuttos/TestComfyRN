import React, {useState} from 'react';
import {
  Alert,
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import {TextInputCustom} from '../../components/TextInput';
import {HomeScreen} from '../HomeScreen';
const user = 'daniel';
const pass = '123456';

export const LoginScreen = () => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [viewHome, setViewHome] = useState(false);

  const handleLogin = () => {
    if (mail === user && password === pass) {
      setViewHome(true);
      return;
    }
    Alert.alert('Usuario o contraseña incorrectos');
  };

  return (
    <>
      {viewHome ? (
        <HomeScreen />
      ) : (
        <View style={styles.container}>
          <Text>LoginScreen</Text>
          <TextInputCustom
            value={mail}
            onChangeText={value => setMail(value)}
          />
          <TextInputCustom
            value={password}
            onChangeText={value => setPassword(value)}
            // keyboardType='num'
            isPassword
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};
