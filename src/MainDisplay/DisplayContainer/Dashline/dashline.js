import React ,{Component} from 'react';
import {List, Input, Segment, Grid,Header} from 'semantic-ui-react';
import './dashline.css';

export default class DashLine extends Component{
    
    render(){
        
        return(
            <div  className='abc'>
            <Segment basic>
           {/* <List horizontal verticalAlign='middle'>
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
            </List>  */}
            <Grid>
                <Grid.Row>
                <Grid.Column computer={10} tablet={6} mobile={16}>
                {/* <Header>MyDashboard</Header> */}
                <h1 style={{float:'left'}}>MyDashboard</h1>
                </Grid.Column>
                <Grid.Column computer={3} tablet={5} mobile={16}>
                <Input iconPosition="left" placeholder="search" icon='search'/>
                </Grid.Column>
                <Grid.Column computer={3} tablet={5} mobile={16}>
                <Input iconPosition="left" placeholder="search" icon='cog'/>
                </Grid.Column>
                </Grid.Row>
            </Grid>
           </Segment >
            </div>
        )
    }

}