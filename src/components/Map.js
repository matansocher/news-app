import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { MapView } from 'expo';
import CircularProgress from '../components/CircularProgress';


class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 32.7950945,
        longitude: 34.9900994,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      mapLoaded: false
    }
  }

  componentDidMount() {
    this.setState({ mapLoaded: true });
  }

  onRegionChangeComplete = (region) => {
    this.setState({ region });
  }

  fetchWeatherByLocation = () => {
    const { lat, lon } = this.state.region;
    this.props.fetchWeather(`${lat},${lon}`);
  }

  render() {
    if (!this.state.mapLoaded) {
      return (
        <View style={{ flex: 6, justifyContent: 'center' }}>
          <CircularProgress />
        </View>
      )
    }

    return (
      <View>
        <MapView
          style={{ flex: 1 }}
          region={this.state.region}
          onRegionChangeComplete={this.onRegionChangeComplete}
        />
        <View style={styles.mapButtonContainer}>
          <Button
            title="Search"
            onPress={this.fetchWeatherByLocation}
            color='white'
            titleStyle={styles.textStyle}
            buttonStyle={[styles.buttonStyle, {}]} />
        </View>
      </View>
    );
  }
}

const styles = {
  mapButtonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 0,
    left: 0
  },
}

export default Map;
