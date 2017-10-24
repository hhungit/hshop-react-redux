import React, { Component } from 'react';

import Sidebar from '../../components/layout/sidebar';
import Navbar from '../../components/layout/navbar';
import Footer from '../../components/layout/footer';
import ChartPie from './components/ChartPie'
import ChartColumn from './components/chartcolumn';

export default class Home extends Component {
   render(){
return(
   <div className="wrapper">
       <Sidebar/>
       <div className="main-panel">
       <Navbar/>
        <div className="content">
        <div className="container-fluid">
        <div className="row">
           <ChartPie/>
           <ChartColumn/>
        </div>
        </div>
        </div>
       <Footer/>
       </div>
       </div>
);
   }
}