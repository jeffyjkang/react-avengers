import React from 'react';
import PropTypes from 'prop-types';


const Avenger = props => {
    return (
        <div>
            Name: {props.avenger.name}, played by: {props.avenger.actor}
        </div>
    )
}

Avenger.propTypes = {
    avengers: PropTypes.shape ({
    id: PropTypes.number,
    name: PropTypes.string,
    actor: PropTypes.string,        
    })
}

export default Avenger;