import React, { Component, Fragment } from 'react';
import './App.css';



class RelevantVillagers extends Component {

    render() {
        return (
            <Fragment>
                <li>
                    <button key={this.props.id} onClick={(event) => this.props.showInfo(event, this.props.id)}>
                        <img src={this.props.icon} alt={this.props.name}></img>
                        <p>{this.props.name}</p>
                    </button>
                </li>   
            </Fragment> 
        );
    }   
}


export default RelevantVillagers;
