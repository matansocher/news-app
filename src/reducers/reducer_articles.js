// import _ from 'lodash';
import { FETCH_ARTICLES_SUCESS, FETCH_ARTICLES_FAILED } from '../actions/types';

export default function (state = [], action) {
  // let newState = state;
  switch (action.type) {
    case FETCH_ARTICLES_SUCESS:
      return action.payload;
    case FETCH_ARTICLES_FAILED:
      return action.payload;
    default:
      return state;
  }
}
