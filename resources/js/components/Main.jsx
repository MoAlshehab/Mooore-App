import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './Footer';
import Navbar from './Navbar';
import Products from './Pages/Products';
import '../../sass/app.scss';
import '../../css/app.css';



if (document.getElementById('main')) {
    const Index = ReactDOM.createRoot(document.getElementById("main"));

    Index.render(
        <React.StrictMode>
            <Navbar/>
            <Products/>
            <Footer/>
        </React.StrictMode>
    )
}
