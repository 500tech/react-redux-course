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
            ],
            selected: null
        };
    }

    addMovie = (label, description) => {
        this.setState({ list: this.state.list.concat({
            label,
            description,
            id: GenerateKey()
        }) });
    };

    deleteMovie = (id) => {
        this.setState({
            list: this.state.list.filter(movie => movie.id !== id),
            selected: null
        });
    };

    selectMovie = (selected) => {
        this.setState({ selected });
    };

    findMovie(id) {
        return this.state.list.find(movie => movie.id === id);
    }

    render() {
        const { selected, list } = this.state;

        return (
            <div>
                <Panel>
                    <Header
                        title="favorite movies:"
                        addMovie={ this.addMovie }
                    />
                    <Movies
                        selected={ selected }
                        movies={ list }
                        selectMovie={ this.selectMovie }
                        deleteMovie={ this.deleteMovie }
                    />
                </Panel>
                { selected && <Panel><Details movie={ this.findMovie(selected) } /></Panel> }
            </div>
        );
    }
}