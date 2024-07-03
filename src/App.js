
import "slick-carousel/slick/slick.css";
import 'slick-carousel/slick/slick-theme.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';

import { Aboutus, Contactus, OurPro, Servic } from "./page";

import { About, Contact, Header, Navbar, Services, Product, Plans } from './containers';
import { useEffect } from "react";
import Refar from "./containers/Refar/Refar.jsx";

function App() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  return (
    <div>
      <Navbar />







      <Routes>

        <Route path='/' element={<>


          <Header />
          <Services />
          <Refar />
          <Product />
          <About />


        </>
        } />




        <Route path='/Aboutus' element={<Aboutus />} />
        <Route path='/Contactus' element={<Contactus />} />
        <Route path='/product' element={<OurPro />} />
        <Route path='/sercices' element={<Servic />} />
        <Route path='/plans' element={<Plans />} />
      </Routes>




      <Contact />
    </div>
  );
}

export default App;

