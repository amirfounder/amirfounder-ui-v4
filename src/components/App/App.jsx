import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Header } from '../modules/Header';
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';
import { Home } from '../pages/Home';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
