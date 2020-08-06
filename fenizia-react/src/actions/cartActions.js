import cartList from "../cart.mock.js";
import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";

export function loadCart() {
  return new Promise((resolve) => {
    resolve(cartList);
  }).then((cart) => {
    dispatcher.dispatch({
      type: actionTypes.LOAD_CART,
      data: cart,
    });
  });
}