import React from 'react';

import Header from './header';
import Movies from './movies';

export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            list: [
                "Avatar",
                "Wonder Women",
                "Titanic"
            ]
        };
    }

    addMovie = (label) => {
        this.setState({ list: this.state.list.concat(label) });
    };

    deleteMovie = (label) => {
        this.setState({ list: this.state.list.filter(movie => movie !== label) });
    };

    render() {
        return (
            <div>
                <Header
                    title="favorite movies:"
                    addMovie={ this.addMovie }
                />
                <Movies
                    movies={ this.state.list }
                    deleteMovie={ this.deleteMovie }
                />
            </div>
        );
    }
}