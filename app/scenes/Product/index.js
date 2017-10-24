import React, { Component } from 'react';

import Sidebar from '../../components/layout/sidebar';
import Navbar from '../../components/layout/navbar';
import Footer from '../../components/layout/footer';
import ProductList from './components/listproduct';
 

export default class Product extends Component {
    render(){
return(
    <div className="wrapper">
    <Sidebar/>
        <div className="main-panel">
        <Navbar/>
        <div className="content">
        <div className="container-fluid">
        <div className="row">
            <ProductList/>
        </div>
        </div>
        </div>
        <Footer/>
        </div>
        </div>
);
    }
}