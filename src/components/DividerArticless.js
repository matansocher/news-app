import React from 'react';
import { View, Dimensions } from 'react-native';

const DividerArticless = ({ color }) => {
  const width = Dimensions.get('window').width;
  return (
    <View style={{ backgroundColor: color, width: width, height: 1 }} />
  )
}

export default DividerArticless;