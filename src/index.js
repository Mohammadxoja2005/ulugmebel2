import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; 
import "aos/dist/aos.css"; 
import 'animate.css/animate.css'
import {HelmetProvider} from "react-helmet-async";  
import 'react-loading-skeleton/dist/skeleton.css'

// import "slick-carousel/slick/slick.css";  
// import "slick-carousel/slick/slick-theme.css"; 

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
    <App />      
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
