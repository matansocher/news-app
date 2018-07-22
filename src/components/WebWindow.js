import React, { Component } from 'react';
import { View, WebView } from 'react-native';

const WebWindow = ({ url, style }) => {
  return (
    <WebView
      source={{ uri: url }}
      style={[style, { flex: 1 }]}
    />
  );
}

export default WebWindow;
