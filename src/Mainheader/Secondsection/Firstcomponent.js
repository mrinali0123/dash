import React from 'react';
import {Dropdown,List,Label} from 'semantic-ui-react';
<style>{`
     
     .dd{
    //    align-content: center;
    //    display: flex;
    //    flex-direction: column;
    //    justify-content: left;
          min-height: 15em;
          background-color: #fff;
     }
     
     }
     `}</style>
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
</div>
)
export default Firstcomponent;