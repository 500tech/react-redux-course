import React from 'react';

import { GenerateKey } from '../utils/keys';
import Header from './header';
import Movies from './movies';
import Panel from './panel';
import Details from './details';

export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            list: [
                { label: "Avatar", id: GenerateKey() },
                { label: "Wonder Women", id: GenerateKey() },
                { label: "Titanic", id: GenerateKey() }
            ]
        };
    }

    addMovie = (label) => {
        this.setState({ list: this.state.list.concat({
            label,
            id: GenerateKey()
        }) });
    };

    deleteMovie = (id) => {
        this.setState({ list: this.state.list.filter(
            movie => movie.id !== id)
        });
    };

    render() {
        return (
            <div>
                <Panel>
                    <Header
                        title="favorite movies:"
                        addMovie={ this.addMovie }
                    />
                    <Movies
                        movies={ this.state.list }
                        deleteMovie={ this.deleteMovie }
                    />
                </Panel>
                <Panel>
                    <Details />
                </Panel>
            </div>
        );
    }
}