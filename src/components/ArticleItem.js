import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { getUpdatedTime } from '../actions/CommonFunctions';

import ArticleAvatar from './ArticleAvatar';

const ArticleItem = ({ article, theme, openArticle }) => {
  const { title, description, url, urlToImage, publishedAt } = article;
  const { primaryColor, primaryBackgroundColor } = this.props.theme;

  articlePress = () => {
    this.props.openArticle(url);
  }

  return (
    <View onPress={this.articlePress}>
      <View style={[styles.container, { backgroundColor: primaryBackgroundColor }]}>
        <ArticleAvatar avatar={urlToImage} />
        <View>
          <Text style={[styles.titleStyle, { color: primaryColor }]}>
            {title}
          </Text>
          <Text style={[styles.descriptionStyle, { color: primaryColor }]}>
            {description}
          </Text>
          <Text style={[styles.timeStyle, { color: primaryColor }]}>
            {getUpdatedTime(publishedAt)}
          </Text>
        </View>
      </View>
    </View>
  );
}

// "source": {
//   "id": "the-new-york-times",
//   "name": "The New York Times"
//   },
//   "author": "http://www.nytimes.com/by/christine-hauser",
//   "title": "Suspect Is Arrested After a String of Murders and Robberies in the Houston Area",
//   "description": "Jose Gilberto Rodriguez, 46, was arrested as the suspect in a series of attacks that included three murders, a home invasion and an assault on a city bus.",
//   "url": "https://www.nytimes.com/2018/07/17/us/houston-serial-killer-2018-jose-gilberto-rodriguez.html",
//   "urlToImage": "https://static01.nyt.com/images/2018/07/17/us/18xp-houston/18xp-houston-facebookJumbo.jpg",
//   "publishedAt": "2018-07-17T18:31:26Z"

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
  titleStyle: {
    fontWeight: 'bold'
  },
  descriptionStyle: {

  },
  timeStyle: {

  }
};

export default ArticleItem;