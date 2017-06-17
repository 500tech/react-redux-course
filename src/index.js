import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';


const Header = ({ title }) => <h1>{ title }</h1>;

const App = () => (
    <div>
        <h2>welcome to</h2>
        <Header title="react and redux course" />
    </div>
);


ReactDOM.render(
    <App />,
    document.getElementById('root')
);