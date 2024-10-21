import { LOGIN, LOGOUT } from '../actionType/userActionType';
import axios from 'axios';

// Action de login
export const loginUser = (userData, callback) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:5000/login", userData);

    if (response.data.secret) {
      dispatch({
        type: LOGIN,
        payload: {
          email: userData.email,
          fullname: userData.fullname,
          secret: response.data.secret,
        },
      });

      if (callback) callback(response.data); // Exécute le callback si fourni
    }
  } catch (error) {
    console.error("Erreur lors de la connexion :", error);
  }
};

// Action de logout
export const logoutUser = () => {
  return {
    type: LOGOUT,
  };
};


