import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";
import userList from '../user.mock'
const CHANGE_EVENT = "change";
let _user = userList;

class UserStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getUser() {
    return _user;
  }

  getUserById(id) {
    return _user.find((user) => user.id === id);
  }
  addUser(user) {
    _user.push({
      id: user.uid,
      name: !!user.displayname ? user.displayname : user.email,
      photo: !!user.photoURL ? user.photoURL : 'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png',
      cart: [2, 4, 9, 10],
      favourites:[],
    });
    return this.getUserById(user.uid);
  }
}

const userStore = new UserStore();
dispatcher.register((action) => {
  switch (action.type) {
    case actionTypes.LOAD_USER:
      _user = action.data;
      userStore.emitChange(_user);
      break;
    case actionTypes.CREATE_USER:
      _user = [..._user, action.data];
      userStore.emitChange();
      break;
    case actionTypes.UPDATE_USER:
      _user = action.data;
      userStore.emitChange(_user);
      break;
    case actionTypes.DELETE_USER:
      _user = action.data;
      userStore.emitChange(_user);
      break;
    default:
      break;
  }
});

export default userStore;
