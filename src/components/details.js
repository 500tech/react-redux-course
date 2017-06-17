import React from 'react';

const Details = ({ movie }) => (
    <div className="details">
        <div className="title">{ movie.title || 'untitled movie' }</div>
        <div className="description">{ movie.description || 'no description' }</div>
    </div>
);

export default Details;