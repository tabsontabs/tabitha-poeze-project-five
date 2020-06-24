import React, { Component, Fragment } from 'react';
import './App.css';
import axios from 'axios';
import Form from './Form';
import Instructions from './Instructions';
import RelevantVillagers from './RelevantVillagers';
import ShowInfo from './ShowInfo';
import logo from './assets/logo.png';

class App extends Component {

  constructor() {
    super();
    this.state = {
      villagers: [],
      relVillagers: [],
      hideInfo: true,
      clickedVillager: [],
      showInstructions: true,
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
          image: data[key]['image_uri'],
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
    const relVillagers = copyOfVillagers.filter((villager) => villager.species === userSelection)
    this.setState({
      relVillagers: relVillagers
    })
    this.setState({
      hideInfo: true
    })
    this.setState({
      showInstructions: false
    })
  }

  showInfo = (newEvent, id) => {
    newEvent.preventDefault();
    this.setState({
      hideInfo: false
    })
    const copyOfRelVillagers = [...this.state.relVillagers];
    const clickedVillager = copyOfRelVillagers.filter((villager) => villager.id === id)
    this.setState({
      clickedVillager: clickedVillager
    })
  }

  render() {
    return (
      <Fragment>
        <header>
          <div className="wrapper">
            <img className="headerImage" src={logo} alt='logo for Animal Crossing: New Horizons'></img>
            <h1>The Villager Finder</h1>
          </div>
        </header>
        <main>
          <div className="wrapper">
            <Form filterVillagers={this.filterVillagers} />
            {this.state.showInstructions === true ? (<Instructions />) : (<p></p>)}
            {this.state.hideInfo === true ? 
            (<ul className="relVillagerList">{this.state.relVillagers.map(({ id, icon, name }) => {
                return <RelevantVillagers showInfo={this.showInfo} id={id} icon={icon} name={name} />
            })}</ul>) : 
            (this.state.clickedVillager.map(({ id, image, name, personality, birthday, catchphrase }) => {
              return <ul className="moreInfo">
                <ShowInfo id={id} icon={image} name={name} personality={personality} birthday={birthday} catchphrase={catchphrase} />
              </ul>
            })
            )}
          </div>
        </main>
        <footer>
          <div className="wrapper">
            <p>Made with <span role="img" aria-label="pink heart with yellow sparkles">💖</span> by Tabitha Poeze</p>
          </div>
        </footer>
      </Fragment>
    )
  }
}

export default App;
