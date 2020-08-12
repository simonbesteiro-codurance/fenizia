import userList from "../user.mock";
import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";

export function loadUsers() {
  return new Promise((resolve) => {
    resolve(userList);
  }).then((users) => {
    dispatcher.dispatch({
      type: actionTypes.LOAD_USER,
      data: users,
    });
  });
}

export function createUser(user) {
  return new Promise((resolve) => {
    resolve({
      id: user.uid,
      name: !!user.displayname ? user.displayname : user.email,
      photo: !!user.photoURL
        ? user.photoURL
        : "https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png",
      cart: [],
      favourites: [],
    });
  }).then((user) => {
    dispatcher.dispatch({
      type: actionTypes.CREATE_USER,
      data: user,
    });
  });
}

export function updateUser() {
  return new Promise((resolve) => {
    resolve(userList);
  }).then((user) => {
    dispatcher.dispatch({
      type: actionTypes.UPDATE_USER,
      data: user,
    });
  });
}

export function deleteUser() {
  return new Promise((resolve) => {
    resolve(userList);
  }).then((user) => {
    dispatcher.dispatch({
      type: actionTypes.DELETE_USER,
      data: user,
    });
  });
}
