import { LOGIN, LOGOUT, UPDATE_USER, GET_CURRENT_USER } from "../actionType/userActionType";

const initialState = {
  user: {}, // L'utilisateur courant
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      // Stocker l'utilisateur dans le localStorage lors de la connexion
      localStorage.setItem("user", JSON.stringify(action.payload)); 

      return {
        ...state,
        user: action.payload,
      };

    case LOGOUT:
      // Supprimer l'utilisateur du localStorage lors de la déconnexion
      localStorage.removeItem("user");

      return {
        ...state,
        user: {},
      };

  

    default:
      return state;
  }
};

export default userReducer;
