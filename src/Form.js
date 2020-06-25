import React, { Component, Fragment } from 'react';
import './App.css';
import SpeciesList from './SpeciesList';
import PersonalitiesList from './PersonalitiesList';    
import ZodiacList from './ZodiacList.js';

class Form extends Component {

    constructor() {
        super();
        this.state = {
            userSelection: '',
            userRadioSelection: ''
        }
    }

    handleRadioChange = (event) => {
        this.setState({
            userRadioSelection: event.target.value,
        })
    }

    handleChange = (event) => {
        this.setState({
            userSelection: event.target.value,
        })
    }

    render() {
        return (
            <Fragment>
                <form>
                    <fieldset value={this.state.userRadioSelection} onChange={this.handleRadioChange}>
                        <input className="sr-only" type="radio" name="searchType" id='speciesRadio' value='Species'></input>
                        <label htmlFor='speciesRadio'>Species</label>
                        <input className="sr-only" type="radio" name="searchType" id='personalityRadio' value='Personality'></input>
                        <label htmlFor='personalityRadio'>Personality</label>   
                        <input className="sr-only" type="radio" name="searchType" id='zodiacRadio' value='Zodiac'></input>
                        <label htmlFor='zodiacRadio'>Zodiac</label> 
                    </fieldset>
                </form>
                <form>
                    <div className="selectBox">
                        <label htmlFor="userSelection" className="sr-only">Options</label>
                        <select id="userSelection" value={this.state.userSelection} onChange={this.handleChange}>
                            {this.state.userRadioSelection === 'Personality' ? (<PersonalitiesList />) : 
                            this.state.userRadioSelection === 'Zodiac' ? (<ZodiacList />) :
                            (<SpeciesList />)}
                        </select>
                    </div>
                    <button className="display" onClick={(event) => this.props.filterVillagers(event, this.state.userSelection)}>Display</button>
                </form>
            </Fragment>
        );
    }
}

export default Form;