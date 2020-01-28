import React from 'react';
import './App.css';
import Comp from '@dynamicsingh/reactpack1';

const App: React.FC = () => {
  return (
    <div className="App">
      <Comp firstName="John" lastName="Doe" age={22}/>
    </div>
  );
}

export default App;
