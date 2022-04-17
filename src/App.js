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
import Register from './Auth/Register/Register';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/services/:ServiceId' element={<RequireAuth>
          <Checkout></Checkout>
        </RequireAuth>}></Route>
     
      <Route path='/checkout' element={<RequireAuth>
        <Checkout></Checkout>
      </RequireAuth>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}> </Route>
        <Route path='/login' element={<LOgin></LOgin>}></Route>
        <Route path='/register' element={<Register></Register>}> </Route>
      </Routes>
    </div>
  );
};

export default App;