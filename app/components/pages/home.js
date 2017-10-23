import React, { Component } from 'react';
 
import Sidebar from '../layout/sidebar';
 

import Navbar from '../layout/navbar';
import Footer from '../layout/footer';
import Dashboard from './content/home-content';
 

export default class Home extends Component {
    render(){
return(
    <div className="wrapper">
        <Sidebar/>
        <div className="main-panel">
        <Navbar/>
            <Dashboard/>
        <Footer/>
        </div>
        </div>
);
    }
}