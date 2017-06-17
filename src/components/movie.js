import React from 'react';

const Movie = ({ label, deleteMovie }) => (
    <li>
        { label }
        <span onClick={ () => deleteMovie(label) }>delete</span>
    </li>
);

export default Movie;