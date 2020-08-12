import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";
import userList from "../user.mock";

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
    console.log(_user);
    return _user;
  }

  getUserById(id) {
    _user = userList.find((user) => user.id === id);
    return _user;
  }
  addUser(user) {
    return this.getUserById(user.uid);
  }
  addFavouriteProduct(id) {
    !_user.favourites.find((element) => element === id) &&
      _user.favourites.push(id);
  }
  removeFavouriteProduct(id) {
    _user.favourites = _user.favourites.filter((element) => {
      console.log(element);
      return element !== id;
    });
  }
}

const userStore = new UserStore();
dispatcher.register((action) => {
  switch (action.type) {
    case actionTypes.LOAD_USER:
      _user = action.data;
      userStore.emitChange();
      break;
    case actionTypes.CREATE_USER:
      userList = [...userList, action.data];
      console.log(userList);
      userStore.emitChange();
      break;
    case actionTypes.UPDATE_USER:
      _user = action.data;
      userStore.emitChange();
      break;
    case actionTypes.DELETE_USER:
      _user = action.data;
      userStore.emitChange();
      break;
    default:
      break;
  }
});

export default userStore;
