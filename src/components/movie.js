import React from 'react';

const Movie = ({ label, deleteMovie, id, selectMovie }) => (
    <li>
        { label }
        <span onClick={ () => deleteMovie(id) }>delete</span>
        <span onClick={ () => selectMovie(id) }>info</span>
    </li>
);

export default Movie;