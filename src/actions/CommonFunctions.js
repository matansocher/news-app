import _ from 'lodash';
import moment from 'moment'

export function createAPIparams() {

}

export function getUpdatedTime(time) {
  return moment(time).fromNow();
}