import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';

import Main from './pages/Main';
import Introduction from './pages/Introduction';
import History from './pages/History';

function App() {
  return (
    <div className="App">

        <Routes>
          <Route exact path='/' element={<Main/>}></Route>
          <Route path='/intro' element={<Introduction/>}></Route>
          <Route path='/history' element={<History/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
