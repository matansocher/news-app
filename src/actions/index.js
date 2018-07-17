import { AsyncStorage } from 'react-native';
import _ from 'lodash';
import { API_KEY } from '../config';
import {
  CHANGE_THEME,
  FETCH_ARTICLES
} from '../actions/types';
import { lightTheme, darkTheme } from '../CONSTANTS';


const BASE_URL = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`;

//country=il 
//category=business entertainment general health science sports technology
//q=???
//page=1

export function actionChangeTheme(isDark) {
  console.log(isDark)
  return dispatch => {
    const newTheme = isDark ? darkTheme : lightTheme;
    // AsyncStorage.setItem('isDarkTheme', isDark || false); // save to async storage
    dispatch({
      type: CHANGE_THEME,
      payload: newTheme
    });
  }
}

export function actionFetchNews(callback) {
  let friendsArray = [];
  return dispatch => {
    fire.database().ref(`friendships/${uid}`).once('value', friendsSnap => {
      const friends = friendsSnap.val() || {};
      Object.keys(friends).map((objectkey) => {
        const { key, lastMessage, pinned, isUnraed, isTyping } = friends[objectkey];
        const friend = { key, lastMessage, pinned, isUnraed, isTyping };
        fire.database().ref(`users/${key}`).once('value', friendSnap => {
          friend.info = friendSnap.val();
          // console.log(friend)
          friendsArray.push(friend);
        });
        return friend;
      });
    }).then(() => {
      dispatch({
        type: FETCH_ARTICLES,
        payload: articles
      });
      callback();
    });
  }
}

// async function getMoviesFromApi() {
//   try {
//     let response = await fetch(
//       'https://facebook.github.io/react-native/movies.json'
//     );
//     let responseJson = await response.json();
//     return responseJson.movies;
//   } catch (error) {
//     console.error(error);
//   }
// }
