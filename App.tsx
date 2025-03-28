import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Styles } from './themes/Styles';

const App: React.FC = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>¡Hola, React Native!</Text>
    </View>
  );
};
export default App;