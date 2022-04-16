import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LOgin from './Auth/Login/LOgin';
import RequireAuth from './Auth/RequireAuth';
import Checkout from './component/Checkout/Checkout';
import Header from './component/Header/Header';
import Home from './component/Home page/Home';
import Services from './component/Services/Services'
import Blog from './component/Blog/Blog'
import About from './component/About/About'

const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
     
      <Route path='/checkout' element={<Checkout></Checkout>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}> </Route>
        <Route path='/login' element={<LOgin></LOgin>}></Route>
      </Routes>
    </div>
  );
};

export default App;