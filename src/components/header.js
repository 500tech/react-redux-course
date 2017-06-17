import React from 'react';
import PropTypes from 'prop-types';

export default class Header extends React.Component {
    render() {
        const { title, addMovie } = this.props;

        return (
            <div className="header">
                <h1>{ title }</h1>
                <input type="text" placeholder="my movie" ref={ (el) => this.input = el } />
                <div className="button"
                     onClick={ () => addMovie(this.input.value) }>
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