import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import { GlobalStyle } from './globalStyles';
import Home from './pages/Home';
import RedPill from './pages/RedPill';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Header/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/redpill' element={<RedPill/>} />
        <Route path='/bluepill' element={<RedPill/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
