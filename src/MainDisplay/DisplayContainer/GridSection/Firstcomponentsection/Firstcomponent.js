import React from 'react';
import {Dropdown,List,Label, Grid} from 'semantic-ui-react';
import AmCharts from "@amcharts/amcharts3-react";
import HOC from '../backgroundHOC';

import Test from './lineChart2';

const Firstcomponent =()=>(
    
    <div>
          
    <List horizontal>
      <List.Item href='#'><List.Header>Practise Management</List.Header></List.Item>
      <List.Item href='#'> 
          <Label style={{borderRadius:'4em'}}>
             <Dropdown  text='Add Target'>
               <Dropdown.Menu>
                 <Dropdown.Item>List Item</Dropdown.Item>
                 <Dropdown.Item>List Item</Dropdown.Item>
                 <Dropdown.Item>
                   <i className='dropup icon' /> 
                 </Dropdown.Item>
             </Dropdown.Menu>
            </Dropdown>
          </Label>
      </List.Item>
      <List.Item> 
          <Label style={{borderRadius:'4em'}}>
             <Dropdown  text='Add Target'>
               <Dropdown.Menu>
                 <Dropdown.Item>List Item</Dropdown.Item>
                 <Dropdown.Item>List Item</Dropdown.Item>
                 <Dropdown.Item>
                  <i className='dropup icon' /> 
                 </Dropdown.Item>
               </Dropdown.Menu>
             </Dropdown>
          </Label>
      </List.Item>
</List>
<Grid columns={2}>
  <Grid.Column width={4}>
  </Grid.Column>
  <Grid.Column width={12}>
  <Test/>
  </Grid.Column>

</Grid>
</div>
)
export default HOC(Firstcomponent);