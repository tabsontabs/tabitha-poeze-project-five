import React, { Component, Fragment } from 'react';
import './App.css';
import villagerZodiac from './zodiac';

class ZodiacList extends Component {
    render() {
        return (
            <Fragment>
                <option disabled value="">Options</option>
                {
                    // map through the array of zodiac signs to return options for the user to select when filtering
                    villagerZodiac.map((sign, index) => {
                        return (
                            <option key={index} value={sign.type}>{sign.type}</option>
                        )
                    })
                }
            </Fragment>
        );
    }
}

export default ZodiacList;
