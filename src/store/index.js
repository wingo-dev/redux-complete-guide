import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

const counterReducer = (
  state = { counter: 0, showHiden: false, posts: [] },
  action
) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  if (action.type === "toggle") {
    if (!state.showHiden) {
      return {
        ...state,
        showHiden: true,
      };
    } else {
      return {
        ...state,
        showHiden: false,
      };
    }
  }
  if (action.type === "FETCH_POST") {
    return {
      ...state,
      posts: action.payload,
    };
  }

  return state;
};

const store = createStore(counterReducer, applyMiddleware(thunkMiddleware));

export default store;
