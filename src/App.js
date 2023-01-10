import { useState } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Form from './components/Form';
import Team from './components/Team';
import {v4 as uuidv4} from 'uuid';

function App() {

  const [players, setPlayers] = useState([])

  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: 'Furia',
      primaryColor: '#fff',
      secondaryColor: '#000',
      fontColor: '#fff'
    },
    {
      id: uuidv4(),
      name: 'Optic',
      primaryColor: '#fff',
      secondaryColor: '#9dc73b',
      fontColor: '#fff'
    },
    {
      id: uuidv4(),
      name: 'Loud',
      primaryColor: '#13FF00',
      secondaryColor: '#000',
      fontColor: '#13FF00'
    },
    {
      id: uuidv4(),
      name: 'Cloud9',
      primaryColor: '#fff',
      secondaryColor: '#00AEEF',
      fontColor: '#fff'
    },
    {
      id: uuidv4(),
      name: 'Liquid',
      primaryColor: '#fff',
      secondaryColor: '#0a1723',
      fontColor: '#fff'
    }
  ])

  function deletePlayer(){
    
  }

  function changeColorTeam(color, id){
    setTeams(teams.map(team => {
      if(team.id === id){
        team.secondaryColor = color;
      }
      return team
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Form onPlayerRegistered = {
        player => setPlayers([...players, player])
      }
      teams = {teams.map(team => team.name)}
      />
      {teams.map(team => 
        <Team name = {team.name} 
        changeColor = {changeColorTeam}
        key = {team.name} 
        primaryColor = {team.primaryColor} 
        secondaryColor = {team.secondaryColor} 
        fontColor = {team.fontColor}
        players = {players.filter(player => player.team ===       
        team.name)}
        onDelete = {deletePlayer}
        id = {team.id}
      />
      )}
      <Footer />
    </div>
  );
}

export default App;
