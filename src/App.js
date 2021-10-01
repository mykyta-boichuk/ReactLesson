import React from 'react';
import Header from "./Header/Header";
import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import './App.css';
import Dialogs from './Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='appWrapper'>
        <Header />
        <Navbar />
        <div className="appWrapper__content">
          <Route path='/dialogs' component={Dialogs}/>
          <Route path='/profile' component={Profile}/>
        </div>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
