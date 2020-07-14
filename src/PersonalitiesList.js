import React, { Component, Fragment } from 'react';
import './App.css';
import villagerPersonality from './personality';

class PersonalitiesList extends Component {
    render() {
        return (
            <Fragment>
                <option disabled value="">Options</option>
                {
                    // map through the array of villager personalities to return options for the user to select when filtering
                    villagerPersonality.map((personality, index) => {
                        return (
                            <option key={index} value={personality.type}>{personality.type}</option>
                        )
                    })
                }
            </Fragment>
        );
    }
}

export default PersonalitiesList;