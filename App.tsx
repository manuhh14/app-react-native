import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Styles } from './themes/Styles';
import { LoginScreen } from './screens/LoginScreen';
import { HomeScreen } from './screens/HomeScreen';

const App: React.FC = () => {
  return (
    <View style={Styles.container}>
      <LoginScreen/>
    </View>
  );
};
export default App;