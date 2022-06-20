import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Homepage from './Homepage';
import Productdetails from './Productdetails';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Cartpage from './Cartpage';


function App() {
  return (
    // <div>
    //     <Cartpage />
    // </div>
    <Router>
     <Header />
     <Routes>
       <Route path='/' element={<Homepage/>}/>
       <Route path='/Productdetails/:id' element={<Productdetails/>} />
     </Routes>
    < Footer />
    // </Router>
  );
}

export default App;