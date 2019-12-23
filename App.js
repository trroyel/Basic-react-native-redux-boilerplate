/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const App = () => {
  return (
      <SafeAreaView>
        <Text style={styles.bold}>Text ss</Text>
        <Text style={styles.regular}>Text ss</Text>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bold: {
    fontFamily: 'semi-bold'
  },
  regular: {
    fontFamily: 'regular'
  }

});

export default App;
