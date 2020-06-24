import React, { Component } from 'react';
import './App.css';
import villagers from './assets/villagers6.jpg';
import isabelle from './assets/isabelle.png';

class Instructions extends Component {

    render() {
        return (
            <div className="instructions">
                <img className="mobileImage" src={villagers} alt="A group of Animal Crossing:New Horizons villagers celebrating in front of a museum."></img>
                <img className="desktopImage" src={isabelle} alt="A group of Animal Crossing:New Horizons villagers celebrating in front of a museum."></img>
                <div className="instructionsTextBox">
                    <h2>Instructions</h2>
                    <p>Choose a villager species from the dropdown menu.</p>
                    <p>Click the "DISPLAY" button to view names and icons for all associated villagers.</p>
                    <p>You can click on a villager's icon to view their full photo and more information about them.</p>
                </div>
            </div>
        );
    }
}

export default Instructions;