import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView, StatusBar } from 'react-native';
import { screensEnabled } from 'react-native-screens';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './src/store/';
import MainNavigator from './src/navigation/';
import Colors from './src/constants/Colors';

const App = () => {
  screensEnabled();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar backgroundColor={Colors.statusbar} />
          <MainNavigator />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;