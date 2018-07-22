// import _ from 'lodash';
import { FETCH_WEATHER_SUCESS, FETCH_WEATHER_FAILED } from '../actions/types';

export default function (state = [], action) {
  // let newState = state;
  switch (action.type) {
    case FETCH_WEATHER_SUCESS:
      return action.payload;
    case FETCH_WEATHER_FAILED:
      return state;
    default:
      return state;
  }
}
