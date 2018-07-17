import { combineReducers } from 'redux';
import theme from './reducer_theme';
import articles from './reducer_articles';

const rootReducer = combineReducers({
  theme,
  articles
});

export default rootReducer;
