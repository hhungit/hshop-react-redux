import React, { Component } from 'react';

 
import Sidebar from '../layout/sidebar';
import Navbar from '../layout/navbar';
import Footer from '../layout/footer';
import ProductList from './content/product-content';
 

export default class Product extends Component {
    render(){
return(
    <div className="wrapper">
    <Sidebar/>
        <div className="main-panel">
        <Navbar/>
            <ProductList/>
        <Footer/>
        </div>
        </div>
);
    }
}