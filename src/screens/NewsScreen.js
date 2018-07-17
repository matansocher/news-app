import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, View, Text, Button, ScrollView } from 'react-native';
import { List } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import _ from 'lodash';
import {  } from '../actions/CommonFunctions'

import ArticleItem from '../components/ArticleItem';
import WebWindow from '../components/WebWindow';
import CircularProgress from '../components/common/CircularProgress';

class NewsScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      loading: false
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

  fetchData = (uid) => {
    this.setState({ loading: true }, () => {
      this.props.actionFetchNews(() => {
        this.setState({ loading: false });
      });
    });
  }

  openArticle = (url) => {
    
  }

  navigateToRoute = (route) => {
    this.props.navigation.navigate(route);
  }

  renderArticles() {
    if (_.isEmpty(this.props.articles) || this.state.loading) {
      return (<CircularProgress />);
    }
    return (
      this.props.articles.map(contact => {
        return <ArticleItem key={contact.info.email}
          article={article}
          theme={this.props.theme}
          openArticle={this.openArticle} />
      })
    );
  }

  render() {
    const { primaryBackgroundColor } = this.props.theme;
    return (
      <View style={[styles.container, { backgroundColor: primaryBackgroundColor }]}>
        <ScrollView>
          {this.state.loading ? <CircularProgress /> : <View />}
          <List>
            {this.renderArticles()}
          </List>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
  }
});

function mapStateToProps(state) {
  return {
    theme: state.theme,
    articles: state.articles
  };
}

export default connect(mapStateToProps, actions)(NewsScreen);