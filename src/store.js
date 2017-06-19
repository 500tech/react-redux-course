import { createStore } from 'redux';
import { getID } from './lib/ids';

const reducer = (state, action) => {
  console.log('Action: ' + action.type, action);

  switch (action.type) {
    case 'ADD':
      const newRecipe = {
        id: getID(), title: action.title, favorite: false
      };

      return Object.assign({}, state, {
        recipes: state.recipes.concat(newRecipe)
      });

    default:
      return state;
  }
};

const initialState = {
  recipes: [
    { id: getID(), title: 'Waffles', favorite: false },
    { id: getID(), title: 'Omelette', favorite: true }
  ]
};

const store = createStore(reducer, initialState);

window.store = store;

export default store;
