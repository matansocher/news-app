import _ from 'lodash';
import moment from 'moment'

export function createAPIparams(parametersArray) {
  let parametersToURL = '';
  if(_.isEmpty(parametersArray) || !parametersArray) {
    return parametersToURL;
  }
  for (let i = 0; i < parametersArray.length; i=i+2) {
    parametersToURL = `&${parametersArray[i]}=${parametersArray[i+1]}`;
  }
  return parametersToURL;
}

export function getUpdatedTime(time) {
  return moment(time).fromNow();
}