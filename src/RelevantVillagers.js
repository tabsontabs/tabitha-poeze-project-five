import React, { Component, Fragment } from 'react';
import './App.css';

class RelevantVillagers extends Component {
    render() {
        return (
            <Fragment>
                <li className="relVillagerItem">
                    <ul>
                        <li><button className="villagerButton" key={this.props.id} onClick={(event) => this.props.showInfo(event, this.props.id)}>
                            <img src={this.props.icon} alt={this.props.name}></img>
                        </button></li>
                        <li><p className="listItemName">{this.props.name}</p></li>
                    </ul>
                </li>
            </Fragment>
        );
    }   
}

export default RelevantVillagers;
