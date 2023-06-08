import './assets/style.css';
import { useEffect, useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Match from './components/Match';
import Login from './components/Login';
import Add from './components/AddMatch';
import Nav from './components/Nav';

function App() {
  const [isConnected, setIsConnected] = useState(false);

  return (
    <BrowserRouter>
    <Nav></Nav>
      <Routes>
        <Route path="/" element={<Match />}/>
        <Route path="/login" element={<Login />}/>
        
        <Route path="/add" element={<Add />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
