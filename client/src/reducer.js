import { ACTIONS as Actions } from "./actions.js";
import { arrayFromHashMap, toHashMap } from "./utils/helpers.js";

export const initialState = {
  isFetchingProducts: false,
  isPopUp:false,
  items: [],
  products: {
    map: {},
    order: [],
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.FETCH_PRODUCTS:
      return {
        ...state,
        isFetchingProducts: true,
        products: {
          map: {},
          order: [],
        },
      };
    case Actions.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isFetchingProducts: false,
        products: toHashMap(action.payload, "id"),
      };
    case Actions.ADD_ITEM:
      //  const newState={...state}
      // if (!(newState.items.find((i) => i.id === action.payload)))
      //   newState.items.push({ id: action.payload, count: 1 });
      // return newState;
      if (!state.items.find((i) => i.id === action.payload))
        return {
          ...state,
          items: [...state.items, { id: action.payload, count: 1 }],
        };
      return state;

    case Actions.DELETE_ITEM:
      return Object.assign({}, state, {
        items: state.items.filter((i) => i !== action.payload),
      });
    case Actions.INCREMENT:
      return state;
    case Actions.DECREMENT:
      return state;
    case "togglePopUp":return {...state, isPopUp:!state.isPopUp};
    default:
      return state;
  }
};
export default reducer;

export const selectProducts = (state) => {
  console.log(state);
  return arrayFromHashMap(state.products.map, state.products.order);
};
