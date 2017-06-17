import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';


function Header(props) {
    return React.createElement('h1', null, props.title);
}

ReactDOM.render(
    React.createElement('div', null, [
        React.createElement('h2', null, 'welcome to'),
        React.createElement(Header, { title: 'react and redux course' })
    ]),
    document.getElementById('root')
);