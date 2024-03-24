import React from 'react';
import ReactDOM from 'react-dom/client';
import './Component/style.css';
import Home from './Component/Home';
import Gallery from './Component/Gallery';
import reportWebVitals from './reportWebVitals';
import Footer from './Component/Footer';
import Event  from './Component/Event';
// import About from './Component/About;';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
    {/* <About/> */}
    <Gallery/>
    <Event/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
