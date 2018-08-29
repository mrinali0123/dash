import React ,{Component} from 'react'
import {Header , Grid, List,Icon,Divider} from 'semantic-ui-react'
import './thirdcomponent.css'
import HOC from '../backgroundHOC';
import Test from './lineChart2'




class  Thirdcomponent extends Component {
    render(){
      
        return(
            <div className="box3" >
            <Grid>
              <Grid.Row>
              <Grid.Column width={12} floated='left'>
              <h3>Onboarding Status</h3>
              </Grid.Column>
              <Grid.Column width={4} >
              <Icon  floated='right' name="external alternate" size='small'/> 
              </Grid.Column>
              </Grid.Row>
              </Grid>
            {/* <List >
              <List.Item> <List.Content><Header as='h2' >
                Onboarding Status
                </Header></List.Content><List.Content floated='right'>
                <Icon  name="external alternate" size='small'/> 
                    </List.Content> 
                </List.Item>
              </List> */}
            <Divider/>
            
            <Grid columns={2} divided>
            <Grid.Column width={4} >
            {/* .ui.grid > .column:not(.row) {
    padding-top: 0.4rem;
    padding-bottom: 0.5rem;
}
*/}
            Status
            <Grid 
          columns={1}
          padded
          stackable
          style={{ margin: '1.2em'}}
          textAlign='middle'>
          <Grid.Column color='yellow' style={{ margin: '0.3em', height: 50 }}>
            Active Leads 
          </Grid.Column>
          <Grid.Column color='blue' style={{ margin: '0.3em', height: 50 }}>
            Registration
          </Grid.Column>
          <Grid.Column color='orange' style={{ margin: '0.3em', height: 50 }}>
            Data Extraction
          </Grid.Column>
          <Grid.Column color='purple' style={{ margin: '0.3em', height: 50 }}>
            CMS Reporting..
          </Grid.Column>
          <Grid.Column color='green' style={{ margin: '0.3em', height: 50 }}>
            Production
          </Grid.Column>
          {/* <Grid.Column color='yellow' style={{ margin: '0.3em', height: 50 }}>
            Yellow
          </Grid.Column>
          <Grid.Column color='olive' style={{ margin: '0.3em', height: 50 }}>
            Olive
          </Grid.Column>
          <Grid.Column color='green' style={{ margin: '0.3em', height: 50 }}>
            Green
          </Grid.Column>
          <Grid.Column color='teal' style={{ margin: '0.3em', height: 50 }}>
            Teal
          </Grid.Column>
         
          <Grid.Column color='violet' style={{ margin: '0.3em', height: 50 }}>
            Violet
          </Grid.Column>
          <Grid.Column color='purple' style={{ margin: '0.3em', height: 50 }}>
            Purple
          </Grid.Column>
          <Grid.Column color='pink' style={{ margin: '0.3em', height: 50 }}>
            Pink
          </Grid.Column> */}

            </Grid>

            </Grid.Column>
            <Grid.Column width={12} >

            <Test/>
            </Grid.Column>
            </Grid>
            </div>
        )
    }
    
}
export default HOC(Thirdcomponent);