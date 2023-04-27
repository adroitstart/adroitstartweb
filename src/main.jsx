import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Header/>
    <Router>
      <App />
    </Router>
    <Footer/>
  </React.StrictMode>
);
