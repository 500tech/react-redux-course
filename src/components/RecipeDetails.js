import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { toggleFavorite } from '../actions/recipes';

const RecipeDetails = ({recipe, toggleFavorite}) => {
    if (!recipe) {
        return <h1>Not found</h1>;
    }

    const classes = cx('toggle-box', {
        selected: recipe.favorite
    });


    return (
        <div className="details">
            <h3>{ recipe.title }</h3>

            <div>
                <h4>Description</h4>
                { recipe.description }
                <div className={ classes } onClick={ () => toggleFavorite(recipe.id) }>favorite</div>
            </div>
        </div>
    )
};

RecipeDetails.propTypes = {
    recipe: PropTypes.object
};

const mapStateToProps = (state, ownProps) => ({
    recipe: state.recipes.find(r => r.id === parseInt(ownProps.match.params.id, 10))
});

export default connect(mapStateToProps, { toggleFavorite })(RecipeDetails);