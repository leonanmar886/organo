import { useState } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Form from './components/Form';
import Team from './components/Team';

function App() {

  const [players, setPlayers] = useState([])

  const teams = [
    {
      name: 'Furia',
      primaryColor: '#fff',
      secondaryColor: '#000',
      fontColor: '#fff'
    },
    {
      name: 'Optic',
      primaryColor: '#fff',
      secondaryColor: '#9dc73b',
      fontColor: '#fff'
    },
    {
      name: 'Loud',
      primaryColor: '#13FF00',
      secondaryColor: '#000',
      fontColor: '#13FF00'
    },
    {
      name: 'Cloud9',
      primaryColor: '#fff',
      secondaryColor: '#00AEEF',
      fontColor: '#fff'
    },
    {
      name: 'Liquid',
      primaryColor: '#fff',
      secondaryColor: '#0a1723',
      fontColor: '#fff'
    }
  ]

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
        key = {team.name} 
        primaryColor = {team.primaryColor} 
        secondaryColor = {team.secondaryColor} 
        fontColor = {team.fontColor}
        players = {players.filter(player => player.team === team.name)}
      />
      )}
      <Footer />
    </div>
  );
}

export default App;
