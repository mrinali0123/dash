import React ,{Component} from 'react'
import {Header , Grid, List,Icon,Divider} from 'semantic-ui-react'
import './thirdcomponent.css'
export default class  Thirdcomponent extends Component {
    render(){
      
        return(
            <div className="box3" style={{backgroundColor:'#fff'}}>
            <List >
              <List.Item> <List.Content><Header as='h2' >
                Onboarding Status
                </Header></List.Content><List.Content floated='right'>
                <Icon  name="external alternate" size='small'/> 
                    </List.Content> 
                </List.Item>
              </List>
            <Divider/>
            Status
            <Grid columns={2} divided>
            <Grid.Column width={6} >
            {/* .ui.grid > .column:not(.row) {
    padding-top: 0.4rem;
    padding-bottom: 0.5rem;
}
             */}
            <Grid 
          centered
          columns={1}
          padded
          stackable
          style={{ margin: '-1.2em'}}
          textAlign='middle'>
          <Grid.Column color='yellow' style={{ margin: '0.3em', height: 30 }}>
            Active Leads 
          </Grid.Column>
          <Grid.Column color='blue' style={{ margin: '0.3em', height: 30 }}>
            Registration
          </Grid.Column>
          <Grid.Column color='orange' style={{ margin: '0.3em', height: 30 }}>
            Data Extraction
          </Grid.Column>
          <Grid.Column color='purple' style={{ margin: '0.3em', height: 30 }}>
            CMS Reporting..
          </Grid.Column>
          <Grid.Column color='green' style={{ margin: '0.3em', height: 30 }}>
            Production
          </Grid.Column>
          {/* <Grid.Column color='yellow' style={{ margin: '0.3em', height: 30 }}>
            Yellow
          </Grid.Column>
          <Grid.Column color='olive' style={{ margin: '0.3em', height: 30 }}>
            Olive
          </Grid.Column>
          <Grid.Column color='green' style={{ margin: '0.3em', height: 30 }}>
            Green
          </Grid.Column>
          <Grid.Column color='teal' style={{ margin: '0.3em', height: 30 }}>
            Teal
          </Grid.Column>
         
          <Grid.Column color='violet' style={{ margin: '0.3em', height: 30 }}>
            Violet
          </Grid.Column>
          <Grid.Column color='purple' style={{ margin: '0.3em', height: 30 }}>
            Purple
          </Grid.Column>
          <Grid.Column color='pink' style={{ margin: '0.3em', height: 30 }}>
            Pink
          </Grid.Column> */}

            </Grid>

            </Grid.Column>
            <Grid.Column width={10} >
            <p/>
            </Grid.Column>
            </Grid>
            </div>
        )
    }
    
}
 