import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  Text,
  View,
} from 'react-native';
import {styles} from './styles';
import {useGetProducts} from '../../api/useGetProducts';
import {CardProducts} from '../../components/CardProducts';

export const HomeScreen = () => {
  const {error, loading, result} = useGetProducts();

  useEffect(() => {
    if (error) {
      Alert.alert('Error', error);
    }
  }, [error]);

  return (
    <View style={styles.container}>
      {loading ? (
        <>
          <ActivityIndicator size="large" color="#2989ef" />
          <Text style={styles.textLoading}>Cargando...</Text>
        </>
      ) : (
        <FlatList
          data={result}
          renderItem={({item}) => <CardProducts product={item} />}
        />
      )}
    </View>
  );
};
