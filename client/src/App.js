import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

// Pages import
import LandingPage from './components/LangindPage/LandingPage';
import DetailPage from './components/DetailPage/DetailPage';

import './App.css';

function App() {
  return (
    <Suspense>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/hashtag/detail" component={DetailPage} />
      </Switch>
    </Suspense>
  );
}

export default App;
