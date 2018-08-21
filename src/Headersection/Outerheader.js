import React, { Component } from 'react';
import {Menu,Segment, List,Icon,Responsive,Container, Label} from 'semantic-ui-react';
import './outerheader.css';

export default class Outerheader extends Component{
    state={
        show:true
    }
    popupclick=()=>{
        this.setState({show:!this.state.show})
    }
    render(){

        return(
         
           
            <Container fluid>
                <div className="outerdiv relativeclas">
                    <div className="roundedcorner absolutreeclas">
                        <span>Service Status</span>
                        <Label color='yellow' circular size='mini'/>
                        <span>WEB TOOL IN PLANNED OUTAGE</span>
                        <Label color='teal' circular size='mini'/>
                        <span>MIPS IS LIVE</span>
                        <Label color='teal' circular size='mini'/>
                        <span>DASHBOARD IS LIVE</span>
                        <Label color='teal' circular size='mini'/>
                        <span>RPC CONECTIVITY  IS LIVE</span>
                    </div>
              
                        <Menu text>
                        <Menu.Item header>
                            <Icon color='red' size='huge' name='coffee' />Figmd
                        </Menu.Item>
                        <Menu.Menu position='right'>
                        <Menu.Item>
                            <Icon circular bordered disabled name="bell outline"/>
                            <Label color='red' circular size='mini'floating>1</Label>
                        </Menu.Item>
                        <Menu.Item name='Icon'>
                            <Icon circular name='file outline' />
                        </Menu.Item>
                        <Menu.Item name='Icon'>
                            <Icon circular inverted color='blue' name='user secret' />
                        </Menu.Item>
                        <Menu.Item name='Icon'>
                            <Icon circular inverted color='yellow' name='headphones' />
                        </Menu.Item>
                
                        </Menu.Menu>
                    </Menu>
                </div>
    
            </Container>
        )
    }
  
}
