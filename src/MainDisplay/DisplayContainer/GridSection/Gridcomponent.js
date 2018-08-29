import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import Firstcomponent from './Firstcomponentsection/Firstcomponent';
import Secondcomponent from './Firstcomponentsection/Secondcomponent';
import Thirdcomponent from './Firstcomponentsection/Thirdcomponent';
import Fourthcomponent from './Secondcomponentsection/fourthcomponent';
import Fifthcomonent from './Secondcomponentsection/Fifthcomponent';
import SixComponent from './Secondcomponentsection/Sixthcomponent';

<style>{`
     
.dd{
  width:100%
  align-content: ;
  background-color: #fff;
  display: flex;
  flex-wrap:wrap;
 //  flex-direction: column;
 justify-content: left;
   min-height: 20em;
}
`}</style>
const Gridcomponent = () => (

 
  

    <Grid  columns={3}>
      {/* <Grid.Row > */}
        <Grid.Column computer={6} mobile={16} tablet={8}>
          <div className="dd">
            <Firstcomponent />
          </div>
        </Grid.Column>
        {/** second component*/}
        <Grid.Column computer={4} mobile={16} tablet={8}>
          <div className="dd" >
            <Secondcomponent />
          </div>

        </Grid.Column>


        <Grid.Column computer={6} mobile={16} tablet={8}>
          <div className="dd">
            < Thirdcomponent />
          </div>

        </Grid.Column>

      {/* </Grid.Row> */}

      {/* <Grid.Row> */}
        <Grid.Column computer={6} mobile={16} tablet={8}>
          <div className="dd" >
            <Fourthcomponent />
          </div>
        </Grid.Column>

        <Grid.Column computer={4} mobile={16} tablet={8}>
          <div className="dd">
            <Fifthcomonent />
          </div>
        </Grid.Column>

        <Grid.Column computer={6} mobile={16} tablet={8}>
          <div className="dd" />
          <SixComponent/>
        </Grid.Column>

      {/* </Grid.Row> */}

    </Grid>

)
export default Gridcomponent;