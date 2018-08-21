import React ,{Component} from 'react';
import {List, Header, Input, Segment } from 'semantic-ui-react';
import './dashline.css';

export default class DashLine extends Component{
    
    render(){
        
        return(
            <div  className='abc'>
            <Segment basic>
           <List horizontal verticalAlign='middle'>
               <List.Item>
                   <List.Content   floated="left" header>
                   <List.Header className="bigSize">MyDashboard</List.Header>
                   </List.Content>
                </List.Item>
                <List.Item>
                   <List.Content  floated="right">
                    <Input iconPosition="left" placeholder="search" icon='search'/>
                   </List.Content>
                </List.Item>
                <List.Item>
                   <List.Content floated="right">
                   <Input iconPosition="left" placeholder="search" icon='cog'/>
                   </List.Content>
                </List.Item>
            </List> 
           </Segment >
            </div>
        )
    }

}