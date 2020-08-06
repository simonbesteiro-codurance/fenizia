import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _cart = [];

class CartStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

<<<<<<< HEAD
  getCart() {
	// return _product.filter((product) => product.id === id);
=======
  getCart(product) {
    // return product.filter((element) => element.id === 3);
    return 3
>>>>>>> 4fa03f39fb5df466c66395a458d5186798e4c7b4
  }
}

const cartStore = new CartStore();

dispatcher.register((action) => {
  switch (action.type) {
    case actionTypes.LOAD_CART:
      _cart = action.data;
      cartStore.emitChange(_cart);
      break;
    default:
      break;
  }
});

export default cartStore;