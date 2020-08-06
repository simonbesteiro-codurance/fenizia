import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";
import product from '../product.mock'



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


  addProduct(id) {
    let productObject = product.find((element) => element.id === id);
    let checker = false
    for (let i of _cart){
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
          cover: productObject.product.cover
        },
      },
    });

    return _cart
  }

  removeProduct(deleteId) {
    console.log(_cart)
    _cart = _cart.filter((element) => element.product.id !== deleteId)
    console.log(_cart)
    console.log(deleteId)
   return _cart
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
    case actionTypes.DELETE_HERO:
			cartStore.emitChange();
			break;
    default:
      break;
  }
});

export default cartStore;
