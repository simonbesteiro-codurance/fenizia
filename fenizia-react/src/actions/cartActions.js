import user from "../user.mock.js";
import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";

export function loadCart() {
  return new Promise((resolve) => {
    resolve(user);
  }).then((cart) => {
    dispatcher.dispatch({
      type: actionTypes.LOAD_CART,
      data: cart
    });
  });
}