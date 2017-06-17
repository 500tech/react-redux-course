import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Header extends React.Component {
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

const Movie = ({ label }) => <li>{ label }</li>;

const Movies = ({ movies }) => (
    <ul>
        { movies.map(movie => <Movie label={ movie } key={ movie } />) }
    </ul>
);

class App extends React.Component {
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

    render() {
        return (
            <div>
                <Header
                    title="favorite movies:"
                    addMovie={ this.addMovie }
                />
                <Movies movies={ this.state.list } />
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);