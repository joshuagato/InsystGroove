import React from 'react'

const input = (props) => (
    <div className="input">
        <input onClick={props.click} onChange={props.change} type={props.type} 
        placeholder={props.placeholder} value={props.value} required />
    </div>
)

export default input;
