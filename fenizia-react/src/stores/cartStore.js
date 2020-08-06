import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _cart = [
  {
    amount: 7,
    product: {
      id: 5,
      product: {
        type: "book",
        title: "El mentiroso",
        author: "Mikel Santiago",
        price: 19.85,
        rating: 8,
        cover: "https://imagessl5.casadellibro.com/a/l/t1/65/9788484452065.jpg",
        description:
          "Una emocionante historia basada en hechos reales sobre la memoria, el amor y la esperanza en medio del horror de Auschwitz.",
        newRelease: false,
        bestSeller: true,
        genre: "policiaco",
      },
    },
  },
];

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


  addProduct() {
    // si no está lo agrega
    // si está, incrementa el amount
  }

  removeProduct() {}

  getCart(product) {
    // return product.filter((element) => element.id === 3);
    return _cart;



  }
}

const cartStore = new CartStore();

dispatcher.register((action) => {
  switch (action.type) {
    case actionTypes.LOAD_CART:
      cartStore.emitChange();
      break;
    default:
      break;
  }
});

export default cartStore;
