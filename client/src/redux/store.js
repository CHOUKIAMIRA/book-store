import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import {thunk} from 'redux-thunk'; // Corrigez l'importation de thunk
import { bookreducer } from './reducer/bookReducer';
import userReducer from './reducer/userReducer';

// Combiner les reducers
const rootReducer = combineReducers({
  allbooks: bookreducer,
  users: userReducer,
});

// Configurer les outils de développement Redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Créer le store
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)) // Assurez-vous que thunk est appliqué correctement
);
