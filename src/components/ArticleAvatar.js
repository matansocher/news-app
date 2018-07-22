import React from 'react';
import { View } from 'react-native';
import { Avatar } from 'react-native-elements';

const ArticleAvatar = ({ uri, style }) => {
  uri = uri || 'http://www.globalmarine.co.uk/uploads/images/default-news-image.jpg';
  return (
    <View style={[style, styleTwo]}>
      <Avatar
        large
        rounded
        source={{ uri }}
      />
      {/* <Thumbnail source={{ uri }} style={style} /> */}
    </View>
  );
}

const styleTwo = {
  padding: 5
}

export default ArticleAvatar;