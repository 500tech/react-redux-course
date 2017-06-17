import React from 'react';
import PropTypes from 'prop-types';
import Movie from './movie';

export default class Movies extends React.Component {
    render() {
        const {
            movies,
            deleteMovie,
            selectMovie
        } = this.props;

        return (
            <ul>
                { movies.map(movie =>
                    <Movie label={ movie.label }
                           id={ movie.id }
                           key={ movie.id }
                           selectMovie={ selectMovie }
                           deleteMovie={ deleteMovie } />) }
            </ul>
        );
    }
}

Movies.propTypes = {
    movies: PropTypes.array,
    deleteMovie: PropTypes.func
};