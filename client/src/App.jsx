import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Main from './views/Main';
import Create from './views/Create';
import Update from './views/Update';
import NotFound from './views/NotFound';

function App() {
  return (
    <div className="App">
      <h1>Favorite Brains</h1>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/new' element={<Create />}/>
        <Route path='/edit/:id' element={<Update/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
