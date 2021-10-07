import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from "./Component/Header/Header";
import Navbar from "./Component/Navbar/Navbar";
import Dialogs from "./Component/Dialogs/Dialogs";
import Profile from "./Component/Profile/Profile";

function App(props) {

  return (
    <BrowserRouter>
      <div className='appWrapper'>
        <Header />
        <Navbar />
        <div className="content">
            <Route  path='/dialogs' render={ () =><Dialogs state={props.state.dialogsPage}/>}/>
            <Route exact path='/profile' render={ () =><Profile state={props.state.profilePage}/> }/>
        </div>


          {/*<div className="appWrapper__content">
          <Route path='/dialogs' render={ () =><Dialogs/>}/>
          <Route path='/profile' render={ () =><Profile profileData={props.profileData}/>}/>
        </div>
        <Footer />*/}
      </div>
    </BrowserRouter>
  );
}

export default App;
