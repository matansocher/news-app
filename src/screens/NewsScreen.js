import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, View, Text, Button, ScrollView } from 'react-native';
import { List, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash';
import { } from '../actions/CommonFunctions'

import NewsTopMenu from '../components/NewsTopMenu';
import ArticleItem from '../components/ArticleItem';
import WebWindow from '../components/WebWindow';
import CircularProgress from '../components/CircularProgress';

class NewsScreen extends Component {

  static navigationOptions = {
    title: 'News',
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="chat" size={30} color={tintColor} />;
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      loading: false,
      error: false
    }
  }

  componentDidMount() {
    this.fetchData();
    this.setTheme();
  }

  setTheme = async () => {
    // let theme = await AsyncStorage.getItem('isDarkTheme'); // boolean
    // console.log("theme: " +theme)
    let theme = true;
    this.props.actionChangeTheme(theme);
  }

  fetchData = () => {
    this.setState({ loading: true }, () => {
      this.props.actionFetchNews(
        ['country', 'il', 'category', 'general'],
        this.callbackSucess,
        this.callbackFailed);
    });
  }

  callbackSucess = () => {
    this.setState({ loading: false, error: '' });
    this.refs.newsScrollView.scrollTo({ x: 0, y: 0, animated: true });
  }

  callbackFailed = () => {
    this.setState({
      loading: false,
      error: 'Oops, something went wrong, please try again'
    }, () => {
      setTimeout(() => {
        this.setState({ error: '' })
      }, 4000)
    }
  );
  }

  openArticle = (url) => {

  }

  navigateToRoute = (route) => {
    this.props.navigation.navigate(route);
  }

  fetchNewsByCategory = (category) => {
    this.setState({ loading: true }, () => {
      this.props.actionFetchNews(
        ['country', 'il', 'category', category],
        this.callbackSucess,
        this.callbackFailed);
    })
  }

  renderError() {
    const { primaryColor, primaryBackgroundColor } = this.props.theme;
    return (
      <View style={{ backgroundColor: primaryBackgroundColor }}>
        <Text style={[styles.errorText, { color: primaryColor }]}>
          {this.state.error}
        </Text>
      </View>
    )
  }

  renderArticles() {
    if (_.isEmpty(this.props.articles)) {
      return (<View />);
    }
    return (
      this.props.articles.map(article => {
        return <ArticleItem key={article.url}
          article={article}
          theme={this.props.theme}
          openArticle={this.openArticle} />
      })
    );
  }

  render() {
    const { primaryColor, primaryBackgroundColor } = this.props.theme;
    return (
      <View style={[styles.container, { backgroundColor: primaryBackgroundColor }]}>

        <View style={[styles.headerContainer, { backgroundColor: primaryBackgroundColor }]}>
          <Text style={[styles.headerText, { color: primaryColor }]}>
            Daily News
          </Text>
        </View>

        <View style={styles.menuContainer}>
          <NewsTopMenu
            theme={this.props.theme}
            buttonAction={this.fetchNewsByCategory} />
        </View>

        <View style={styles.contentContainer}>
          <ScrollView ref='newsScrollView'>
            {this.state.loading ? <CircularProgress /> : <View />}
            {this.state.error !== '' ? this.renderError() : <View />}
            <List>
              {this.renderArticles()}
            </List>
          </ScrollView>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
  },
  headerContainer: {
    flex: 1,
    padding: 10
  },
  headerText: {
    fontSize: 40
  },
  menuContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 6
  },
  errorText: {
    padding: 20,
    fontSize: 25
  }
});

function mapStateToProps(state) {
  return {
    theme: state.theme,
    articles: state.articles
  };
}

export default connect(mapStateToProps, actions)(NewsScreen);