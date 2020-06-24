import React, { Component, Fragment } from 'react';
import './App.css';

class ShowInfo extends Component {
    render() {
        return (
            <Fragment key={this.props.id}>
                {/* <li>
                    <ul className="instructionsList">
                        <li><p>Click 'DISPLAY' to go back to all the icons of your previously selected species OR</p></li>
                        <li><p>Use the dropdown menu to make a new selection and then click 'DISPLAY'.</p></li>
                    </ul>
                </li> */}
                <li><img src={this.props.icon} alt={this.props.name}></img></li>
                <li><p className="villagerName">{this.props.name}</p></li>
                <li><p className="villagerBday">Birthday: {this.props.birthday}</p></li>
                <li><p>Catchphrase: "{this.props.catchphrase}"</p></li>
                <li><p>Personality: {this.props.personality}</p></li>
            </Fragment>
        );
    }
}


export default ShowInfo;



