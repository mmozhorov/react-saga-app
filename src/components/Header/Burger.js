import React from 'react';
export default (props) => {
    return(
        <div className={`burger-container ${props.isOpen? "change" : ""}`} onClick={props.changeBurger}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
    );
};