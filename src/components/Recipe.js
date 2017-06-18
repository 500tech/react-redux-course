import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Recipe = ({ recipe, toggleFavorite }) => (
  <li className={ recipe.favorite && 'favorite' }>
    <Link className="recipe" to={ `/${ recipe.id }`}>
      { recipe.title }
    </Link>
  </li>
);

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  toggleFavorite: PropTypes.func.isRequired
};

export default Recipe;