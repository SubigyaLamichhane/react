import React from 'react';


const ApprovalCard = (props) => {
    console.log(props);
    return(
    <div className = " ui card" style={{width: '440px', marginTop: '10px'}}>
        <div className = "content">
          <span>{props.children}</span>
        </div>
        <div className = "extra content">
          <div className = "ui two buttons">
            <div className = "ui basic green button">Approve</div>
            <div className = "ui basic red button">Decline</div>
          </div>
        </div>
    </div>
        
    );
}

export default ApprovalCard;