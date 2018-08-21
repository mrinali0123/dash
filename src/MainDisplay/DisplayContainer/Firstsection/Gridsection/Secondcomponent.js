import React from 'react';
import { Segment,Divider,Menu,Header,Dropdown,Label,List}from 'semantic-ui-react';
const Secondcomponent =()=>(
    <div>
  <List style={{ marginTop: '1em',marginLeft:'1em' }} divided>
    <List.Item>
      <List.Content floated='right'>
      <Label as='a' style={{borderRadius:'4em'}}>
             <Dropdown  text='Measures'>
               <Dropdown.Menu>
                 <Dropdown.Item>List Item</Dropdown.Item>
                 <Dropdown.Item>List Item</Dropdown.Item>
                 <Dropdown.Item>
                   <i className='dropup icon' /> 
                 </Dropdown.Item>
             </Dropdown.Menu>
            </Dropdown>
          </Label>
      </List.Content>
     <List.Header>Top 5</List.Header>
    </List.Item>
    </List> 
    
  
     <Divider/> 
    <List as='ol'relaxed>
    <List.Item>
      <List.Header as='li'>Daniel Louise</List.Header>
      <List.Description>ID:389</List.Description>
     
    </List.Item>
    <List.Item>
   
    
        <List.Header as='li'>Primary OPen-Angular Glaucom..</List.Header>
        <List.Description>ID:765</List.Description>
    </List.Item>
    <List.Item>

        <List.Header as='li'>Adult Primary Rhegmatogenous</List.Header>
      <List.Description>ID:384</List.Description>
    
    </List.Item>
    <List.Item>


  <List.Header as='li'>Diabetes Eye Exam</List.Header>
<List.Description>ID:117</List.Description>

</List.Item>
<List.Item>


  <List.Header as='li'>Age Related Macular Deggenerated....</List.Header>
<List.Description></List.Description>

</List.Item>
  </List>
 View All
  </div>
) 
export default Secondcomponent;