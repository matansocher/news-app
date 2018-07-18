import { AsyncStorage } from 'react-native';
import _ from 'lodash';
import { API_KEY } from '../config';
import {
  CHANGE_THEME,
  FETCH_ARTICLES_SUCESS,
  FETCH_ARTICLES_FAILED
} from '../actions/types';
import { lightTheme, darkTheme } from '../CONSTANTS';
import { createAPIparams } from './CommonFunctions';


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

export function actionFetchNews(parametersArray, callbackSucess, callbackFailed) {
  const parametersToURL = createAPIparams(parametersArray);
  return dispatch => {
    axios.get(`${BASE_URL}${parametersToURL}`)
      .then(response => {
        const data = response.json().then((data) => {
          dispatch({
            type: FETCH_ARTICLES_SUCESS,
            payload: orderBy(data.articles, 'publishedAt', 'desc')
          });
          callbackSucess();
        })
      }).catch((error) => {
        dispatch({
          type: FETCH_ARTICLES_FAILED,
          payload: []
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
