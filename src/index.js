import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const Header = ({ title }) => <h1>{ title }</h1>;

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

    componentDidMount() {
        // USING FORCE UPDATE
        setTimeout(() => {
            this.state.list.push('Without Limits');
            this.forceUpdate();
        }, 1000);

        // USING SET STATE
        setTimeout(() => {
            // this.setState({ list: this.state.list.concat('Without Limits') });
        }, 1000);
    }


    render() {
        return (
            <div>
                <Header title="favorite movies:" />
                <Movies movies={ this.state.list } />
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);