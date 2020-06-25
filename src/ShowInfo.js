import React, { Component, Fragment } from 'react';
import './App.css';

class ShowInfo extends Component {
    render() {
        return (
            <Fragment key={this.props.id}>
                <li><img src={this.props.icon} alt={this.props.name}></img></li>
                <li>
                    <ul className="showInfoTextBox">
                        <li><p className="villagerName">{this.props.name}</p></li>
                        <li><p className="villagerBday">Birthday: {this.props.birthday}</p></li>
                        <li><p>Species: {this.props.species}</p></li>
                        <li><p>Catchphrase: "{this.props.catchphrase}"</p></li>
                        <li><p>Personality: {this.props.personality}</p></li>  
                        <li><p>Zodiac Sign: {this.props.zodiacSign}</p></li>  
                    </ul>
                </li>
            </Fragment>
        );
    }
}


export default ShowInfo;



