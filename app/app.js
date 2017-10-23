import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {  HashRouter,BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/pages/home';
import Product from './components/pages/product';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
 <Provider store={createStoreWithMiddleware(reducers)}>
  
   < HashRouter>
      <div>
        <Switch>
          <Route path="/product" component={Product}/>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    
   </ HashRouter>

  </Provider>,
  document.getElementById('root')
);
