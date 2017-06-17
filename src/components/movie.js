import React from 'react';

const Movie = ({ label, deleteMovie, id }) => (
    <li>
        { label }
        <span onClick={ () => deleteMovie(id) }>delete</span>
    </li>
);

export default Movie;