// Button.js
import React from 'react';
import PropTypes from 'prop-types';
import './button.css'; // Assuming you want to add styles
 
const Button = ({ text, onClick, type = 'button', disabled = false, className = '', style = {} }) => {
    return (
<button
            type={type}
            className={`custom-button ${className}`}
            style={style}
            onClick={onClick}
            disabled={disabled}
>
            {text}
</button>
    );
};
 
Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    disabled: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
};
 
export default Button;