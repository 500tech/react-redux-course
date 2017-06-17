import React from 'react';
import PropTypes from 'prop-types';

export default class Header extends React.Component {
    render() {
        const { title, addMovie } = this.props;

        return (
            <div className="header">
                <h1>{ title }</h1>
                <input type="text" placeholder="my movie"
                       ref={ (el) => this.label = el } />
                <textarea placeholder="movie description"
                          ref={ (el) => this.description = el } />
                <div className="button"
                     onClick={ () => addMovie(this.label.value, this.description.value) }>
                    add movie
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    title: PropTypes.string,
    addMovie: PropTypes.func
};