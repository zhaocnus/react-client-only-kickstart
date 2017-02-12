import React from 'react';
import { render } from 'react-dom';
import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import browserHistory from 'react-router/lib/browserHistory';
import { Provider } from 'react-redux';

// redux
import configureStore from './store/config';

// root components
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

// main app scss
import './styles/index.scss';

// init redux store
const store = configureStore();

// render app root
render((
  <Provider store={store}>
    <Router
      onUpdate={() => window.scrollTo(0,0)}
      history={browserHistory}>
      <Route path="/" component={Home} />
      <Route path="/page1" component={Page1} />
      <Route path="/page2" component={Page2} />
      <Route path="*" component={Home} />
    </Router>
  </Provider>
), document.getElementById('app-root'));