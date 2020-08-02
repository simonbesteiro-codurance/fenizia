import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _user = [];

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
}

const userStore = new UserStore();
dispatcher.register((action) => {
  switch (action.type) {
    case actionTypes.LOAD_USERS:
      _user = action.data;
      userStore.emitChange(_user);
      break;
    case actionTypes.CREATE_USERS:
      _user = [..._user, action.data];
      userStore.emitChange();
      break;
    case actionTypes.UPDATE_USERS:
      _user = action.data;
      userStore.emitChange(_user);
      break;
    case actionTypes.DELETE_USERS:
      _user = action.data;
      userStore.emitChange(_user);
      break;
    default:
      break;
  }
});

export default productStore;
