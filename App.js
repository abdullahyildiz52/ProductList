import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

import ProductScreen from './screens/ProductScreen';

export default function App() {
  return (
    <SafeAreaView>
      <ProductScreen />
    </SafeAreaView>
  );
}