import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';

function App() {

  const [players, setPlayers] = useState([])

  return (
    <div className="App">
      <Banner />
      <Form onPlayerRegistered = {
        player => setPlayers([...players, player])
      }/>
      <Team name = "Loud"/>
      <Team name = "Furia"/>
      <Team name = "Faze"/>
      <Team name = "Cloud9"/>
    </div>
  );
}

export default App;
