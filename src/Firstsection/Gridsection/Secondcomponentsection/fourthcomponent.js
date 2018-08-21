import React,{Component} from 'react';
import {List,Icon,Header,Grid} from 'semantic-ui-react';
const fourthcomponent = ()=>(
    
    <div>
        <Grid columns={2}>
            <Grid.Column>
                <List horizontal>
                    <List.Item>
                        <List.Header floated='left'>Payment</List.Header>
                    </List.Item>
                </List>
            </Grid.Column>
            <Grid.Column>
                <List>
                    <List.Item floated='right'>
                        <List.Content><Icon name=""/></List.Content>
                    </List.Item>
                </List>
            </Grid.Column>
        </Grid>
    </div>
        )
    export default fourthcomponent;
  

