import React from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { getCategoriesArray, getIconByCategory } from '../actions/CommonFunctions';

const NewsTopMenu = ({ theme, buttonAction }) => {

  const { primaryColor, primaryBackgroundColor } = theme;

  const renderButtons = () => {
    return (
      getCategoriesArray().map((category) => {
        return (
          <View key={category}>
            <TouchableOpacity
              onPress={() => buttonAction(category)}
              style={styles.buttonContainer}>

              <Icon size={20} color={primaryColor} style={styles.iconStyle}
                name={getIconByCategory(category)}
              />

              <Text style={[styles.textStyle, { color: primaryColor }]}>
                {category}
              </Text>

            </TouchableOpacity>
          </View>

          
        )
      })
    )
  }

  return (
    <View style={[styles.container, { backgroundColor: primaryBackgroundColor }]}>

      <View style={styles.backArrowContainer}>
        <Icon size={20} color={primaryColor} style={styles.iconStyle}
          name={"navigate-before"}
        />
      </View>

      <View style={styles.scrollContainer}>
        <ScrollView horizontal>
          {renderButtons()}
        </ScrollView>
      </View>

      <View style={styles.nextArrowContainer}>
        <Icon size={20} color={primaryColor} style={styles.iconStyle}
          name={"navigate-next"}
        />
      </View>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 5
  },
  buttonContainer: {
    flexDirection: 'row',
    height: 40,
    padding: 5,
    alignItems: 'center'
  },
  textStyle: {
    flex: 4,
    fontSize: 20,
    marginLeft: 4
  },
  iconStyle: {
    flex: 1
  },
  scrollContainer: {
    flex: 14
  },
  backArrowContainer: {
    flex: 1,
    top: 10
  },
  nextArrowContainer: {
    flex: 1,
    top: 10
  },
};

export default NewsTopMenu;
