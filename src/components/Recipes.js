import React from 'react';
import Recipe from './Recipe';
import {connect} from 'react-redux';
import {toggleRecipe, fetchRecipes} from '../actions/recipes';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Recipes = ({recipes, toggleFavorite, fetchRecipes}) => (
    <ul className="recipes">
        { recipes.map(recipe =>
            <Recipe key={ recipe.id }
                    recipe={ recipe }
                    toggleRecipe={ toggleRecipe }/>)}

        <Link to="/add" className="add">Add Recipe</Link>
        <div className='add' onClick={ fetchRecipes }>Refresh</div>
    </ul>
);

Recipes.propTypes = {
    recipes: PropTypes.array.isRequired,
    toggleFavorite: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes,
        fetchRecipes: PropTypes.func.isRequired
    }
};

export default connect(mapStateToProps,
    {
        toggleRecipe,
        fetchRecipes
    })(Recipes);