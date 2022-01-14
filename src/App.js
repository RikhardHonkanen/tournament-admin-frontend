import { useState, useEffect } from 'react';
import './App.css';

import Header from './components/Header';

const api = 'https://localhost:44335/'

// Test. This should be its own component.

function App() {
  const [tournaments, setTournaments] = useState([]);

  async function getTournamentsNear() {
    let url = api + 'api/tournaments/near';
    url += '?latitude=10.000000?longitude=15.000000';
  
    const response = await fetch(url);
    const tournaments = await response.json();
    
    setTournaments(currentTournaments => {
      return tournaments;      
    })    
  }
  return (
    <div className="App">
      <Header update={getTournamentsNear} />      
    </div>
  );
}

export default App;
