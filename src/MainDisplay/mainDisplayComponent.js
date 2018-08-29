import React,{Component} from 'react'
import {Grid, Container} from 'semantic-ui-react';
import SideMenu from './Sidebar/SideMenu/sideMenu';
import DataDisplayContainer from './DisplayContainer/DataDisplayContainer';

<style>{`.ui.container{width:90%}`}</style>
export default class MainDisplayComponent extends Component{
    render(){
        return(
            
            <div  style={{marginTop:'10px'}} className="seeFormhere2">
          
            <Grid columns={2}>
            <Grid.Column computer={2} mobile={1}>
            <SideMenu/>
            </Grid.Column>
            {/* <Grid.Column width={1}> */}
             {/* space between the 2 colunms */}
             {/* </Grid.Column>  */}
            <Grid.Column computer={14} mobile={15}>
            <DataDisplayContainer/>
            
            </Grid.Column>
            </Grid>
           
            </div>
        )
    }
}