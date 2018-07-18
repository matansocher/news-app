import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';

import store from './src/store';

import NewsScreen from './src/screens/NewsScreen';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}> 
        <View style={styles.container}>
          <NewsScreen />
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
