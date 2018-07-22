import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { getUpdatedTime } from '../actions/CommonFunctions';

import ArticleAvatar from './ArticleAvatar';
import DividerArticless from './DividerArticless';

const ArticleItem = ({ article, theme, openArticle }) => {
  const { title, description, url, urlToImage, publishedAt, source } = article;
  const { primaryColor, primaryBackgroundColor } = theme;

  articlePress = () => {
    console.log(url)
    openArticle(url);
  }

  return (
    <View>
      <View style={[styles.container, { backgroundColor: primaryBackgroundColor }]}>
        <ArticleAvatar uri={urlToImage} style={styles.avatarStyle} />
        <View style={styles.contentStyle}>
          <Text style={[styles.titleStyle, { color: primaryColor }]}>
            {title}
          </Text>
          <Text style={[styles.sourceAndTimeStyle, { color: primaryColor }]}>
            {`${source.name} - ${getUpdatedTime(publishedAt)}`}
          </Text>
          <Text style={[styles.descriptionStyle, { color: primaryColor }]}>
            {description}
          </Text>
          <TouchableOpacity style={styles.moreStyle} onPress={this.articlePress}>
            <Text style={{ fontSize: 10, color: primaryColor }}>
              Read more ...
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <DividerArticless color={primaryColor} />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 200,
    padding: 5,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 10,
  },
  contentStyle: {
    flex: 7,
  },
  avatarStyle: {
    flex: 2
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  descriptionStyle: {
    fontSize: 14,
    marginTop: 5,
  },
  sourceAndTimeStyle: {
    fontSize: 12,
    marginTop: 5,
  },
  moreStyle: {
    marginTop: 5,
  }
};

export default ArticleItem;