import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Provider } from 'react-redux';
import { screensEnabled } from 'react-native-screens';

import store from './src/store/reducers/';
import MainNavigator from './src/navigation/';

const App = () => {
  screensEnabled();
  return (
    <Provider store={store}>
      <SafeAreaView 
        style={{ flex: 1 }}>
        <MainNavigator />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
