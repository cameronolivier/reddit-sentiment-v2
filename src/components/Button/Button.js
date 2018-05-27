import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonText, callBack }) => {
    return (
        <button type="submit" onClick={()=>{callBack()}}>{buttonText}</button>
    );
};

Button.defaultProps = {
    buttonText: 'I AM DEFAULT',
    callBack: null
};

Button.propTypes = {
    buttonText: PropTypes.string,
    callBack: PropTypes.func,
};

export default Button;