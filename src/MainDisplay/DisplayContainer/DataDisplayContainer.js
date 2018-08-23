import React ,{Component} from 'react';
import Gridcomponent from './GridSection/Gridcomponent';
import DashLine from './Dashline/dashline';

export default class DataDisplayContainer extends Component{
    render(){
        return(
            <div className="">
         <DashLine/>
         <Gridcomponent/>
            </div>
        )
    }
}