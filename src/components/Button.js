import React from 'react';
import './button.css';

function Button(props) {

    function buttonClick() {
        props.handleClick(props.value);
    }

    return (
        <button type="button" className="calc-button" onClick={buttonClick}>
            {props.value}
        </button>
    );
}

export default Button;
