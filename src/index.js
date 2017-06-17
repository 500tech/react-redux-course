import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';


function Header() {
    return React.createElement('h1', null, 'react and redux course');
}

ReactDOM.render(
    React.createElement('div', null, [
        React.createElement('h2', null, 'welcome to'),
        React.createElement(Header)
    ]),
    document.getElementById('root')
);