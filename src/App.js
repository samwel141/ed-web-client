// App.js
import React from 'react';
import Header from './components/Header';
import Home from './Pages/Home/Home';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <div style={{ backgroundColor: '#f9fbfd'}}>
      <CssBaseline />
      <Header />
      <Home />
    </div>
  );
}

export default App;
