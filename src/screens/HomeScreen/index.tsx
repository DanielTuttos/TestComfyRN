import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, View} from 'react-native';

export const HomeScreen = () => {
  const [products, setproducts] = useState<any>([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      console.log('data: ', {data});
      setproducts(data);
    } catch (error) {
      console.log('error: ', {error});
    }
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FlatList
        data={products}
        renderItem={({item}) => (
          <View>
            <Text>{item.title}</Text>
            <Image source={{uri: item.image}} style={{width: 100, height: 100}} />
          </View>
        )}
      />
      <Text>HomeScreen</Text>
    </View>
  );
};
