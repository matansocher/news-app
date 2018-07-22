import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

class WeatherTopMenu  extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }

  handleChangeSearchTerm = searchTerm => {
    this.setState({ searchTerm });
  }

  approveSearch = () => {
    this.props.fetchWeather(this.state.searchTerm);
  }
  
  render() {
    const { primaryColor, primaryBackgroundColor } = this.props.theme;
    return (
      <View style={[styles.container, { backgroundColor: primaryBackgroundColor }]}>

        <View style={[styles.headerContainer, { backgroundColor: primaryBackgroundColor }]}>
          <Text style={[styles.headerText, { color: primaryColor }]}>
            Weather
          </Text>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInputStyle}
              placeholder="Search City"
              placeholderTextColor={primaryColor}
              onChangeText={this.handleChangeSearchTerm}
            />
          </View>

          <View style={styles.buttonContainer}>
            <Button
              title="Search"          
              onPress={this.approveSearch}
              color='white'
              style={styles.textStyle}
              buttonStyle={[styles.buttonStyle, {}]} />
          </View>
        </View>

      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    padding: 5
  },
  headerContainer: {
    flex: 1,
    padding: 10
  },
  headerText: {
    fontSize: 40
  },
  contentContainer: {
    flex: 6,
    flexDirection: 'row',
    padding: 5
  },
  inputContainer: {
    flex: 1,
    padding: 5
  },
  buttonContainer: {
    flex: 1,
    padding: 5
  },
  textInputStyle: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    fontSize: 20,
    padding: 8
  },
  textStyle: {
    
  }
};

export default WeatherTopMenu;
