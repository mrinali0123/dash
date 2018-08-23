import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import './fifthcomponent.css';
// import { findIconDefinition } from '@fortawesome/fontawesome-svg-core';

export default class Fifthcomonent extends Component {

    render() {
        // const countryOptions = [ { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' }, { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' }, { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' }]
        const countryOptions = [{ key: '1', text: 'field1', value: 'field1' }, { key: '2', text: 'field2', value: 'field2' }, { key: '3', text: 'field1', value: 'field3' }];
        return (
            // <div className="containnerdiv">

            //         <div className="firstparentdiv">
            //             <div className="firstparentchildone"><h3>Submissions</h3></div>
            //             <div className="firstparentchildtwo">hiii</div>
            //         </div>
            //         <div className="secondparentdiv">
            //             <div className=""><p>By Practices</p></div>
            //             <div className=""> <Dropdown placeholder='Select Country' fluid search selection options={countryOptions} /></div>
            //         </div>
            //         <div className="thirdparentdiv">
            //             <div className=""><p>MIPS</p></div>
            //             <span>654</span>
            //         </div>
            //         <div className="lastparentdiv">
            //             <div className="lastchildone"><p>Illionus Medicaid</p></div>

            //             <div className="lastchildtwo"><p>ACO</p></div>
            //             <div>80</div>
            //         </div>
            // </div>




            <div className="containnertwo">
                <div className="firstparentdiv">
                    <div className="firstparentchild"><header>Submissions</header></div>
                    <div className="firstparentsecondchild">{"Icon"}</div>
                </div>
                <div className="secondparentdiv">
                    <div className="seconparentfirstchild"><header>By Practices</header></div>
                    <div className="seconparentsecondchild"><Dropdown placeholder='Select Country' fluid search selection options={countryOptions} /></div>
                </div>
                <div className="thirdparentdiv">
                    <div className="thirdparentchildone"><header>MIPS</header></div>
                    <div className="thirdparentchildone">657</div>
                </div>
                <div className="lastparentdiv">
                   <div className="lastparentchildone">
                        <div className="innerchild"><header>Illinois Medicaid</header></div>
                        <div className="innerchildtwo">565</div>
                   </div>
                   <div className="lastparentchildtwo">
                        <div className="innerchild">ACO</div>
                        <div className="innerchildtwo">4322</div>
                   
                   </div> 
                    
                </div>
            </div>
        );
    }
}