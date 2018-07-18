import React, { Component } from 'react';
import { View, WebView } from 'react-native';

const WebWindow = ({ url, style }) => {
  return (
    <View style={style}>
      <WebView
        source={{ uri: url }}
        style={{ flex: 1 }}
      />
    </View>
  );
}

export default WebWindow;
