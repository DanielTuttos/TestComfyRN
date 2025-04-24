import React, {useState} from 'react';
import {Alert, Image, Text, View} from 'react-native';
import {styles} from './styles';
import {TextInputCustom} from '../../components/TextInput';
import {HomeScreen} from '../HomeScreen';
import {ButtonCustom} from '../../components/Button';

const user = 'daniel';
const pass = '123456';

export const LoginScreen = () => {
  const [mail, setMail] = useState('');
  const [errorMail, setErrorMail] = useState('');
  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [viewHome, setViewHome] = useState(false);

  const handleLogin = () => {
    const errors = {
      mail: !mail ? 'El usuario es obligatorio' : '',
      password: !password ? 'La contraseña es obligatoria' : '',
    };

    setErrorMail(errors.mail);
    setErrorPassword(errors.password);

    if (errors.mail || errors.password) return;

    if (mail === user && password === pass) {
      setViewHome(true);
    } else {
      Alert.alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <>
      {viewHome ? (
        <HomeScreen />
      ) : (
        <View style={styles.container}>
          <Text style={styles.textTitle}>Inicio de sesión</Text>
          <Image
            source={require('../../assets/login.png')}
            style={styles.image}
          />
          <TextInputCustom
            value={mail}
            onChangeText={value => setMail(value)}
            placeHolder="Ingrese Usuario"
            errorMessage={errorMail}
          />
          <TextInputCustom
            value={password}
            onChangeText={value => setPassword(value)}
            // keyboardType='num'
            isPassword
            placeHolder="Ingrese Contraseña"
            errorMessage={errorPassword}
          />
          <ButtonCustom onPress={handleLogin} text="Login" />
        </View>
      )}
    </>
  );
};
