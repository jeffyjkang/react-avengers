import React from 'react';
import Avenger from './Avenger';

const Avengers = props => {
    return (
        <div>
            {props.avengersData.map(avenger => (
                <Avenger key = {avenger.id} avenger = {avenger} />
            ))}
        </div>
    )
}

export default Avengers;