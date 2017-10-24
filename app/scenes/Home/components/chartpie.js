import React, { Component } from 'react';

export default class ChartPie extends Component {
    render(){
        return(
                <div className="col-md-4">
                        <div className="card">
                            <div className="header">
                                <h4 className="title">Email Statistics</h4>
                                <p className="category">Last Campaign Performance</p>
                            </div>
                            <div className="content">
                                <div id="chartPreferences" className="ct-chart ct-perfect-fourth"></div>

                                <div className="footer">
                                    <div className="legend">
                                        <i className="fa fa-circle text-info"></i> Open
                                        <i className="fa fa-circle text-danger"></i> Bounce
                                        <i className="fa fa-circle text-warning"></i> Unsubscribe
                                    </div>
                                    <hr/>
                                    <div className="stats">
                                        <i className="fa fa-clock-o"></i> Campaign sent 2 days ago
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        );
    }
}