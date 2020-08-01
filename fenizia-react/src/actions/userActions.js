import userList from '../user.mock';
import dispatcher from '../appDispatcher';
import actionTypes from './actionTypes';

export function createUser() {
	return new Promise((resolve) => {
		resolve(userList);
	}).then((user) => {
		dispatcher.dispatch({
			type: actionTypes.CREATE_USER,
			data: user
		});
	});
}

export function updateUser() {
	return new Promise((resolve) => {
		resolve(userList);
	}).then((user) => {
		dispatcher.dispatch({
			type: actionTypes.CREATE_USER,
			data: user
		});
	});
}