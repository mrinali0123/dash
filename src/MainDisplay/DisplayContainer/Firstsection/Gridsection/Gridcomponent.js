import React from 'react';
import {Grid,Container,List,GridColumn} from 'semantic-ui-react';
import Firstcomponent from './Firstcomponent';
import Secondcomponent from './Secondcomponent';
import Thirdcomponent from './Thirdcomponent';
import Fourthcomponent from './Secondcomponentsection/fourthcomponent';
const Gridcomponent =()=>(

<Container>

<style>{`
     
     .dd{
       align-content: ;
       background-color: #fff;
       display: flex;
       flex-wrap:wrap;
      //  flex-direction: column;
      justify-content: left;
        min-height: 20em;
     }
     
     }
     `}</style>

    <Grid centered columns={3}>
      <Grid.Row >
        <Grid.Column width={6}>
        <div className="dd">
           <Firstcomponent/>
        </div>
           </Grid.Column>
           {/** second component*/}
        <Grid.Column width={4}>
          <div className="dd" >
          <Secondcomponent/>
          </div>

        </Grid.Column>


        <Grid.Column width={6}>
          <div className="dd">
          < Thirdcomponent/>
          </div>
          
        </Grid.Column>
        
      </Grid.Row>

      <Grid.Row>
           <Grid.Column width={6}>
          <div className="dd" >
            <Fourthcomponent/>
          </div>
        </Grid.Column>

        <Grid.Column width={4}>
          <div className="dd"/>
        </Grid.Column>

        <Grid.Column width={6}>
          <div className="dd" />
        </Grid.Column>

      </Grid.Row>

    </Grid>
</Container>
)
export default Gridcomponent;