// import _ from 'lodash';
import { FETCH_ARTICLES } from '../actions/types';

export default function (state = [], action) {
  // let newState = state;
  switch (action.type) {
    case FETCH_ARTICLES:
      return action.payload;
    default:
      return state;
  }
}
