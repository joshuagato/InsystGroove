import React from 'react';

const ViewUser = (props) => {
    return (
        <div className="user-details column" onClick={props.view}>
            <img src={props.img} alt="Profile" />

            <div className="user-details-right">
                <p>Name: {props.name}</p>
            </div>
        </div>
    );
}

export default ViewUser;
