import React, { Component, Fragment } from 'react';
import './App.css';



class RelevantVillagers extends Component {

    render() {
        return (
            <Fragment>
                <li key={this.props.id}>
                    <button onClick={(event) => this.props.showInfo(event)}>
                        <img src={this.props.icon} alt={this.props.name}></img>
                        <p>{this.props.name}</p>
                        {/* <p>personality: {this.props.personality}</p>
                        <p>birthday: {this.props.birthday}</p>
                        <p>catchphrase: "{this.props.catchphrase}"</p> */}
                    </button>
                </li>   
            </Fragment> 
        );
    }   
}


export default RelevantVillagers;
