import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";

export function loadCart() {
  dispatcher.dispatch({
    type: actionTypes.LOAD_CART,
  });
}

export function getCart() {
  dispatcher.dispatch({
    type: actionTypes.UPDATE_CART_ITEM
  });
}


