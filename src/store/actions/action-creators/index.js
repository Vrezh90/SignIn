import * as actionTypes from '../action-types';

export const setExamResult = payload => ({
	type: actionTypes.SET_EXAM_RESULT,
	payload
});

export const setToken = payload => ({
	type: actionTypes.SET_TOKEN,
	payload
});
