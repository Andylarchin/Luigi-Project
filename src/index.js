// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import { BrowserRouter, Route } from 'react-router-dom';
// import Home from './views/home.js';
// import Sample1 from './views/sample1.js';
// import Sample2 from './views/sample2.js';
// import { addInitListener } from '@luigi-project/client';
// import './index.css';
// import { OldUserCotnext } from './oldUserContext';
// import ReactDOM from 'react-dom';
// import { createRoot } from 'react-dom/client';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App />
// );

import React, { Component } from 'react';
import { render } from 'react-dom';
import './i18n';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './views/home.js';
import Sample1 from './views/sample1.js';
import Sample2 from './views/sample2.js';
import { addInitListener } from '@luigi-project/client';
import './index.css';
import { OldUserCotnext } from './oldUserContext';


class App extends Component {
  constructor(props) {
    super(props);
    addInitListener(() => {
      console.log('Luigi Client initialized.');
    });
  }
  render() {
    return (
      <BrowserRouter basename={`sampleapp.html#`}>
        <Route path="/home" component={Home} />
        <Route path="/sample1" component={Sample1} />
        <Route path="/sample2" component={Sample2} />
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById('root'));
