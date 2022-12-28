import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';

function App() {

  const [players, setPlayers] = useState([])

  return (
    <div className="App">
      <Banner />
      <Form onPlayerRegistered = {
        player => setPlayers([...players, player])
      }/>
    </div>
  );
}

export default App;
