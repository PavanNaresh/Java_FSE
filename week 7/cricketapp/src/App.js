import "./App.css";

import ListofPlayers from "./components/ListofPlayers";
import Scorebelow70 from "./components/Scorebelow70";
import ListofIndianPlayers from "./components/ListofIndianPlayers";

import {
  OddPlayers,
  EvenPlayers,
  IndianPlayers,
} from "./components/IndianPlayers";

function App() {
  const players = [
    { name: "Jack", score: 50 },
    { name: "Michael", score: 70 },
    { name: "John", score: 40 },
    { name: "Ann", score: 61 },
    { name: "Elisabeth", score: 61 },
    { name: "Sachin", score: 95 },
    { name: "Dhoni", score: 100 },
    { name: "Virat", score: 84 },
    { name: "Jadeja", score: 64 },
    { name: "Raina", score: 75 },
    { name: "Rohit", score: 80 },
  ];

  const IndianTeam = [
    "Sachin1",
    "Dhoni2",
    "Virat3",
    "Rohit4",
    "Yuvaraj5",
    "Raina6",
  ];

  // Keep this true for the first output
  const flag = false;

  if (flag) {
    return (
      <div className="App">
        <h1>List of Players</h1>

        <ListofPlayers players={players} />

        <hr />

        <h1>List of Players having Scores Less than 70</h1>

        <Scorebelow70 players={players} />
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Odd Players</h1>

      {OddPlayers(IndianTeam)}

      <hr />

      <h1>Even Players</h1>

      {EvenPlayers(IndianTeam)}

      <hr />

      <h1>List of Indian Players Merged</h1>

      <ListofIndianPlayers IndianPlayers={IndianPlayers} />
    </div>
  );
}

export default App;