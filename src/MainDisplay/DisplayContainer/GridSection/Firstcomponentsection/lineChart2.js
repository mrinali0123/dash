import React, { Component } from 'react';
// import Rx from '@reactivex/rxjs';
import AmCharts from "@amcharts/amcharts3-react";
import Data from '../../json_data/lineGraph1.json';

export default class Test extends React.Component {

  constructor(props){
    super(props);
    this.state={
      // dataProvider:getData()\
      dataProvider:[]
    }
  }

  componentDidMount() {
    this.setState({
          dataProvider: Data
    });
  }

  render() {

    return (
      <div className="areaChartArea">
      <h1>bar chart</h1>
        <AmCharts.React
         style={{
          width:"200px",
          height: "100px"
          
        }}
        options={{
          'type':"xy",
        'theme':"light",
        "graphs": [{
            "balloonText": "<div style='margin:5px;'><b>[[x]]</b><br>y:<b>[[y]]</b><br>value:<b>[[value]]</b></div>",
            // "bullet": "diamond",
            // "maxBulletSize": 25,
            "lineAlpha": 0.8,
            "lineThickness": 2,
            "lineColor": "#b0de09",
            "fillAlphas": 0,
            "xField": "date",
            "yField": "ay",
            "valueField": "aValue"
          }, {
            "balloonText": "<div style='margin:5px;'><b>[[x]]</b><br>y:<b>[[y]]</b><br>value:<b>[[value]]</b></div>",
            // "bullet": "round",
            // "maxBulletSize": 25,
            "lineAlpha": 0.8,
            "lineThickness": 2,
            "lineColor": "#fcd202",
            "fillAlphas": 0,
            "xField": "date",
            "yField": "by",
            "valueField": "bValue"
          }],
          "valueAxes": [{
            "id": "ValueAxis-1",
            "axisAlpha": 0
          }, {
            "id": "ValueAxis-2",
            "axisAlpha": 0,
            "position": "bottom"
          }],
          "allLabels": [],
          "titles": [],
          "dataProvider":this.state.dataProvider,
          "export": {
                              "enabled": true
                   }
        }}
        
          />
          </div> 
        )
  }
}





    