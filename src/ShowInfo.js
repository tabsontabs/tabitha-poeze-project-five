import React, { Component, Fragment } from 'react';
import './App.css';

class ShowInfo extends Component {
    render() {
        return (
            <Fragment>
                <li key={this.props.id}>
                    <p>personality: {this.props.personality}</p>
                    <p>birthday: {this.props.birthday}</p>
                    <p>catchphrase: "{this.props.catchphrase}"</p>
                </li>
            </Fragment>
        );
    }
}


export default ShowInfo;



