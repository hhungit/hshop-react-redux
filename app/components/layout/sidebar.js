import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class Sidebar extends Component {
  render() {
    return (
    <div className="sidebar" data-color="purple" >
    	<div className="sidebar-wrapper">
            <div className="logo">
                <a href="http://www.creative-tim.com" className="simple-text">
                    Creative Tim
                </a>
            </div>

            <ul className="nav">
                <li className="active">
                    <Link to="/">
                   
                        <i className="pe-7s-graph"></i>
                        <p>Home</p>
                    </Link>
                </li>
                <li>
                <Link to="/product">
                        <i className="pe-7s-note2"></i>
                        <p>Product</p>
                    </Link>
                </li>
                <li>
                <Link to="/">
                        <i className="pe-7s-news-paper"></i>
                        <p>Categories</p>
                    </Link>
                </li>


            </ul>
    	</div>
    </div>
    );
  }
}