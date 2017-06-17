import React from 'react';
import Movie from './movie';

const Movies = ({ movies, deleteMovie }) => (
    <ul>
        { movies.map(movie =>
            <Movie label={ movie }
                   key={ movie }
                   deleteMovie={ deleteMovie } />) }
    </ul>
);

export default Movies;