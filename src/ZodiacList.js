import React, { Component, Fragment } from 'react';
import './App.css';
import villagerZodiac from './zodiac';

class ZodiacList extends Component {
    render() {
        return (
            <Fragment>
                <option disabled value="">Options</option>
                {
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
