import React, { Component } from 'react';
import HOC from '../backgroundHOC';
import AmCharts from "@amcharts/amcharts3-react";
import Test from '../Firstcomponentsection/lineChart2';

class SixComponent extends React.Component {
 
    render(){
        return(
            <div className="">
            <Test/>
            </div>
        )
    }
}
export default HOC(SixComponent);