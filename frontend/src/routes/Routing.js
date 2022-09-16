import React from 'react';
import {
  Route,
  Routes
} from "react-router-dom";
import Home from '../pagesContainer/Home';
import LoginRegister from '../pagesContainer/LoginRegister';

const Routing = () => {
  return (
    <>
    <Routes>
<Route path='/' element={<Home />} />
<Route path='/login' element={<LoginRegister />} />
    </Routes>
    </>
  )
}

export default Routing;