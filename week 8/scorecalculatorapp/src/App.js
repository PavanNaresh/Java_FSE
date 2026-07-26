import React from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {

  return (
    <CalculateScore
      Name="Monika"
      School="Sona College of Technology"
      Total={450}
      goal={5}
    />
  );

}

export default App;