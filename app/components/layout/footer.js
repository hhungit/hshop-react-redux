import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
        <footer className="footer">
        <div className="container-fluid">
            <nav className="pull-left">
                <ul>
                    <li>
                        <a href="#">
                            Home
                        </a>
                    </li>

                </ul>
            </nav>
            <p className="copyright pull-right">
                &copy; 2017 <a href="/">HShop</a>
            </p>
        </div>
    </footer>
    );
  }
}