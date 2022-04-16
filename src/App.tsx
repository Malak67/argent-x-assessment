import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './components';
import { Home, PageNotFound } from './pages';

const App = () => (
  <Routes>
    <Route path='/' element={<MainLayout />}>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<PageNotFound />} />
    </Route>
  </Routes>
);

export default App;
