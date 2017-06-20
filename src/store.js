import { getID } from './lib/ids';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root';

import logMiddleware from './middlewares/log';

const middlewares = [logMiddleware];

const initialState = {
  recipes: [
    {
      id: getID(),
      title: 'Waffles',
      description: 'Nice',
      favorite: false
    },
    {
      id: getID(),
      title: 'Omelette',
      description: 'Good',
      favorite: true
    },
    {
      id: getID(),
      title: 'Dog Food',
      description: 'Amazing',
      favorite: true
    }
  ]
};

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
);

window.store = store;

export default store;