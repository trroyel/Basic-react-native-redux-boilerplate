/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { Provider } from 'react-redux';
import { screensEnabled } from 'react-native-screens';

import store from './src/store/reducers/';

const App = () => {
  screensEnabled();
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Text style={styles.bold} >
          Hi, from text
          </Text>
      </SafeAreaView>
    </Provider>
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
