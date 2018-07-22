import _ from 'lodash';
import moment from 'moment';

export function createAPIparams(parametersArray) {
  let parametersToURL = '';
  if (_.isEmpty(parametersArray) || !parametersArray) {
    return parametersToURL;
  }
  for (let i = 0; i < parametersArray.length; i = i + 2) {
    parametersToURL += `&${parametersArray[i]}=${parametersArray[i + 1]}`;
  }
  return parametersToURL;
}

export function getUpdatedTime(time) {
  return moment(time).fromNow();
}

export function getCategoriesArray() {
  return ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
}

export function getIconByCategory(category) {
  switch(category) {
    case 'business': return 'business';
    case 'entertainment': return 'sentiment-satisfied';
    case 'general': return 'sentiment-very-satisfied';
    case 'health': return 'cake';
    case 'science': return 'attach-money';
    case 'sports': return 'directions-bike';
    case 'technology': return 'bluetooth-audio';
    default: return 'search'
  }
}