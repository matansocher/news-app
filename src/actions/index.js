import { AsyncStorage } from 'react-native';
import _ from 'lodash';
import axios from 'axios';
import { NEWS_API_KEY, WEATHER_API_KEY } from '../config';
import {
  CHANGE_THEME,
  FETCH_ARTICLES_SUCESS,
  FETCH_ARTICLES_FAILED,
  FETCH_WEATHER_SUCESS,
  FETCH_WEATHER_FAILED,
} from './types';
import { lightTheme, darkTheme } from './CONSTANTS';
import { createAPIparams } from './CommonFunctions';


const NEWS_BASE_URL = `https://newsapi.org/v2/top-headlines?apiKey=${NEWS_API_KEY}`;
const WEATHER_BASE_URL = `http://api.apixu.com/v1/current.json?key=${WEATHER_API_KEY}&q=`;

//country=il 
//category=business entertainment general health science sports technology
//q=???
//page=1

export function actionChangeTheme(isDark) {
  return dispatch => {
    const newTheme = isDark ? darkTheme : lightTheme;
    // AsyncStorage.setItem('isDarkTheme', isDark || false); // save to async storage
    dispatch({
      type: CHANGE_THEME,
      payload: newTheme
    });
  }
}

export function actionFetchNews(parametersArray, callbackSucess, callbackFailed) {
  const parametersToURL = createAPIparams(parametersArray);
  return dispatch => {
    console.log(`${NEWS_BASE_URL}${parametersToURL}`)
    axios.get(`${NEWS_BASE_URL}${parametersToURL}`)
      .then(response => {
        const { articles } = response.data;
        dispatch({
          type: FETCH_ARTICLES_SUCESS,
          payload: _.orderBy(articles, 'publishedAt', 'desc')
        });
        callbackSucess();
      })
      .catch((error) => {
        console.log(error)
        dispatch({
          type: FETCH_ARTICLES_FAILED,
          payload: []
        });
        callbackFailed();
      });
  }
}

export function actionFetchWeather(query, callbackSucess, callbackFailed) {
  return dispatch => {
    axios.get(`${WEATHER_BASE_URL}${query}`)
      .then(response => {
        console.log(response)
        const { data } = response;
        dispatch({
          type: FETCH_WEATHER_SUCESS,
          payload: data
        });
        callbackSucess();
      })
      .catch((error) => {
        console.log(error)
        dispatch({
          type: FETCH_WEATHER_FAILED,
          payload: {}
        });
        callbackFailed();
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
