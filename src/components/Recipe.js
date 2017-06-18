import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Recipe = ({ recipe, toggleFavorite }) => (
    <li className={ classNames('recipe', { 'favorite': recipe.favorite }) }
        onClick={ () => toggleFavorite(recipe.id) } >
        { recipe.title }
    </li>
);

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    toggleFavorite: PropTypes.func.isRequired
};

export default Recipe;