import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './Footer';
import Navbar from './Navbar';
import Home from './Pages/Home';
import Products from './Pages/Products';
import '../../sass/app.scss';
// import axios from 'axios';



if (document.getElementById('main')) {
    const Index = ReactDOM.createRoot(document.getElementById("main"));

    Index.render(
        <React.StrictMode>
            <Navbar/>
            {/* <Home/> */}
            <Products/>
            <Footer/>
        </React.StrictMode>
    )
}
