import userStore from "../../stores/userStore";
import actionTypes from "../../actions/actionTypes";
import dispatcher from "../../appDispatcher";

function reduceAction(action, data) {
  return {
    type: action,
    data,
  };
}

describe("UserStore", () => {
  let action;

  beforeEach(() => {
    action = reduceAction(actionTypes.LOAD_USER, [
      {
        id: 1,
      },
    ]);
    dispatcher.dispatch(action);
  });

  it("should create", () => {
    expect(userStore).toBeDefined();
  });

  it("should register LOAD_USER", () => {
    expect(userStore.getUser()).toEqual(action.data);
  });

  it("should register UPDATE_USER", () => {
    action = reduceAction(actionTypes.UPDATE_USER, {
      id: 1,
      name: "Esther",
      photo: "",
      cart: [2, 4, 9, 10],
      favourites: [1, 2, 3],
    });
    dispatcher.dispatch(action);
    const updateUser = userStore.getUserById(action.data.id);
    expect(updateUser).toEqual(action.data);
  });

  //CreateUser has to be done by an action
  xit("should create a new user", () => {
    const user = {
      id: 1,
      name: "Esther",
      photo: "",
      cart: [2, 4, 9, 10],
      favourites: [1, 2, 3],
    };

    action = reduceAction(actionTypes.CREATE_HERO, { user });
    dispatcher.dispatch(action);

    const isSavedHero = userStore.getUser().some((user) => user.name === user);
    expect(isSavedHero).toEqual(true);
  });
});
