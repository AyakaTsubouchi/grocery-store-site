import { productsData } from "./productData";
import { storeData } from "./storeData";
import { shoppingList } from "./shoppingList";
const initState = {
  shoppingList: [
    {
      id: 1,
      name: "Apple",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
      imgSrc:
        "https://assets.shop.loblaws.ca/products_jpeg/20794053001/en/20794053001_lrg_1_@1x.jpg",
      price: 4.97,
      status: "Available",
      isDone: false,
      quontity: 1,
    },
    {
      id: 2,
      name: "Rice cakes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
      imgSrc:
        "https://s3-media0.fl.yelpcdn.com/bphoto/-ldfYR3RYmItv6HjJye6qg/o.jpg",
      price: 2,
      status: "Available",
      isDone: false,
      quontity: 1,
    },
  ],

  storeData,
  productsData,
};

const Reducer = (state = initState, action) => {
  switch (action.type) {
    case "NEW_Shopping":
      action.payload.id = Math.random();
      action.payload.isDone = false;
      action.payload.quontity = 1;
      return {
        ...state,
        shoppingList: [...state.shoppingList, action.payload],
      };
    case "DONE_Shopping":
      const tempList = state.shoppingList.map((item) => {
        item.id === action.payload && (item.isDone = !item.isDone);
        return item;
      });
      return {
        ...state,
        shoppingList: tempList,
      };
    case "REMOVE_Shopping":
      const afterFilter = state.shoppingList.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        shoppingList: afterFilter,
      };
    case "INCREASE_QTY":
      const increaseList = state.shoppingList.map((item) => {
        if (item.id === action.payload) {
          item.quontity += 1;
        }
        return item;
      });
      return {
        ...state,
        shoppingList: increaseList,
      };
    case "DECREASE_QTY":
      const decreaseList = state.shoppingList.map((item) => {
        if (item.id === action.payload && item.quontity > 0) {
          item.quontity -= 1;
        }
        return item;
      });
      return {
        ...state,
        shoppingList: decreaseList,
      };
    default:
      break;
  }
  return state;
};

export default Reducer;

//step 2-1
// const Reducer = () => {
//   return state
// }

//step 2-2 (add params)
// const Reducer = (state, action) => {
//   return state
// }

//step 2-3 - create initState to give state a value
// const initState = {
//   toDoList: []
// };

//step 2-4
// const Reducer = (state = initState, action) => {
//   return state
// }

//dont forget to export default Reducer
