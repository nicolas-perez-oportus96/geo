import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import AppSelect from './components/AppSelect'

import App1 from './components/App1'

// import App2 from './components/App2'
// import App3 from './components/App3'
import { FeatureProvider } from './components/FeatureContext'


function App() {
  return (
    <FeatureProvider>
      <div className="App">
        <Router>
          <Header />
          {/* <Redirect from='/' to="/home"/> */}
          <Switch>
            <Route path="/home" component={AppSelect} />
            <Route path="/app1" component={App1} />
            {/* <Route path="/app2" component={App2}/>
          <Route path="/app3" component={App3}/> */}
          </Switch>
        </Router>
      </div>
    </FeatureProvider>
  );
}

export default App;
