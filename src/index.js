import React from 'react';
import {render} from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import RecipesView from './components/RecipesView';
import Header from './components/Header';
import Footer from './components/Footer';
import AddRecipe from './components/AddRecipe';
import RecipeDetails from './components/RecipeDetails';

import store from './store';

import {Switch, Link, BrowserRouter} from 'react-router-dom'
import {Route} from 'react-router';

const App = ({children}) => (
    <div>
        <Header />
        <RecipesView children={ children }/>
        <Footer />
    </div>
);

const NotFound = () => (
    <div>
        Are you lost?

        <Link to="/">Home</Link>
    </div>
);

render(
    <Provider store={ store }>
        <BrowserRouter>
            <App>
                <Switch>
                    <Route path="/add" component={ AddRecipe }/>
                    <Route path="/:id" component={ RecipeDetails }/>
                    <Route component={ NotFound }/>
                </Switch>
            </App>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
