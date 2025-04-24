import React from 'react';
import {Image, Text, View} from 'react-native';
import {ProductType} from '../../types/typeProduct';
import {styles} from './styles';

interface Props {
  product: ProductType;
}

export const CardProducts: React.FC<Props> = ({product}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>{product.title}</Text>
      <View style={styles.content}>
        <Image source={{uri: product.image}} style={styles.image} />
        <View>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </View>
    </View>
  );
};
