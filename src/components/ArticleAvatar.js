import React from 'react';
import { View } from 'react-native';
import { Thumbnail } from 'native-base';

const ArticleAvatar = ({ avatar, style }) => {

  return (
    <View style={[style, styleTwo]}>
      <Thumbnail source={avatar} style={style} />
    </View>
  );
}

const styleTwo ={
  padding: 5
}

export default ArticleAvatar;