import React from 'react';
export default (props) => (
    <div className="burger-container" onClick={props.changeBurger}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
    </div>
);