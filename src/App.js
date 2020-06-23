import React, { Component, Fragment } from 'react';
import './App.css';
import axios from 'axios';
import Form from './Form';
import RelevantVillagers from './RelevantVillagers';
// import ShowInfo from './ShowInfo';

class App extends Component {

  constructor() {
    super();
    this.state = {
      villagers: [],
      relVillagers: [],
    }
  }

  componentDidMount() {
    axios({
      url: 'https://acnhapi.com/v1/villagers/',
      method: 'GET',
      responseType: 'json',
    }).then((response) => { 

      const data = response.data;

      const newState = [];

      for (let key in data) {
        newState.push({
          id: key,
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
    } 
  )}

  filterVillagers = (event, userSelection) => {
    event.preventDefault();
    const copyOfVillagers = [...this.state.villagers];
    const relVillagers = copyOfVillagers.filter((villager) => villager.species == userSelection)
    this.setState({
      relVillagers: relVillagers
    })
  }

  showInfo = (event) => {
    event.preventDefault();
    console.log('clicked');
  }

  render() {
    return (
      <Fragment>
        <header>
          <div className="wrapper">
            <h1>ACNH Villager App</h1>
          </div>
        </header>
        <main>
          <div className="wrapper">
            <Form filterVillagers={this.filterVillagers} />
            <ul>
              {this.state.relVillagers.map(({id, icon, name}) => {
                return <RelevantVillagers showInfo={this.showInfo} id={id} icon={icon} name={name} /> 
              })}
              {/* {this.state.relVillagers.map(({id, personality, birthday, catchphrase }) => {
                return <RelevantVillagers id={id} personality={personality} birthday={birthday} catchphrase={catchphrase} />
              })} */}
            </ul>
          </div>
        </main>
        <footer>
          <div className="wrapper">
            <p>Made with <span role="img" aria-label="">💖</span> by Tabitha Poeze</p>
          </div>
        </footer>
      </Fragment>
    )
  }
}

export default App;
