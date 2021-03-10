
import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './src/navigator/MainStackNavigator';
import { Provider } from 'react-redux';
import store from './src/store/configureStore'


const App= ()=> {
  return (
  <Provider store={store}> 
    <NavigationContainer >
    <SafeAreaView style={{flex:1}}>
      <MainStackNavigator/>  
    </SafeAreaView>
    </NavigationContainer>
    </Provider>
  );
};

export default App;
