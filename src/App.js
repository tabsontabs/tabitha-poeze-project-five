import React, { Component, Fragment } from 'react';
import './App.css';
import axios from 'axios';
import logo from './assets/logo.png';
import Form from './Form';
import Instructions from './Instructions';
import RelevantVillagers from './RelevantVillagers';
import ShowInfo from './ShowInfo';

class App extends Component {

  constructor() {
    super();
    this.state = {
      villagers: [],
      relVillagers: [],
      clickedVillager: [],
      hideInfo: true,
      showInstructions: true,
    }
  }

  componentDidMount() {
    // pull villager data from API
    axios({
      url: 'https://acnhapi.com/v1/villagers/',
      method: 'GET',
      responseType: 'json',
    }).then((response) => { 

      // get the data within the response that is needed
      const data = response.data;

      // create empty array
      const newState = [];

      // loop through data to obtain relevant information for each villager
      for (let key in data) {
        // get the necessary information from 'birthday-string' and 'birthday' in order to determine the villager's zodiac sign later
        let zodiacMonth = (data[key]['birthday-string']).substring(0, 3);
        let zodiacDay = parseInt(data[key]['birthday']);
        // push the relevant info for each villager into an array
        newState.push({
          id: key,
          name: data[key]['name']['name-USen'],
          personality: data[key]['personality'],
          birthday: data[key]['birthday-string'],
          birthdayNumber: data[key]['birthday'],
          catchphrase: data[key]['catch-phrase'],
          icon: data[key]['icon_uri'],
          image: data[key]['image_uri'],
          species: data[key]['species'],
          zodiacMonth: zodiacMonth,
          zodiacDay: zodiacDay,
          zodiacSign: '',
        })
      }

      // determine to villager's zodiac sign based on the 'birthday' and 'birthday-string' provided by the API', have the results into another array
      const zodiacState = newState.map((villager) => {
        if ((villager.zodiacMonth == 'May' && villager.zodiacDay < 21) || (villager.zodiacMonth == 'Apr' && villager.zodiacDay > 19)) {
          villager.zodiacSign = "Taurus"; return villager;
        } else if ((villager.zodiacMonth == 'Jun' && villager.zodiacDay < 22) || (villager.zodiacMonth == 'May' && villager.zodiacDay > 20)) {
          villager.zodiacSign = "Gemini"; return villager;
        } else if ((villager.zodiacMonth == 'Jul' && villager.zodiacDay < 24) || (villager.zodiacMonth == 'Jun' && villager.zodiacDay > 21)) {
          villager.zodiacSign = "Cancer"; return villager;
        } else if ((villager.zodiacMonth == 'Aug' && villager.zodiacDay < 24) || (villager.zodiacMonth == 'Jul' && villager.zodiacDay > 23)) {
          villager.zodiacSign = "Leo"; return villager;
        } else if ((villager.zodiacMonth == 'Sep' && villager.zodiacDay < 23) || (villager.zodiacMonth == 'Aug' && villager.zodiacDay > 23)) {
          villager.zodiacSign = "Virgo"; return villager;
        } else if ((villager.zodiacMonth == 'Oct' && villager.zodiacDay < 23) || (villager.zodiacMonth == 'Sep' && villager.zodiacDay > 22)) {
          villager.zodiacSign = "Libra"; return villager;
        } else if ((villager.zodiacMonth == 'Nov' && villager.zodiacDay < 23) || (villager.zodiacMonth == 'Oct' && villager.zodiacDay > 22)) {
          villager.zodiacSign = "Scorpio"; return villager;
        } else if ((villager.zodiacMonth == 'Dec' && villager.zodiacDay < 21) || (villager.zodiacMonth == 'Nov' && villager.zodiacDay > 22)) {
          villager.zodiacSign = "Sagittarius"; return villager;
        } else if ((villager.zodiacMonth == 'Jan' && villager.zodiacDay < 21) || (villager.zodiacMonth == 'Dec' && villager.zodiacDay > 20)) {
          villager.zodiacSign = "Capricorn"; return villager;
        } else if ((villager.zodiacMonth == 'Feb' && villager.zodiacDay < 20) || (villager.zodiacMonth == 'Jan' && villager.zodiacDay > 20)) {
          villager.zodiacSign = "Aquarius"; return villager;
        } else if ((villager.zodiacMonth == 'Mar' && villager.zodiacDay < 21) || (villager.zodiacMonth == 'Feb' && villager.zodiacDay > 19)) {
          villager.zodiacSign = "Pisces"; return villager;
        } else {
          villager.zodiacSign = "Aries"; return villager;
        }
      })

      this.setState({
        villagers: zodiacState
      })
    } 
  )}
  
