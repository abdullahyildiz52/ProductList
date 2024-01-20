import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { Card } from 'react-native-paper';
import { productList } from '../data/productList';

const productscreen = () => {
  return (
    <>
      <ScrollView style={{ paddingLeft: '5%', paddingRight: '5%' }}>
        {productList.map((item, index) => {
          return (
            <Card key={item.id}>
              <Card.Cover source={{ uri: item.image }} />
              <Card.Title
                titleStyle={{ fontSize: 24 }}
                title={item.name}
                subtitle={item.unitPrice}
              />
            </Card>
          );
        })}
      </ScrollView>
    </>
  );
};

export default productscreen;
