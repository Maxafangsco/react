import React from 'react';
import './Hemisphere.css';
import northernPic from './image/northern-hemisphere.png';
import southernPic from './image/southern-hemisphere.jpeg';

const hemispehreConfig = {
    Northern: {
text: 'It is northern hemisphere',
picture: northernPic
    },
    Sourthern: {
text: 'It is southern hemisphere',
picture: southernPic
    }
}

const HemisphereDisplay = ({latitude})=>{
    const hemisphere = latitude > 0 ? 'Northern' : 'Sourthern';
    const { text, picture } = hemispehreConfig[hemisphere]
    return(
        <div className={hemisphere}>
            <div className='ui raised text container segment'>
                <div>
                <img src={picture} alt="hemisphere" />
                </div>
                <div className='ui teal botton attached label'>
                <h1>{ text }</h1>
                </div>

            </div>
          
           
        </div>
    )
}

export default HemisphereDisplay;