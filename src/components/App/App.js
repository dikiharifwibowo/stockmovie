import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Navi from '../Navi/Navi';
import Movie from '../Movie/Movie';
import NotFound from '../NotFound/NotFound';
import ScrollTop from '../elements/ScrollTop/ScrollTop';

class App extends Component {

    render() {

        return (
            <Router>
                <ScrollTop>
                    <React.Fragment>
                        <Navi />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            
                            <Route path="/movie/:movieId"
                                render={
                                    props => (
                                        <Movie
                                            {...props}
                                        />
                                    )
                                }
                            />
                            <Route component={NotFound} />
                        </Switch>
                    </React.Fragment>
                </ScrollTop>
            </Router>
        )
    }

}
export default App;
