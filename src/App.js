// import React, { Component, useState, useMemo } from 'react';
// import { render } from 'react-dom';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './views/home.js';
// import Sample1 from './views/sample1.js';
// import Sample2 from './views/sample2.js';
// import { addInitListener } from '@luigi-project/client';
// import './index.css';
// import { OldUserCotnext } from './oldUserContext';


// function App() {

//       const [oldData, setOldData] = useState([]);

//       const datas = useMemo(() => ({ oldData, setOldData }), []);


//   return (
//     <div className="App">
//       <BrowserRouter basename={`sampleapp.html#`}>
//         {/* <OldUserCotnext.Provider value={datas}>
//           <Routes> */}
//             <Route path="/home" component={Home} />
//             <Route path="/sample1" component={Sample1} />
//             <Route path="/sample2" component={Sample2} />
//           {/* </Routes>
//         // </OldUserCotnext.Provider> */}
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;


import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;