import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import { GlobalStyle } from './globalStyles';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Header/>
      <Routes>
        <Route index element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
