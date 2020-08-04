import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _product = [];

class ProductStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getProduct() {
    return _product;
  }

  getProductById(id) {
    return _product.find((product) => product.id === id);
  }
  getCarouselPage(page, step) {
    const calculus = step * page;
    if (_product && _product.length >= calculus) {
      return _product.slice(calculus - step, calculus);
    } else return _product.slice(_product.length - page, _product.length);
  }
}

const productStore = new ProductStore();
dispatcher.register((action) => {
  switch (action.type) {
    case actionTypes.LOAD_PRODUCTS:
      _product = action.data;
      productStore.emitChange(_product);
      break;
    case actionTypes.NEXT_CAROUSEL:
      productStore.emitChange();
      break;
    default:
      break;
  }
});

export default productStore;
