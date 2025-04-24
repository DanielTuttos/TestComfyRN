import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

interface Props {
  onPress: () => void;
  text: string;
}

export const ButtonCustom: React.FC<Props> = ({onPress, text}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};
