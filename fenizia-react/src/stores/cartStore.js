import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";
import product from "../product.mock";


const CHANGE_EVENT = "change";

let _cart = [];

let numberCart = 0;

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

  addCartProduct(id) {
    let productObject = product.find((element) => element.id === id);
    let checker = false;
    for (let i of _cart) {
      if (i.product.id === id) {
        i.amount++;
        checker = true;
      }
    }
    if (!checker)
      _cart.push({
        amount: 1,
        product: {
          id,
          product: {
            title: productObject.product.title,
            author: productObject.product.author,
            price: productObject.product.price,
            cover: productObject.product.cover,
          },
        },
      });
  }

  removeCartProduct(deleteId) {
    let search = _cart.filter((element) => element.product.id === deleteId);
    for (let i of search) {
      if (i.amount > 1) {
        i.amount--;
      } else {
        _cart = _cart.filter((element) => element.product.id !== deleteId);
      }
    }

    return _cart;
  }


  updateNumberCart() {
    ++numberCart;
  }

  deleteNumberCart() {
    --numberCart;
  }

  getNumberCart(){
    return numberCart;
  }

  getCart() {
    return _cart;
  }
}

const cartStore = new CartStore();

dispatcher.register((action) => {
  switch (action.type) {
    case actionTypes.LOAD_CART:
      cartStore.emitChange();
      break;
    case actionTypes.UPDATE_CART_ITEM:
      cartStore.emitChange();
      break;
    case actionTypes.DELETE_CART_ITEM:
      cartStore.emitChange();
      break;
    default:
      break;
  }
});

export default cartStore;
