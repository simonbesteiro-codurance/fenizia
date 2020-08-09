import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";
import { createSign } from "crypto";

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

  // improve code without puting true, with just one return and with ternary operator
  getProduct(criteria) {

    if (!criteria || criteria === 'todos') {
      return _product;
    } else if (criteria === 'novedades' || criteria === 'superventas') {
      return _product.filter((product) => product.product[criteria] === true);
    } else {
      return _product.filter((product) => product.product.genre === criteria);
    }
  }

  getProductById(id) {
    return _product.find((product) => product.id === id);
  }

  getCarouselPage(page, step) {
    const calculus = step * page;
    if (_product && _product.length >= calculus) {
      return _product.slice(calculus - step, calculus);
    } else return _product.slice(_product.length - ++page, _product.length);
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
