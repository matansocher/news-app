import React, { Component } from 'react';
import { View, WebView } from 'react-native';

const WebWindow = ({ url }) => {
  return (
    <View>
      <WebView
        source={{ uri: url }}
        style={{  }}
      />
    </View>
  );
}

export default WebWindow;
