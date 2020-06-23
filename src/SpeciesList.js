import React, { Component, Fragment } from 'react';
import './App.css';
import villagerSpecies from './species';

class SpeciesList extends Component {
    render() {
        return (
            <Fragment>
                <option disabled value="">Select A Species</option>
                {   
                    villagerSpecies.map((species, index) => {
                        return (
                            <option key={index} value={species.type}>{species.type}</option>
                        )
                    })
                }
            </Fragment>
        );
    }
}

export default SpeciesList;
