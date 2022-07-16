import duRequest from './request';
import { METHODS } from '../helpers/constants';

const API = {};

API.getAction = (endPoint, successCB, errorCB) => {
  duRequest(METHODS.GET, endPoint, null, successCB, errorCB);
};

API.postAction = (endPoint, body, successCB, errorCB) => {
  duRequest(METHODS.POST, endPoint, body, successCB, errorCB);
};

export default API;
