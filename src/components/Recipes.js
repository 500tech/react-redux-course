import React from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Recipes = ({ recipes, toggleFavorite }) => (
    <ul className="recipes">
        { recipes.map(recipe => <Recipe key={ recipe.id }
                                        recipe={ recipe }
                                        toggleFavorite={ toggleFavorite } /> )}
    </ul>
);

Recipes.propTypes = {
    recipes: PropTypes.array.isRequired,
    toggleFavorite: PropTypes.func.isRequired
};


// Connect
const mapStateToProps = (state) => ({
  recipes: state.recipes,
  toggleFavorite: () => console.log('Toggle favorite')
});

export default connect(mapStateToProps)(Recipes);