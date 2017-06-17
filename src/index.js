import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const list = [
    "Avatar",
    "Wonder Women",
    "Titanic"
];

const Header = ({ title }) => <h1>{ title }</h1>;

const Movie = ({ label }) => <li>{ label }</li>;

const Movies = ({ movies }) => (
    <ul>
        { movies.map(movie => <Movie label={ movie } key={ movie } />) }
    </ul>
);

class App extends React.Component {
    render() {
        return (
            <div>
                <Header title="favorite movies:" />
                <Movies movies={ list } />
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);