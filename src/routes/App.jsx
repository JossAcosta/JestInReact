import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Layout from '../components/Layout';
import NotFound from '../containers/NotFound';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/JestInReact" component={Home} />
        <Route exact path="/checkout" component={Checkout} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;