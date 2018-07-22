import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import moment from 'moment';
import _ from 'lodash';

const WeatherResults = ({ weather, theme }) => {
  if(_.isEmpty(weather) || !weather) {
    return null;
  }
  const { primaryColor, primaryBackgroundColor } = theme;
  const { name, region, country, localtime } = weather.location;
  const { temp_c, is_day } = weather.current;

  return (
    <View style={[styles.container, { backgroundColor: primaryBackgroundColor }]}>
      <Text style={{ color: primaryColor, fontSize: 40 }}>
        {name}, {region}, {country}
      </Text>
      <Text style={{ color: primaryColor, fontSize: 36 }}>
        {temp_c} &#8451;
      </Text>
      <Icon size={36} color={primaryColor}
        name={is_day === 1 ? "wb-sunny" : "brightness-3"}
      />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export default WeatherResults;