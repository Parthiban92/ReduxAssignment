import { combineReducers } from "redux";
import { LIST_ACTION_TYPES } from "../actions/postActions";

const initialState = {
  items: [],
  item: {}
}

export default function (state = initialState, action) {

  switch (action.type) {
    case LIST_ACTION_TYPES.FETCH_POST:
   
      return {
        ...state,
        items: [...action.payload]
      }
      break;
      case LIST_ACTION_TYPES.GET_DATA:

      return {
        ...state,
        items: [...action.payload],
        items2:[]
      }
      break;
      case LIST_ACTION_TYPES.ERROR_DATA:
      return {
        ...state,
        items: [...action.payload]
      }
      break;
       case LIST_ACTION_TYPES.GET_SUB_DATA:
       var user_data=action.payload;
       const result = user_data.filter(user => user.userId==action.id);
       console.log(result)
     
       return Object.assign({}, state, {
          items2: result,
        });
      break;
      case LIST_ACTION_TYPES.ERROR_SUB_DATA:
      // 
      return {
        ...state,
        items: [...action.payload]
      }
      break;
   
    default:
      return state;
  }
}