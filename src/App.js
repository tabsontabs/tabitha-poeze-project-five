import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';

class App extends Component {

  constructor() {
    super();
    this.state = {
      villagers: [],
      userSelection: '',
    }
  }

  componentDidMount() {
    Axios({
      url: 'https://acnhapi.com/v1/villagers/',
      method: 'GET',
      responseType: 'json',
    }).then((response) => {
      
      const data = response.data;

      console.log(data);

      const newState = [];

      for (let key in data) {
        newState.push({
          id: key,
          no: data[key]['id'],
          name: data[key]['name']['name-USen'],
          personality: data[key]['personality'],
          birthday: data[key]['birthday-string'],
          catchphrase: data[key]['catch-phrase'],
          icon: data[key]['icon_uri'],
          species: data[key]['species'],
        })
      }

      this.setState({
        villagers: newState
      })
    })
  }

  handleChange = (event) => {
    this.setState({
      userSelection: event.target.value,
    })
  }

  render() {
    return (
      <div className="villagers">
        <h1>Villager App</h1>
        <form>
          <select onChange={this.handleChange} id="species" name="userSelection">
            <option value="Clear">No Selection</option>
            <option value="Alligator">Alligator</option>
            <option value="Anteater">Anteater</option>
            <option value="Bird">Bird</option>
            <option value="Bear">Bear</option>
            <option value="Cat">Cat</option>
            <option value="Chicken">Chicken</option>
            <option value="Cow">Cow</option>
            <option value="Cub">Cub</option>
            <option value="Deer">Deer</option>
            <option value="Dog">Dog</option>
            <option value="Duck">Duck</option>
            <option value="Eagle">Eagle</option>
            <option value="Elephant">Elephant</option>
            <option value="Frog">Frog</option>
            <option value="Goat">Goat</option>
            <option value="Hamster">Hamster</option>
            <option value="Hippo">Hippo</option>
            <option value="Horse">Horse</option>
            <option value="Koala">Koala</option>
            <option value="Kangaroo">Kangaroo</option>
            <option value="Lion">Lion</option>
            <option value="Monkey">Monkey</option>
            <option value="Mouse">Mouse</option>
            <option value="Octopus">Octopus</option>
            <option value="Penguin">Penguin</option>
            <option value="Pig">Pig</option>
            <option value="Rabbit">Rabbit</option>
            <option value="Rhino">Rhino</option>
            <option value="Sheep">Sheep</option>
            <option value="Squirrel">Squirrel</option>
            <option value="Tiger">Tiger</option>
            <option value="Wolf">Wolf</option>
          </select> 
        </form>
        <ul>
          {this.state.villagers.map((villager) => {
            if (this.state.userSelection === villager.species) {
              return (
                <li key={villager.id}>
                  <img src={villager.icon} alt={villager.name}></img>
                  <p>name: {villager.name}</p>
                  <p>personality: {villager.personality}</p>
                  <p>birthday: {villager.birthday}</p>
                  <p>catchphrase: "{villager.catchphrase}"</p>
                </li>
              )
            }
          })}
        </ul>
      </div>
    );
  }
}

export default App;
