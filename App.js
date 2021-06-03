import React from 'react';
//import styles
import './styles/index.scss';
//importing Components/Pages
import Title from './components/Title';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
//Router
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
      <div>
      <Switch>
      <Route path="/" exact>
      <Title />
      </Route>

      <Route path="/skills">
      <Skills />
      </Route>

      <Route path="/work">
      <Work />
      </Route>

      <Route path="/contact">
      <Contact />
      </Route>
      </Switch>
      </div>
  );
}

export default App;
