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
                <select value={this.state.userSelection} onChange={this.handleChange}>
                    <SpeciesList />
                </select>
                <button onClick={(event) => this.props.filterVillagers(event, this.state.userSelection)}>Display!</button>
            </form>
        );
    }

    // render() {
    //     return (
    //         <form>
    //             <select onChange={this.handleChange} id="species" name="userSelection">
    //                 <option value="Clear">No Selection</option>
    //                 <option value="Alligator">Alligator</option>
    //                 <option value="Anteater">Anteater</option>
    //                 <option value="Bird">Bird</option>
    //                 <option value="Bear">Bear</option>
    //                 <option value="Cat">Cat</option>
    //                 <option value="Chicken">Chicken</option>
    //                 <option value="Cow">Cow</option>
    //                 <option value="Cub">Cub</option>
    //                 <option value="Deer">Deer</option>
    //                 <option value="Dog">Dog</option>
    //                 <option value="Duck">Duck</option>
    //                 <option value="Eagle">Eagle</option>
    //                 <option value="Elephant">Elephant</option>
    //                 <option value="Frog">Frog</option>
    //                 <option value="Goat">Goat</option>
    //                 <option value="Hamster">Hamster</option>
    //                 <option value="Hippo">Hippo</option>
    //                 <option value="Horse">Horse</option>
    //                 <option value="Koala">Koala</option>
    //                 <option value="Kangaroo">Kangaroo</option>
    //                 <option value="Lion">Lion</option>
    //                 <option value="Monkey">Monkey</option>
    //                 <option value="Mouse">Mouse</option>
    //                 <option value="Octopus">Octopus</option>
    //                 <option value="Penguin">Penguin</option>
    //                 <option value="Pig">Pig</option>
    //                 <option value="Rabbit">Rabbit</option>
    //                 <option value="Rhino">Rhino</option>
    //                 <option value="Sheep">Sheep</option>
    //                 <option value="Squirrel">Squirrel</option>
    //                 <option value="Tiger">Tiger</option>
    //                 <option value="Wolf">Wolf</option>
    //             </select>
    //         </form>
    //     );
    // }
}

export default Form;