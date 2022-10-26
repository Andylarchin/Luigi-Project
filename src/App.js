import React, { Component, useState, useMemo } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/home.js';
import Sample1 from './views/sample1.js';
import Sample2 from './views/sample2.js';
import Sample3 from './views/sample3.js';
import { createBrowserHistory } from 'history';
import './index.css';
import { OldUserCotnext } from './oldUserContext';
import LuigiClient from '@luigi-project/client';


const appHistory = createBrowserHistory();

function App() {
  const [oldData, setOldData] = useState([]);

  const datas = useMemo(() => ({ oldData, setOldData }), []);

  return (
    <div className="App">
      <BrowserRouter basename={`sampleapp.html#`} history={appHistory}>
        <OldUserCotnext.Provider value={datas}>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/sample1" component={Sample1} />
            <Route path="/sample2" component={Sample2} />
            <Route path="/sample3" component={Sample3} />
          </Switch>
        </OldUserCotnext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
