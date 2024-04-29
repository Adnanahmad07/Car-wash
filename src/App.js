
import "slick-carousel/slick/slick.css";
import 'slick-carousel/slick/slick-theme.css';
import { Route, Routes, ScrollRestoration } from 'react-router-dom';
import './App.css';

import { Aboutus, Contactus, OurPro, Servic } from "./page";

import { About, Contact, Header, Navbar, Services, Product } from './containers';

function App() {
  return (
    <div>
      <Navbar />



      <Routes>

        <Route path='/' element={<>


          <Header />
          <Services />
          <Product />
          <About />

        </>
        } ScrollRestoration="auto" />




        <Route path='/Aboutus' element={<Aboutus />} ScrollRestoration="auto" />
        <Route path='/Contactus' element={<Contactus />} ScrollRestoration="auto" />
        <Route path='/product' element={<OurPro />} ScrollRestoration="top" />
        <Route path='/sercices' element={<Servic />} ScrollRestoration="top" />
      </Routes>




      <Contact />
    </div>
  );
}

export default App;

