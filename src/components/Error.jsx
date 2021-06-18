import React from 'react'
import PropTypes from 'prop-types';


export default function Error(props) {

    const {messageError} = props;

    return (
        <p className="alert alert-danger error">{messageError}</p>
    )
}

Error.propTypes = {
    messageError: PropTypes.string.isRequired
}