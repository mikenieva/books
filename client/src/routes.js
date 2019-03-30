import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

// IMPORTACIÓN DE MIS RUTAS
import Home from './components/Home'
import Libro from './components/Libro'

class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/:idLibro" exact component={Libro} />
                </Switch>
            </div>
        );
    }
}

export default Routes;