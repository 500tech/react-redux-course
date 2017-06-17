import React from 'react';
import PropTypes from 'prop-types';
import Movie from './movie';

export default class Movies extends React.Component {
    render() {
        const { movies, deleteMovie } = this.props;

        return (
            <ul>
                { movies.map(movie =>
                    <Movie label={ movie }
                           key={ movie }
                           deleteMovie={ deleteMovie } />) }
            </ul>
        );
    }
}

Movies.propTypes = {
    movies: PropTypes.array,
    deleteMovie: PropTypes.func
};