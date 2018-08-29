import React ,{Component} from 'react';
import Gridcomponent from './GridSection/Gridcomponent';
import DashLine from './Dashline/dashline';
import { Container, Grid } from 'semantic-ui-react';

export default class DataDisplayContainer extends Component{
    render(){
        return(
            <div className="seeFromhere" style={{ width: '95%'}}>
       
            <Grid.Column width={16}>
          <DashLine/>
          </Grid.Column>
          <Grid.Column width={16}>
          <Gridcomponent/>
          </Grid.Column>
        
            </div>
        )
    }
}