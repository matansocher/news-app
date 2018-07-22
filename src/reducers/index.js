import { combineReducers } from 'redux';
import theme from './reducer_theme';
import articles from './reducer_articles';
import weather from './reducer_weather';

const rootReducer = combineReducers({
  theme,
  articles,
  weather
});

export default rootReducer;
