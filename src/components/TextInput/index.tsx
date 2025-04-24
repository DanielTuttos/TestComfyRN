import React from 'react';
import {Text, View, TextInput, KeyboardTypeOptions} from 'react-native';
import {styles} from './styles';

interface Props {
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: KeyboardTypeOptions | undefined;
  isPassword?: boolean;
  placeHolder?: string;
  errorMessage?: string;
}

export const TextInputCustom: React.FC<Props> = ({
  value,
  onChangeText,
  keyboardType = 'default',
  isPassword = false,
  placeHolder,
  errorMessage,
}) => {
  return (
    <>
      <TextInput
        keyboardType={keyboardType}
        style={styles.container}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isPassword}
        placeholder={placeHolder}
      />
      {errorMessage && (
        
          <Text style={styles.textError}>{errorMessage}</Text>
        
      )}
    </>
  );
};
