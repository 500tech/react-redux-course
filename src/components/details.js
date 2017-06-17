import React from 'react';

const Details = ({ title, description }) => (
    <div className="details">
        <div className="title">{ title || 'untitled movie' }</div>
        <div className="description">{ description || 'no description' }</div>
    </div>
);

export default Details;