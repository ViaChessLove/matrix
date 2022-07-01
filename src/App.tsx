import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route index element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
