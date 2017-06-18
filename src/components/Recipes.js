import React from 'react';
import Recipe from './Recipe';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Recipes = ({ recipes, toggleFavorite }) => (
    <ul className="recipes">
        { recipes.map(recipe =>
            <Recipe key={ recipe.id }
                    recipe={ recipe }
                    toggleFavorite={ toggleFavorite } /> )}
    </ul>
);

Recipes.propTypes = {
    recipes: PropTypes.array.isRequired,
    toggleFavorite: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleFavorite: (id) => dispatch({ type: 'TOGGLE', id })
    }
};

const ConnectedRecipes = connect(
    mapStateToProps, mapDispatchToProps)(Recipes);

export default ConnectedRecipes;