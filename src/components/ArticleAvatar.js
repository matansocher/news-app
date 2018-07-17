import React from 'react';
import { View } from 'react-native';
import { Thumbnail } from 'native-base';

const ArticleAvatar = ({ avatar }) => {

  return (
    <View style={style}>
      <Thumbnail source={avatar} style={style} />
    </View>
  );
}

const style ={
  padding: 5
}

export default ArticleAvatar;