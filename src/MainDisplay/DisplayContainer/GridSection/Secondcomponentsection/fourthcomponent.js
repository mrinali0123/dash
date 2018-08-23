import React from 'react';
import { List, Icon, Grid, Button, Header, ListItem } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './fourcomponent.css';
// import {faTwitter, faLinkedin, faGithub} from '@fortawesome/fontawesome-free-brands';
const fourthcomponent = () => (
    <div className="containerdiv">
   
        <div className="parentonediv">
            <div className="parentonechildfirst">{"Payment"}</div>
            <div className="parentonechildsecond">{"Icon"}</div>
        </div>

        <div className="parentwodiv">
            <div className="innerparentone">
                <div className="innerparentchildone" ><header>By Practices</header></div>
                <div className="innerparentchildtwo"><p>Total Practices</p></div>
                <div className="innerparentchildthree">678 </div>
            </div>
            <div className="innerparentone">
                <div className="innerparentchildone"><header >By Providers</header></div>
                <div className="innerparentchildtwo" ><p>Total Providers</p></div>
                <div className="innerparentchildthree">787</div>
            </div>
        </div>

        <div className="parenthreediv">
            <div className="childdiv">
                <div className="">Paid</div>
                <div className="">678</div>
            </div>
            <div className="childdiv">
                <div className="">unpaid</div>
                <div className="">789</div>
            </div>
            <div className="childdiv">
                <div className="">Paid</div>
                <div className="">986</div>
            </div>
            <div className="childdiv" >
                <div className="">Unpaid</div>
                <div className="">543</div>
            </div>
        </div>       
    </div>

)
export default fourthcomponent;


