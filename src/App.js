import React from 'react';
import Header from "./Header/Header";
import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import './App.css';

function App() {
  return (
    <div className='appWrapper'>
    <Header />
    <Navbar />
    <Profile />
    <Footer />

    </div>
  );
}

export default App;
