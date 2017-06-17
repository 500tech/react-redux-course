import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';


const Header = ({ title }) => <h1>{ title }</h1>;

const Movie = ({ label }) => <li>{ label }</li>;

const Movies = () => (
    <ul>
        <Movie label="Avatar" />
        <Movie label="Wonder Woman" />
        <Movie label="Titanic" />
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