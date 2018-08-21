import React,{Component} from 'react'
import {Grid} from 'semantic-ui-react';
import SideMenu from './Sidebar/SideMenu/sideMenu';
import DataDisplayContainer from './DisplayContainer/DataDisplayContainer';


export default class MainDisplayComponent extends Component{
    render(){
        return(
            <div  style={{marginTop:'10px'}} className="">
            <Grid columns={2}>
            <Grid.Column width={1}>
            <SideMenu/>
            </Grid.Column>
            <Grid.Column width={15}>
            <DataDisplayContainer/>
            
            </Grid.Column>
            </Grid>
            </div>
        )
    }
}