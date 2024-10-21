import { ADDTOCART, DELETECART, GETBOOKS, REMOVEFROMCART } from "../actionType/bookActionType";

const initialState = {
  books: [],
  msg: "",
  panier:[]
};

export const bookreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GETBOOKS:
      return { ...state, books: payload.allbooks, msg: payload.msg };
      case ADDTOCART:
        return {...state,panier:[...state.panier,payload]}
        
        case REMOVEFROMCART:
        return {...state,panier:state.panier.filter(e=>e.books._id !== payload)}
      
        case DELETECART:
        return {...state,panier:[]}
    default:
      return state;
  }
};
