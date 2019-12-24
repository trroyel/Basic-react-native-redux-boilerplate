import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { screensEnabled } from 'react-native-screens';

import store from './src/store/reducers/';
import MainNavigator from './src/navigation/';
import Colors from './src/constants/Colors';

const App = () => {
  screensEnabled();
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor={Colors.statusbar}/>
        <MainNavigator />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
