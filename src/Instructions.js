import React, { Component } from 'react';
import './App.css';
import villagers from './villagers.jpeg'

class Instructions extends Component {

    render() {
        return (
            <div className="instructions">
                <img src={villagers} alt="A group of Animal Crossing:New Horizons villagers celebrating in front of a museum."></img>
                <div className="instructionsTextBox">
                    <p>Choose a villager species from the dropdown menu.</p>
                    <p>Click the "DISPLAY" button to view names and icons for all associated villagers.</p>
                    <p>You can click on a villager's icon to view their full photo and more information about them.</p>
                </div>
            </div>
        );
    }
}

export default Instructions;