import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbarjs from './components/Navbar';
import Breadcrumbsjs from './components/Breadcrumbs';
import Carouseljs from './components/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import 'holderjs';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbarjs />
    <Breadcrumbsjs />
    <Carouseljs />
  </React.StrictMode>
);