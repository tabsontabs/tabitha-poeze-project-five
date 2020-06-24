import React, { Component } from 'react';
import './App.css';
import SpeciesList from './SpeciesList';

class Form extends Component {

    constructor() {
        super();
        this.state = {
            userSelection: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            userSelection: event.target.value,
        })
    }

    render() {
        return (
            <form>
                <div className="selectBox">
                    <label htmlFor="userSelectSpecies" className="sr-only">Select A Species</label>
                    <select id="userSelectSpecies" value={this.state.userSelection} onChange={this.handleChange}>
                        <SpeciesList />
                    </select>
                </div>
                <button className="display" onClick={(event) => this.props.filterVillagers(event, this.state.userSelection)}>Display</button>
            </form>
        );
    }
}

export default Form;