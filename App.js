import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';

import store from './src/store';

import { createBottomTabNavigator } from 'react-navigation';

import NewsScreen from './src/screens/NewsScreen';
import WeatherScreen from './src/screens/WeatherScreen';
import SettingsScreen from './src/screens/SettingsScreen';

export default class App extends Component {
  render() {

    const MainNavigator = createBottomTabNavigator({
      Weahter: { screen: WeatherScreen },
      News: { screen: NewsScreen },
      Settings: { screen: SettingsScreen }
    }, {
      navigationOptions: {
        // tabBarVisible: false
      },
      // lazyLoad: true
    });

    return (
      <Provider store={store}> 
        <View style={styles.container}>
          <MainNavigator />>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
