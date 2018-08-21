import React ,{Component} from 'react'
import {Icon,Menu,Sidebar,   Segment} from 'semantic-ui-react'

 
export default class SideMenu extends Component {
  state={activeItem:'tachometer alernate',
        colour:'blue'}
        handleOnClick=(e,{name})=>{
          this.setState({activeItem:name,
                          colour:'blue'})
        }
  render(){
    const {activeItem}=this.state;
    return(
      
      <Sidebar as={Menu} animation='overlay' icon='labeled' color={this.state.colour} vertical visible width='thin'>
     
      <Menu.Item as='a' 
      name="tachometer alternate"
      onClick={this.handleOnClick}
      active={activeItem ==='tachometer alternate'}>
        <Icon name='tachometer alternate' /> 
      </Menu.Item>

      <Menu.Item as='a' 
      name='user circle outline'
      active={activeItem ==='user circle outline'}
      onClick={this.handleOnClick}>
        <Icon name='user circle outline' />
      </Menu.Item>
      <Menu.Item as='a' 
      name='star outline'
      active={activeItem ==='star outline'}
      onClick={this.handleOnClick}>
        <Icon name='star outline' />
      </Menu.Item>
      <Menu.Item as='a'
      name='clipboard list'
       active={activeItem ==='clipboard list'}
        onClick={this.handleOnClick}>
        <Icon name='clipboard list' />
      </Menu.Item>
      <Menu.Item as='a' 
      name="line graph"
      active={activeItem ==='line graph'}
      onClick={this.handleOnClick}>
        <Icon name='line graph' />
      </Menu.Item>
      <Menu.Item as='a' onClick={this.handleOnClick}
      name='tv'
      active={activeItem ==='tv'} >
        <Icon name='tv' />
      </Menu.Item>
     
    </Sidebar>
   
    )
  }
  
}
    