  filterVillagers = (event, userSelection) => {
    // prevent default performance of button
    event.preventDefault();

    // destructure the villagers array
    const copyOfVillagers = [...this.state.villagers];

    // determine how the villagers will be filtered (by zodiac sign, species, or personality) based on the user's selection 
    const relVillagers = copyOfVillagers.filter((villager) => villager.species === userSelection || villager.personality === userSelection || villager.zodiacSign === userSelection) 
    this.setState({
      relVillagers: relVillagers
    })
    // if showing villagers based on a selected filter, do not show instructions
    this.setState({
      hideInfo: true
    })
    userSelection == '' ? this.setState({showInstructions: true}) : this.setState({showInstructions: false})
  }

  showInfo = (newEvent, id) => {
    // prevent default performance of button
    newEvent.preventDefault();

    // if showing info for a specific villager, do not show all the filtered villagers
    this.setState({
      hideInfo: false
    })

    // destructure the filtered villagers array
    const copyOfRelVillagers = [...this.state.relVillagers];

    // show relevant info for one, specific villager
    const clickedVillager = copyOfRelVillagers.filter((villager) => villager.id === id)
    this.setState({
      clickedVillager: clickedVillager
    })
  }

  // bring the user back to the "homepage" with instructions
  goBack = () => {
    window.location.reload();
  }

  render() {
    return (
      <Fragment>
        <header id="refresh">
          <div className="wrapper">
            {/* logo that is also used as a 'go back' or refresh button to take the user back to the instructions */}
            <a onClick={this.goBack} href="#refresh"><img className="headerImage" src={logo} alt='logo for Animal Crossing: New Horizons'></img></a>
            <h1>The Villager Finder</h1>
          </div>
        </header>
        <main>
          <div className="wrapper">
            {/* captures the user selection that determines how the villagers will be filtered  */}
            <Form filterVillagers={this.filterVillagers} />

            {/* determines whether instructions are being shown */}
            {this.state.showInstructions === true ? (<Instructions />) : (<p></p>)}

            {/* determines whether info for a single villager is being shown */}
            {this.state.hideInfo === true ? 

            // maps through arrays passes necessary props to the Relevant Villagers and Show Info components
            (<ul className="relVillagerList">{this.state.relVillagers.map(({ id, icon, name }) => {
                return <RelevantVillagers showInfo={this.showInfo} id={id} icon={icon} name={name} />
            })}</ul>) : 
            (this.state.clickedVillager.map(({ id, image, name, personality, birthday, catchphrase, species, zodiacSign }) => {
              return <ul className="moreInfo">
                <ShowInfo id={id} icon={image} name={name} personality={personality} birthday={birthday} catchphrase={catchphrase} species={species} zodiacSign={zodiacSign} />
              </ul>
            })
            )}
          </div>
        </main>
        <footer>
          <div className="wrapper">
            <p>Made with <span role="img" aria-label="pink heart with yellow sparkles">💖</span> by <a href="https://www.tabithapoeze.com/">Tabitha Poeze</a> using the <a href="https://acnhapi.com/">Animal Crossing: New Horizons API</a></p>
          </div>
        </footer>
      </Fragment>
    )
  }
}

export default App;
