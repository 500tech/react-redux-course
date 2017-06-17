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

const Movies = () => (
    <ul>
        { list.map(movie => <Movie label={ movie } />) }
    </ul>
);

const App = () => (
    <div>
        <Header title="favorite movies:" />
        <Movies />
    </div>
);


ReactDOM.render(
    <App />,
    document.getElementById('root')
);