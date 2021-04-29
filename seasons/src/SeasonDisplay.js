import './SeasonDisplay.css';
import React from 'react';

function getSeason(latitude){
    var month = new Date().getMonth();
    if(month>=3&& month<8){
        return latitude>0 ? 'summer' : 'winter';
    }
    else {
        return latitude>0? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat);
    const text = season === 'winter' ? 'It\'s chilly' : 'Let\'s hit the beach';
    const icon = season === 'winter' ? 'snowflake' : 'sun';
    return (
        <div>
            <i className={`${icon} icon`} />
            
                <h1>{text}</h1>
            
            <i className="massive sun icon" />
        </div>
    );
}

export default SeasonDisplay;

