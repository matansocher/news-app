import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash';
import { } from '../actions/CommonFunctions'

import Map from '../components/Map';
import WeatherResults from '../components/WeatherResults';
import WeatherTopMenu from '../components/WeatherTopMenu';
import CircularProgress from '../components/CircularProgress';
import { Button } from 'native-base';

class WeatherScreen extends Component {

  static navigationOptions = {
    title: 'Weather',
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="chat" size={30} color={tintColor} />;
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      loading: false,
      error: '',
      results: false
    }
  }

  componentDidMount() {
    this.setTheme();
  }

  setTheme = async () => {
    // let theme = await AsyncStorage.getItem('isDarkTheme'); // boolean
    // console.log("theme: " +theme)
    let theme = true;
    this.props.actionChangeTheme(theme);
  }

  callbackSucess = () => {
    this.setState({ loading: false, error: '', results: true })
  }

  callbackFailed = () => {
    this.setState({
      loading: false,
      error: 'Oops, something went wrong, please try again'
    });
  }

  navigateToRoute = (route) => {
    this.props.navigation.navigate(route);
  }

  setRegion = (region) => {
    this.setState({ region });
  }

  fetchWeather = (query) => {
    console.log(query)
    this.setState({ loading: true }, () => {
      this.props.actionFetchWeather(
        query, this.callbackSucess, this.callbackFailed);
    })
  }

  // fetchWeatherByCity = (city) => {
  //   console.log(city)
  //   this.setState({ loading: true }, () => {
  //     this.props.actionFetchWeather(
  //       city, this.callbackSucess, this.callbackFailed);
  //   })
  // }

  // fetchWeatherByLatlng = (latlng) => {
  //   console.log(latlng)
  //   this.setState({ loading: true }, () => {
  //     this.props.actionFetchWeather(
  //       latlng, this.callbackSucess, this.callbackFailed);
  //   })
  // }

  renderError() {
    const { primaryColor, primaryBackgroundColor } = this.props.theme;
    return (
      <View style={{ backgroundColor: primaryBackgroundColor }}>
        <Text style={[styles.errorText, { color: primaryColor }]}>
          {this.state.error}
          <Icon name="mood-bad" size={30} color={primaryColor} />
        </Text>
      </View>
    )
  }

  render() {
    const { primaryColor, primaryBackgroundColor } = this.props.theme;
    return (
      <View style={[styles.container, { backgroundColor: primaryBackgroundColor }]}>

        {this.state.loading ? <CircularProgress /> : <View />}

        <View style={styles.menuContainer}>
          <WeatherTopMenu
            theme={this.props.theme}
            fetchWeather={this.fetchWeather} />
        </View>

        {this.state.error !== '' ? this.renderError() : <View />}

        {this.state.results ?
          (<View style={styles.resultsContainer}>
            <WeatherResults
              weather={this.props.weather}
              theme={this.props.theme} />
          </View>) : null}



        <View style={styles.mapContainer}>
          <Map fetchWeather={this.fetchWeather} />
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
  menuContainer: {
    flex: 1,
  },
  resultsContainer: {
    flex: 4,
    padding: 5
  },
  mapContainer: {
    flex: 6,
    padding: 15,
    // borderWidth: 3,
    // borderColor: 'white'
  },
  errorText: {
    padding: 20,
    fontSize: 25
  }
});

function mapStateToProps(state) {
  return {
    theme: state.theme,
    weather: state.weather
  };
}

export default connect(mapStateToProps, actions)(WeatherScreen);