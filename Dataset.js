import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const ProductList = [
  { id: 1, name: 'Ürün 1', image: 'image1.jpg', unitPrice: 10.99 },
  { id: 2, name: 'Ürün 2', image: 'image2.jpg', unitPrice: 19.99 },
  { id: 3, name: 'Ürün 3', image: 'image3.jpg', unitPrice: 25.99 },
  { id: 4, name: 'Ürün 4', image: 'image4.jpg', unitPrice: 14.99 },
  { id: 5, name: 'Ürün 5', image: 'image5.jpg', unitPrice: 12.99 },
  { id: 6, name: 'Ürün 6', image: 'image6.jpg', unitPrice: 8.99 },
];

const ProductListComponent = () => {
  const renderItem = ({ item }) => (
    <Card>
      <Card.Cover source={{ uri: item.image }} />
      <Card.Content>
        <Title>{item.name}</Title>
        <Paragraph>Price: ${item.unitPrice.toFixed(2)}</Paragraph>
      </Card.Content>
    </Card>
  );

  return (
    <View>
      <FlatList
        data={ProductList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ProductListComponent;
