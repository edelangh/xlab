import React                                          from 'react';
import { Router, Route, IndexRoute }                  from 'react-router';
import appHistory                                     from './app_history';
import App                                            from '../view/App';
import Home                                           from '../view/Home'

var router = (
  <Router history={appHistory}>
    <Route path='/'                                                       component={App}>
      <IndexRoute                                                         component={Home} />
    </Route>
  </Router>
);
      // Gestion du Compte
// <Route path='/connect'                                              component={Connect} />


module.exports = router;
